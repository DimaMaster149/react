import {Client} from 'pg';

const client = new Client(
    {
        user: 'postgres',
        host: 'localhost',
        database: 'Project1',
        password: 'qwerty1',
        port: 5432
    });

client.connect();

module.exports.DataBase = client;