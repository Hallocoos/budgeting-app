# budgeting-app
    npm run start
    npm run redb

    Database setup
        User table: id, username, password
        Account table: id, name
        Category table: id, user_id
        Transaction table: id, user_id, total, account_id, date
        Subtransaction table: id, category_id, amount, transaction_id
