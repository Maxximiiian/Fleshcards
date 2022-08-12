import express from 'express';
import template from '../template/index';
// import { Todo } from '../db/models';

const router = express.Router();

router.get('/', async (req, res) => {
  res.send(template({ path: req.originalUrl }));
});

export default router;
