import { Knex } from 'knex';
import * as dotenv from 'dotenv';
dotenv.config()

const config: { [key: string]: Knex.Config } = {
    development: {
        client: process.env.DB_TYPE,
        connection: {
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
        },
        migrations: {
            tableName: 'knex_migrations',
            directory: 'database/migrations',
        },
    },

    test: {
        client: 'sqlite3',
        connection: {
            filename: './test-db.sqlite',
        },
        useNullAsDefault: true,
        migrations: {
            tableName: 'knex_migrations',
            directory: 'database/migrations',
        },
        seeds: {
            directory: 'database/seeds',
        },
    },

    staging: {
        client: 'postgresql',
        connection: {
            host: process.env.DB_HOST,
            database: process.env.DB_NAME,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
        },
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            tableName: 'knex_migrations',
        },
        seeds: {
            directory: 'database/seeds',
        },
    },
};

export default config;
