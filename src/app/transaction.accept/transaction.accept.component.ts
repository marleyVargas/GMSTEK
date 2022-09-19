import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DxDataGridComponent,DxTemplateModule } from 'devextreme-angular';
import { exportDataGrid, } from 'devextreme/excel_exporter';
import { Transaction } from '../models/transaction';
import { TransactionService } from '../Services/transaction.service';
import { Workbook } from 'exceljs';
import { saveAs } from 'file-saver';
import { exportDataGrid as exportDataGridToPdf } from 'devextreme/pdf_exporter';
import { jsPDF } from 'jspdf';
import Button from "devextreme/ui/button";



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
  
  @ViewChild('tableTransaction') dataGrid!: DxDataGridComponent;
   
  constructor(
    public transactionService: TransactionService,
  ) { }

  ngOnInit(): void {
    this.getTransactionsAccept();
  }

  getTransactionsAccept() {
    this.dataSource = this.transactionService.getData();
  }

  exportGrid(e: { format: string; component: any; cancel: boolean; }) {
    if (e.format === 'xlsx') {
        const workbook = new Workbook(); 
        const worksheet = workbook.addWorksheet("Main sheet"); 
        exportDataGrid({ 
            worksheet: worksheet, 
            component: e.component,
        }).then(function() {
            workbook.xlsx.writeBuffer().then(function(buffer) { 
                saveAs(new Blob([buffer], { type: "application/octet-stream" }), "TransactionsToAccept.xlsx"); 
            }); 
        }); 
        e.cancel = true;
    } 
    else if (e.format === 'pdf') {
        const doc = new jsPDF();
        exportDataGridToPdf({
            jsPDFDocument: doc,
            component: e.component,
        }).then(() => {
            doc.save('TransactionsToAccept.pdf');
        });
    }
}

  seleccionarColumnas() {
    this.dataGrid.instance.showColumnChooser();
  }
  
}
