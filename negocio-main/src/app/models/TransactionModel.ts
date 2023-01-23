import { CategoryModel } from "./CategoryModel";

export interface TransactionModel {
    id?: number,
    transaction_type?: string,
    category_id?: number,
    category?: CategoryModel,
    notes?: string,
    amount?: number,
    date?: Date,
    type?: string,
    transactions?: TransactionModel[]
}