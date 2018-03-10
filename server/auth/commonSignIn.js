const LocalStrategy = require( 'passport-local' ).Strategy;
import AuthController from '../mvc/controllers/auth';

import Logger from '../utils/logger';
import Hasher from '../utils/hasher';

const errorMessages =
    {
        wrongPassword: "Wrong login or password provided.",
        wrongData: "Wrong login or password provided."
    };


export default new LocalStrategy(
    {
        usernameField: 'email',
        passwordField: 'password',
    },

    ( email, password, done) =>
    {
        AuthController.getByLogin(email)
            .then( (user) =>
            {
                if(user == undefined)
                {
                    throw new Error(errorMessages.wrongData);
                }

                Hasher.comparePasswordsAsync(password, user.password.trim())
                    .then( (res) =>
                    {
                        if(!res)
                        {
                            return done(errorMessages.wrongData, null);
                        }

                        user =
                            {
                                id: user.id,
                                username: user.username.trim(),
                                email: user.email.trim(),
                                photo: user.photo.trim(),
                                access: user.access
                            };
                        console.log((user));
                        return done( null,  user  );
                    })

            })
            .catch( (error) =>
            {
                Logger.userAuthError(error, email );
                return done(error, null )
            })
    }
);