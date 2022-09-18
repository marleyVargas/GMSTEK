export interface Transaction {
    sate: string;
    merchInvoice: number;
    merchant: number;
    location: string;
    icao: string;
    dodaac: string;
    tail: string;
    item: string;
    total: string;
    card: string;
    status: string;
}

export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
    description: string;
  }
