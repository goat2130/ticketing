import express, { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';

const router = express.Router();

// [] is an array of middleware
router.post('/api/users/signup', [
  body('email')
    .isEmail()
    .withMessage('Email must be valid'),
  body('password')
    .trim()
    .isLength({ min: 4, max: 20})
    .withMessage('Password must be between 4 and 20 character')
  ],
  // Added a data type to rea and res, because occurred an error
  (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(400).send(errors.array());
    }

    const { email, password } = req.body;

    console.log('Creating a user...')

    res.send({});
  }
);

export { router as signupRouter };
