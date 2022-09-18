import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { PeriodicElement, Transaction } from "../Interfaces/transaction";

const ELEMENT_DATA: PeriodicElement[] = [
    {
      position: 1,
      name: 'Hydrogen',
      weight: 1.0079,
      symbol: 'H',
      description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
          atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`,
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