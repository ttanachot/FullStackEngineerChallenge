import express from 'express';
import service from '../service';
import asyncWrapper from '../middleware/async-wrapper';

const router = express.Router();

router.post(
  '/login',
  asyncWrapper(async (req, res, next) => {
    res.send(await service.user.login(req.body));
  })
);

export default router;
