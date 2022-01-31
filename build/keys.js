"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    database: {
        host: process.env.DATABASEHOST || 'localhost',
        user: process.env.DATABASEUSER || 'root',
        password: process.env.DATABASEPASSWORD || '12345',
        database: process.env.DATABASE_NAME || 'bd_seguimientosprocex'
    }
};
