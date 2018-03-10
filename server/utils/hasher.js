import bcrypt from 'bcrypt';
import config from '../bin/config';

const salt = config.passwords.salt;
const hashRounds = config.passwords.hashRounds;


class Hasher
{

    static hashPasswordAsync(password)
    {
        return new Promise((resolve) =>
        {
            bcrypt.hash(password + salt, hashRounds)
                .then( (res) =>
                {
                    resolve(res);
                })
        })
    }

    static comparePasswordsAsync(password, compared)
    {
        return new Promise((resolve) =>
        {
            bcrypt.compare(password + salt, compared)
                .then( (res) =>
                {
                    resolve(res);
                })
        })
    }
}

export default Hasher