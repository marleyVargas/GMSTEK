import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { PeriodicElement, Transaction } from '../Interfaces/transaction';
import { TransactionService } from '../Services/transaction.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class HomeComponent implements OnInit {
  data!: MatTableDataSource<any>;

  constructor(
    public transactionService: TransactionService,
  ) { }

  dataSource = <any>[];
  columnsToDisplay = ['name', 'weight', 'symbol', 'position'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement!: PeriodicElement | null;


  @ViewChild(MatPaginator) set paginator(pag: MatPaginator) {
    if (pag) this.data.paginator = pag;
  }
 
    // MatPaginator Inputs
    length = 100;
    pageSize = 5;
    pageSizeOptions: number[] = [];
  
    // MatPaginator Output
    pageEvent!: PageEvent;

    paginaConsulta: number = 1;
    totalRegister: number = this.dataSource.length;
    currentPage: number = 0;
    totalPages: number = this.dataSource.length/10;
  
    setPageSizeOptions(setPageSizeOptionsInput: string) {
      if (setPageSizeOptionsInput) {
        this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
      }
    }
    

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.dataSource = this.transactionService.getData()
  }

  pageEventClic(pageEvent: PageEvent) {
    this.paginaConsulta += 1;
    if(this.paginaConsulta <= this.totalPages){
      this.getData();
    }      
  }

}
