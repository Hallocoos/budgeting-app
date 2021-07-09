import knex from 'knex';
import {
    knexSelectByColumn,
    knexInsert,
    knexUpdateById,
    knexDeleteById,
} from '../services/dbService';

class Collection {
    id?: number;
    userId: number;
    name: string;

    constructor(data: Partial<Collection>) {
        Object.assign(this, data);
    }
}

export async function selectCollectionByColumn(
    columnValue,
    columnName
): Promise<Collection> {
    return await knexSelectByColumn(columnValue, columnName, 'collection');
}

export async function createCollection(collection): Promise<Collection> {
    return await knexInsert(collection, 'collection');
}

export async function updateCollection(collectionId, changes): Promise<Collection> {
    return await knexUpdateById(collectionId, changes, 'collection');
}

export async function deleteCollection(collectionId): Promise<Collection> {
    return await knexDeleteById(collectionId, 'collection');
}
