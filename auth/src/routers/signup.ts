import express, { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';

import { User } from '../models/user';
import { RequestValidationError } from '../errors/request-validation-error';
import { BadRequestError } from '../errors/bad-request-error';
import jwt, { JsonWebTokenError } from 'jsonwebtoken';
import { validateRequest } from '../middlewares/validate-request';

const router = express.Router();

// [] is an array of middleware
router.post(
  '/api/users/signup',
  [
    body('email')
      .isEmail()
      .withMessage('Email must be valid'),
    body('password')
      .trim()
      .isLength({ min: 4, max: 20})
      .withMessage('Password must be between 4 and 20 character')
  ],
  validateRequest,
  // Added a data type to rea and res, because occurred an error!
  async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const user = User.build({ email, password });
    await user.save();

    // Generate JWT
    const userJwt = jwt.sign(
      {
        id: user.id,
        email: user.email
      },
      process.env.JWT_KEY!
    );

    // Store it on session object
    req.session = {
      jwt: userJwt
    };

    res.status(201).send(user);
  }
);

export { router as signupRouter };
