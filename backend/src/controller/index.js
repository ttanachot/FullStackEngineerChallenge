import express from 'express';
import { version } from '../../package.json';
import authMiddleware from '../middleware/authorization';
import employee from './employee';
import user from './user';
import topic from './topic';
import review from './review';

const api = express.Router();
// ==============================
// Public endpoints
// ==============================
api.get('/', (req, res) => res.json({ version }));
api.use('/user', user);

// ==============================
// Private endpoints
// ==============================
api.use(authMiddleware);
api.use('/employee', employee);
api.use('/topic', topic);
api.use('/review', review);

export default api;
