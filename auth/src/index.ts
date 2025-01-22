import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';

import { currentUserRouter } from './routers/current-user';
import { signinRouter } from './routers/signin';
import { signoutRouter } from './routers/signout';
import { signupRouter } from './routers/signup';
import { errorHandler } from './middlewares/error-handler';
import { NotFoundError } from './errors/not-found-error';


const app = express();
app.use(json());

app.use(currentUserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);

app.all('*', async (res, req, next) => {
  next(new NotFoundError());
});

app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  errorHandler(err, req, res, next);
});

app.listen(3000, () => {
  console.log('Listening on port 3000!!!')
});
