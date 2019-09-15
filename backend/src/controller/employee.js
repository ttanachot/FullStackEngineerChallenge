import express from 'express';
import service from '../service';
import asyncWrapper from '../middleware/async-wrapper';

const router = express.Router();

router.get(
  '/profile',
  asyncWrapper(async (req, res, next) => {
    const { email } = req.identity.employee;
    res.send(await service.employee.getProfile(email));
  })
);

export default router;
