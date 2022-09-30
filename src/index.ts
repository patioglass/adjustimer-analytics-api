import express from 'express';
import router from './infrastructure/route';
import errorHandler, { BadRequestException } from './exception/HttpErrorException'

const app = express();

// json object recieve
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

// route
app.use('/v1', router);

app.use(errorHandler);

// port 3000
const port = process.env.PORT || 3000;

// api start
app.listen(port);
