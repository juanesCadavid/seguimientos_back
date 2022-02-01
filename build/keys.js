"use strict";
// export default{
//     database: {
//         host: process.env.DATABASEHOST || '147.182.179.68',
//         user: process.env.DATABASEUSER || 'admin',
//         password: process.env.DATABASEPASSWORD || 'Admin.Admin123',
//         database: process.env.DATABASE_NAME || 'bd_seguimientosprocex'
//     }
// }
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    database: {
        host: process.env.DATABASEHOST || 'localhost',
        user: process.env.DATABASEUSER || 'root',
        password: process.env.DATABASEPASSWORD || '12345',
        database: process.env.DATABASE_NAME || 'bd_seguimientosprocex'
    }
};
