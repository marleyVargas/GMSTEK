import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Dashboard } from '../models/dashboard';
import { Transaction } from '../models/transaction';
import { DashboardService } from '../Services/dashboard.service';
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

  constructor(
    public transactionService: TransactionService,
    public dashboardServicice: DashboardService,
  ) { }
 
  acceptTransactions!: Dashboard;
  invoiceTask!: Dashboard;
     
  ngOnInit(): void {
    this.getDashboard();
  }

  getDashboard() {
    this.acceptTransactions = this.dashboardServicice.getTransactionsAccept();
    this.invoiceTask = this.dashboardServicice.getInvoiceTask();
  }


}
