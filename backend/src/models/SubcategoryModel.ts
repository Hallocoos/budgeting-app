import knex from 'knex';
import {
    knexSelectByColumn,
    knexInsert,
    knexUpdateById,
    knexDeleteById,
} from '../services/dbService';

class Subcategory {
    id?: number;
    userId: number;
    collectionId: number;
    name: string;

    constructor(data: Partial<Subcategory>) {
        Object.assign(this, data);
    }
}

export async function selectSubcategoryByColumn(
    columnValue,
    columnName
): Promise<Subcategory> {
    return await knexSelectByColumn(columnValue, columnName, 'subcategory');
}

export async function createSubcategory(subcategory): Promise<Subcategory> {
    return await knexInsert(subcategory, 'subcategory');
}

export async function updateSubcategory(subcategoryId, changes): Promise<Subcategory> {
    return await knexUpdateById(subcategoryId, changes, 'subcategory');
}

export async function deleteSubcategory(subcategoryId): Promise<Subcategory> {
    return await knexDeleteById(subcategoryId, 'subcategory');
}
