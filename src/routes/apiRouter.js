import express from 'express';
import template from '../template/index';
import { Topic, Question } from '../db/models';

const router = express.Router();

router.get('/topics', async (req, res) => {
  const topics = await Topic.findAll();
  res.json(topics);
});

router.get('/questions', async (req, res) => {
  const question = await Question.findAll();
  res.json(question);
});

export default router;
