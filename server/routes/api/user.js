import express from 'express';
const router = express.Router();

//import Validator from '../../utils/validator';
import Response from '../../utils/response';

import user from "../../mvc/controllers/user";

router.get('/', (req, res, next) =>
{
    user.getAllUsers()
        .then( (users) =>
        {
            Response.send( res, true, { users: users } );
        })
        .catch( (error) =>
        {
            Response.send( res, false, { message: error });
        })
});

export default router;