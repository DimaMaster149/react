import DatabaseController from './DataBaseController';
import Logger from '../../utils/logger';
import Hasher from '../../utils/hasher';

//import messages from '../../utils/messages';
//import {tables, roles} from '../models/DataBase';

// =====================================================================================================================

class AuthController
{
    static getWithAccessInfoById(id)
    {
        const query = `SELECT 
      u.id as id, u.username as username, r.access as access, p.photo
      FROM users AS u 
      INNER JOIN roles AS r 
      ON r.id = u.role
      INNER JOIN photos AS p 
      ON u.id = p.userid
      WHERE u.id = ${id}`;

        return new Promise((resolve, reject) =>
        {
            DatabaseController.runQuery(query)
                .then((result) =>
                {
                    if(result.rows === [])
                    {
                        reject();
                    }

                    resolve(result.rows[0])
                })
                .catch((error) =>
                {
                    Logger.SQLQueryError(error, query);
                    reject(error);
                });
        });
    }

    static getByLogin(email)
    {
        const query = `SELECT 
      u.id as id, u.email as email, u.username as username, u.password as password, p.photo,
      r.access as access
      FROM users AS u 
      INNER JOIN roles AS r 
      ON r.id = u.role
      INNER JOIN photos AS p 
      ON u.id = p.userid
      WHERE email = '${email.toLowerCase()}'`;

        return new Promise((resolve, reject) =>
        {
            DatabaseController.runQuery(query)
                .then((result) =>
                {
                    resolve(result.rows[0]);
                })
                .catch((error) =>
                {
                    Logger.SQLQueryError(error, query);
                    reject(error);
                });
        });
    }

    static createUser(userData)
    {
        const commonUser = 1;

        return new Promise((resolve, reject) =>
        {
            Hasher.hashPasswordAsync(userData.key)
                .then((passwordHash) =>
                {
                    const query = `INSERT INTO users (username, password, email, role)
          VALUES ('${userData.name}', '${passwordHash}', '${userData.email}', '${commonUser}') 
          RETURNING id`;


                    if (!userData.name || !userData.key)
                    {
                        reject(messages.wrongCredentials)
                    }

                    DatabaseController.runQuery(query)
                        .then((result) =>
                        {
                            result = JSON.parse(JSON.stringify(result.rows));
                            resolve(result[0].id)
                        })
                        .catch((error) =>
                        {
                            Logger.SQLQueryError(error, query);
                            reject(error);
                        });

                });
        });
    }
}

export default AuthController;

// return new Promise((resolve, reject) =>
// {
//
//     const query = `INSERT INTO users (username, password, email, role)
//           VALUES ('${userData.name}', '${userData.key}', '${userData.email}', '${commonUser}')
//           RETURNING id`;