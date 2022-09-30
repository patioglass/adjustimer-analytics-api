import express from 'express';
import controller from '../../interface/controller';
import { CreateVideoHistoryRequestBody } from '../../interface/model/request/CreateVideoHistoryRequest';
import { TypeOrmConnection } from '../db/TypeOrmConnection'

const router = express.Router();
const typeOrmConnection = new TypeOrmConnection()
typeOrmConnection.connect()

const videoHistoryController = new controller.VideoHistoryController(typeOrmConnection);

// todo: いずれ、何かで表示したくなった時に実装
router.get('/', (req: express.Request, res: express.Response) => {

});

// post request
router.post('/', (
    req: CreateVideoHistoryRequestBody,
    res: express.Response,
    next: express.NextFunction
) => {
    (async () => {
        const result = await videoHistoryController.createVideoHistory(req)
        res.send(result);
    })().catch(next)
});

export default router;
