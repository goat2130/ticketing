import express from 'express';

import { currentUser } from '../middlewares/current-user';

const router = express.Router();

router.get('/api/users/currentuser', currentUser, (req, res) => {
  res.send({ currentUser: req.currentUser || null });
});

export { router as currentUserRouter };
// Path: auth/src/middlewares/current-user.ts
// import { Request, Response, NextFunction } from 'express';
// import jwt from 'jsonwebtoken';
