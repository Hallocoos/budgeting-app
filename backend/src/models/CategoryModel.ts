import knex from 'knex';
import {
    knexSelectByColumn,
    knexInsert,
    knexUpdateById,
    knexDeleteById,
} from '../services/dbService';

class Category {
    id?: number;
    userId: number;
    collectionId: number;
    name: string;

    constructor(data: Partial<Category>) {
        Object.assign(this, data);
    }
}

export async function selectCategoryByColumn(
    columnValue,
    columnName
): Promise<Category> {
    return await knexSelectByColumn(columnValue, columnName, 'category');
}

export async function createCategory(category): Promise<Category> {
    return await knexInsert(category, 'category');
}

export async function updateCategory(categoryId, changes): Promise<Category> {
    return await knexUpdateById(categoryId, changes, 'category');
}

export async function deleteCategory(categoryId): Promise<Category> {
    return await knexDeleteById(categoryId, 'category');
}
