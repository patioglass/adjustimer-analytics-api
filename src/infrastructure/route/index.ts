import express from 'express';
import videoHistoryRouter from './videoHistory';

const router = express.Router();

// v1 route
router.use('/videoHistory', videoHistoryRouter);

export default router;
