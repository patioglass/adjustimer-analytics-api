import express from 'express';
import router from './infrastructure/route';
import errorHandler from './exception/HttpErrorException'
import log4js from 'log4js'
import { log4jsConfig } from './config/log4jsConfig'

const app = express();

app.use(express.json())

log4js.configure(log4jsConfig);
const systemLogger = log4js.getLogger('system'); 
const httpLogger = log4js.getLogger('http'); 
const accessLogger = log4js.getLogger('access');
app.use(log4js.connectLogger(accessLogger, {}));
app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
    if (typeof req === 'undefined' || req === null ||
        typeof req.method === 'undefined' || req.method === null ||
        typeof req.header === 'undefined' || req.header === null) {
        next();
        return;
    }
    if (req.method === 'GET' || req.method === 'DELETE') {
        httpLogger.info(req.query);
    } else {
        httpLogger.info(req.body);
    }
    next();
});
systemLogger.info("App start");

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
