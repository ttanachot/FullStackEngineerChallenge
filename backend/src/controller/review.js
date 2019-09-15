import express from 'express';
import service from '../service';
import model from '../model';
import asyncWrapper from '../middleware/async-wrapper';

const router = express.Router();

router.post(
  '',
  asyncWrapper(async (req, res, next) => {
    model.sequelize.transaction(async (transaction) => {
      const { id } = req.identity.employee;
      const payload = { reviewerId: id, ...req.body };
      res.send(await service.review.create(payload, { transaction }));
    });
  })
);

router.get(
  '/:id',
  asyncWrapper(async (req, res, next) => {
    const { id } = req.params;
    const { id: reviewerId } = req.identity.employee;
    res.send(await service.review.findById({ id, reviewerId }));
  })
);


export default router;
