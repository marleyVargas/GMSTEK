import { Injectable } from "@angular/core";
import { Dashboard } from "../models/dashboard";

@Injectable({
    providedIn: 'root',
  })
export class DashboardService{

    getTransactionsAccept(): Dashboard{
      const transactionsAccept: Dashboard = {
          count: 6,
          new: 6,
          disputed: 0,
          delinquent: 0,
          rejected: 0

      }

      return transactionsAccept;
    }

    getInvoiceTask(): Dashboard{
      const task: Dashboard = {
          count: 4,
          new: 3,
          disputed: 0,
          delinquent: 1,
          rejected: 0

      }

      return task;
    }

}