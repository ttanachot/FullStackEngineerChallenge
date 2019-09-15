import express from 'express';
import service from '../service';
import asyncWrapper from '../middleware/async-wrapper';

const router = express.Router();

router.get(
  '/:id',
  asyncWrapper(async (req, res, next) => {
    res.send(await service.topic.findById(req.params.id));
  })
);

export default router;
