import express from 'express';
const router = express.Router();

import passport from 'passport';

//import Validator from '../../utils/validator';
import Response from '../../utils/response';

import auth from "../../mvc/controllers/auth";

const messages =
    {
        successfulLogin: "Login is successful.",
        successfulLogout: "Logged out successful.",
        wrongLoginData: "Data provided is wrong.",
        connectionError: "Error during connection",
        alreadyLogged: "Error. You are already logged in.",
        wrongUsernameProvided: "Error. Wrong username format.",
        passwordError: "Passwords doesn't match or too short.",
        alreadyExists: "User already exists.",
        mailUsed: "Wrong data. Same mail is already used.",
        loginUsed: "Wrong data. Same login is already used."
    };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

router.post('/login', (req, res, next) =>
{
    passport.authenticate( 'local-login', (err, user) =>
    {
        if( err )
        {
            return Response.send(res, false, {message: err.message});
        }
        else
        {
            if(user)
            {
                req.logIn( user, ( err ) =>
                {
                    if( err )
                    {
                        return Response.send(res, false, {message: err.message});
                    }
                    else
                    {
                        const answer =
                            {
                                message: messages.successfulLogin,

                                user:
                                    {
                                        id: user.id,
                                        name: user.name,
                                        email: user.email,
                                        key: user.key,
                                        born_year: user.born_year,
                                        born_month: user.born_month,
                                        born_day: user.born_day,
                                        education: user.education,
                                        children: user.children,
                                        region: user.region,
                                        territory: user.territory,
                                        photo: user.photo,
                                        created: user.created,
                                        access: user.access,
                                        session: req.sessionID
                                    }
                            };

                        Response.send(res, true, answer);
                    }
                })
            }
            else
            {
                const answer =
                    {
                        message: messages.wrongLoginData,
                    };

                Response.send(res, false, answer);
            }
        }
    }) (req,res,next);
});

console.log(req.body.user);

router.post('/signUp', (req, res, next) =>
{
    const userData = req.body.user;



    // ===============================================================================================

    // if(req.user !== undefined)
    // {
    //   return Response.send(res, false, {message: messages.alreadyLogged});
    // }
    //
    // if(!userData.username || !Validator.validateUsername(userData.username))
    // {
    //   return Response.send(res,false, {message: messages.wrongUsernameProvided})
    // }
    //
    // if( !userData.password || userData.password.length < 4 )
    // {
    //   return Response.send(res, false, {message: messages.passwordError});
    // }

    // ===============================================================================================

    auth.createUser(userData)
        .then((answer) =>
        {
            if( answer == undefined )
            {
                return Response.send(res, false, {message:messages.alreadyExists});
            }

            userData.id = answer._id;
            userData.created = answer.created;

            req.login( userData, (err) =>
            {
                if(err)
                {
                    Response.send(res, false, {message:err.message})
                }

                const answer =
                    {
                        message: messages.successfulLogin,

                        user:
                            {
                                id: userData.id,
                                firstName: userData.firstName,
                                lastName: userData.lastName,
                                email: userData.email,
                                photo: "/images/default-profile.png",
                                access: 1,
                                created: userData.created,
                                session: req.sessionID
                            }
                    };

                Response.send(res, true, answer)
            })
        })
        .catch((err) =>
        {
            if(err.message.indexOf("login_UNIQUE") > 1)
            {
                Response.send(res, false, {message:messages.loginUsed})
            }
            else
            {
                Response.send(res, false, {message:err.message})
            }
        });
});

//==========================================================================

router.post('/logout', (req, res, next) =>
{
    req.logout();

    const answer =
        {
            message: messages.successfulLogout
        };

    Response.send(res, true, answer);
});

//==========================================================================

router.get('/status', (req, res, next) =>
{
    const loggedIn = (req.user != undefined);
    const user = req.user;

    Response.send(res, true, { logged:loggedIn, user:user, session: req.sessionID });
});

export default router;