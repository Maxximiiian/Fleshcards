import express from 'express';
import morgan from 'morgan';
import template from './template';
// import { Hero } from './db/models';
import indexRouter from './routes/indexRouter';
import apiRouter from './routes/apiRouter';
// import studentRouter from './router/studentRouter';

const PORT = 3000;
const app = express();
app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true })); // Чтение body в request
app.use(express.json());

app.use('/', indexRouter);
// app.use('/students', studentRouter);
app.use('/api', apiRouter);

app.listen(PORT, () => console.log('A server has been launched!', PORT));
