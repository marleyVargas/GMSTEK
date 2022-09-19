import { Injectable } from "@angular/core";
import { Transaction } from "../models/transaction";
import { TransactionDetail } from "../models/transactionDetail";

const detail : TransactionDetail[] = [
    {
        merchantDescription: 'JetA',
        productCode: 9130013054097,
        quantity: '1,926 gal',
        retailPrice: 4.36,
        govPrice: 4.36,
        amount: 8397.36
    },
    {
        merchantDescription: 'Cleaning',
        productCode: 1019,
        quantity: '1',
        retailPrice: 324.11,
        govPrice: 302.14,
        amount: 302.14
    }
];

const ELEMENT_DATA: Transaction[] = [
    {
      date: new Date(2021,9,25,8,15,0,0),
      merchInvoice: 123456,
      merchant: 'ABC Fuel Company',
      location: 'Miami International Air',
      icao: 'KMIA/MIA',
      dodaac: 'FP217',
      tail: '2F567E',
      item: 'Fuel & Services',
      total: 8699.50,
      card: 'AIR Card 1234',
      status: 'New',
      detail: detail,
      transactionCreated: new Date(2021,9,25,8,15,0,0),
      transactionDelayed: new Date(2021,9,30,8,15,0,0),
    },
    {
        date: new Date(2021,10,1,8,15,0,0),
        merchInvoice: 542141,
        merchant: 'DEF Fuel Company',
        location: 'Miami International Air',
        icao: 'KMIA/MIA',
        dodaac: 'FP217',
        tail: '2F567E',
        item: 'Services',
        total: 8699.50,
        card: 'AIR Card 1234',
        status: 'New',
        detail: detail,
        transactionCreated: new Date(2021,9,25,8,15,0,0),
        transactionDelayed: new Date(2021,9,30,8,15,0,0),
      },
      {
        date: new Date(2021,10,1,8,15,0,0),
        merchInvoice: 123456,
        merchant: 'ABC Fuel Company',
        location: 'Miami International Air',
        icao: 'KMIA/MIA',
        dodaac: 'FP217',
        tail: '2F567E',
        item: 'Services',
        total: 324.11,
        card: 'AIR Card 1234',
        status: 'New',
        detail: detail,
        transactionCreated: new Date(21,9,25,8,15,0,0),
        transactionDelayed: new Date(21,9,30,8,15,0,0),
      },
      {
        date: new Date(2021,10,1,8,15,0,0),
        merchInvoice: 777222,
        merchant: 'DEF Fuel Company',
        location: 'Miami International Air',
        icao: 'KMIA/MIA',
        dodaac: 'FP217',
        tail: '2F567E',
        item: 'Fuel & Services',
        total: 7692.17,
        card: 'AIR Card 1234',
        status: 'New',
        detail: detail,
        transactionCreated: new Date(2021,9,25,8,15,0,0),
        transactionDelayed: new Date(2021,9,30,8,15,0,0),
      },
      {
        date: new Date(2021,9,30,8,15,0,0),
        merchInvoice: 777222,
        merchant: 'ABC Fuel Company',
        location: 'Miami International Air',
        icao: 'KMIA/MIA',
        dodaac: 'FP217',
        tail: '2F567E',
        item: 'Fuel & Services',
        total: 7692.17,
        card: 'AIR Card 1234',
        status: 'New',
        detail: detail,
        transactionCreated: new Date(2021,9,25,8,15,0,0),
        transactionDelayed: new Date(2021,9,30,8,15,0,0),
      },
      {
        date: new Date(2021,9,30,8,15,0,0),
        merchInvoice: 777222,
        merchant: 'DEF Fuel Company',
        location: 'Miami International Air',
        icao: 'KMIA/MIA',
        dodaac: 'FP217',
        tail: '2F567E',
        item: 'Fuel & Services',
        total: 7692.17,
        card: 'AIR Card 1234',
        status: 'New',
        detail: detail,
        transactionCreated: new Date(2021,9,25,8,15,0,0),
        transactionDelayed: new Date(2021,9,30,8,15,0,0),
      }
    
  ];

@Injectable({
    providedIn: 'root',
  })
export class TransactionService{
    getData(): any[]{
        return ELEMENT_DATA;
    }
}