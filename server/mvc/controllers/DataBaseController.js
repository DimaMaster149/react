import {DataBase} from '../models/DataBase';

class DataBaseController
{
    static runQuery( query )
    {
        return new Promise( (resolve, reject) =>
        {
            DataBase.query( query, (err, result) =>
            {
                if(err)
                {
                    reject(err);
                }

                resolve(result);
            });
        });
    }
}

export default DataBaseController;