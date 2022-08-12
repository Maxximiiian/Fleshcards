import express from 'express';
import template from '../template/index';
// import { Todo } from '../db/models';

const router = express.Router();

router.get('/', async (req, res) => {
  res.send(template({ path: req.originalUrl }));
});

router.get('/choise', async (req, res) => {
  res.send(template({ path: req.originalUrl }));
});

router.get('/choise/1', async (req, res) => {
  res.send(template({ path: req.originalUrl }));
});

export default router;
