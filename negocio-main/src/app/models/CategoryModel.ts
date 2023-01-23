import { TransactionModel } from "./TransactionModel";

export interface CategoryModel{
    id?: number,
    name?: string,
    transaction_type?: string,
    color?: string,
    icon?: string,
    transactions?: TransactionModel[]
    isChecked?: boolean,
    total?:number,
}