import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Transaction } from '../models/transaction';
import { TransactionService } from '../Services/transaction.service';

@Component({
  selector: 'app-transaction-accept',
  templateUrl: './transaction.accept.component.html',
  styleUrls: ['./transaction.accept.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class TransactionAcceptComponent implements OnInit {
  dataSource = <any>[];
  data!: MatTableDataSource<any>;
  columnsToDisplay = ['date', 'merchInvoice', 'merchant', 'location', 'icao', 'dodaac', 'tail', 'item', 'total', 'card', 'status'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement!: Transaction | null;

  // MatPaginator Inputs
  length = 0;
  pageSize = 10;
  pageSizeOptions: number[] = [];

  // MatPaginator Output
  pageEvent!: PageEvent;

  paginaConsulta: number = 1;
  totalRegister: number = this.dataSource.length;
  currentPage: number = 1;
  totalPages: number = 1;

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }
  
   
  @ViewChild(MatPaginator) set paginator(pag: MatPaginator) {
    
  }
  
  constructor(
    public transactionService: TransactionService,
  ) { }

  ngOnInit(): void {
    this.getTransactionsAccept();
  }

  getTransactionsAccept() {
    this.dataSource = this.transactionService.getData();
  }

  pageEventClic(pageEvent: PageEvent) {
    this.paginaConsulta += 1;
    if(this.paginaConsulta <= this.totalPages){
      this.getTransactionsAccept();
    }      
  }

}
