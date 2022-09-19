import { TransactionDetail } from "./transactionDetail";

export interface Transaction {
    date: Date;
    merchInvoice: number;
    merchant: string;
    location: string;
    icao: string;
    dodaac: string;
    tail: string;
    item: string;
    total: number;
    card: string;
    status: string;
    detail: TransactionDetail[];
    transactionCreated: Date;
    transactionDelayed: Date;
}
