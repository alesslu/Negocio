import { CategoryModel } from "./CategoryModel";

export interface FilterModel {
    categories?: CategoryModel[],
    min?: number | null,
    max?: number | null,
    from?: Date | string | null,
    to?: Date | string | null,
}