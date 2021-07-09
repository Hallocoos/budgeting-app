import knex from 'knex';
import {
    knexSelectByColumn,
    knexInsert,
    knexUpdateById,
    knexDeleteById,
} from '../services/dbService';

class Transaction {
    id?: number;
    accountId: number;
    userId: number;
    amountTotal: number;
    date?: string;
    collectionId: number;

    constructor(data: Partial<Transaction>) {
        Object.assign(this, data);
    }
}

export async function selectTransactionByColumn(
    columnValue,
    columnName
): Promise<Transaction> {
    return await knexSelectByColumn(columnValue, columnName, 'transaction');
}

export async function createTransaction(transaction): Promise<Transaction> {
    return await knexInsert(transaction, 'transaction');
}

export async function updateTransaction(transactionId, changes): Promise<Transaction> {
    return await knexUpdateById(transactionId, changes, 'transaction');
}

export async function deleteTransaction(transactionId): Promise<Transaction> {
    return await knexDeleteById(transactionId, 'transaction');
}
