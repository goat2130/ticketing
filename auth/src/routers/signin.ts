import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import { validateRequest } from '../middlewares/validate-request';

const router = express.Router();

router.post(
  '/api/users/signin',
  [
    body('email')
      .isEmail()
      .withMessage('Email must be valid'),
    body('password')
      .notEmpty()
      .trim()
      .withMessage('You must supply a password')
  ],
  validateRequest,
  async (req: Request, res: Response) => {

  }
);

export { router as signinRouter };
