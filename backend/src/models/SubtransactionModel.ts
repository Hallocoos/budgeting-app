import knex from 'knex';
import {
    knexSelectByColumn,
    knexInsert,
    knexUpdateById,
    knexDeleteById,
} from '../services/dbService';

class Subtransaction {
    id?: number;
    amount: number;
    categoryId: number;
    transactionId: string;

    constructor(data: Partial<Subtransaction>) {
        Object.assign(this, data);
    }
}

export async function selectSubtransactionByColumn(
    columnValue,
    columnName
): Promise<Subtransaction> {
    return await knexSelectByColumn(columnValue, columnName, 'subtransaction');
}

export async function createSubtransaction(subtransaction): Promise<Subtransaction> {
    return await knexInsert(subtransaction, 'subtransaction');
}

export async function updateSubtransaction(subtransactionId, changes): Promise<Subtransaction> {
    return await knexUpdateById(subtransactionId, changes, 'subtransaction');
}

export async function deleteSubtransaction(subtransactionId): Promise<Subtransaction> {
    return await knexDeleteById(subtransactionId, 'subtransaction');
}
