import { TransactionDetail } from "./transactionDetail";

export interface Dashboard {
    count: number;
    new: number;
    disputed: number;
    delinquent: number;
    rejected: number;
}
