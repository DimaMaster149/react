import express from 'express';
const router = express.Router();

// import user from './api/user';
 import auth from './api/auth';
// import photo from './api/photo';
// import message from './api/message';

// router.use('/user', user );
 router.use('/auth', auth );
// router.use('/photo', photo);
// router.use('/message', message);

export default router;