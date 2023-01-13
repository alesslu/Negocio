import { CategoryModel } from "./CategoryModel";

export interface TransactionModel {
    id?: number,
    category_id?: number,
    category?: CategoryModel,
    description?: string,
    amount?: number,
    date?: Date,
    type?: string,
    transactions?: TransactionModel[],
}