import express from 'express';
import dotenv from 'dotenv';
import routes from './routes/product.route';
import morgan from 'morgan';
import cors from 'cors';
dotenv.config();

const app = express();
app.listen(process.env.API_PORT, () => {
    console.log(`Running at: http://localhost:${process.env.API_PORT}`);
});
app.use(express.json());
app.use(routes);
app.use(cors({
    methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH'],
    origin: `http://localhost:${process.env.API_PORT}`,
    optionsSuccessStatus: 200,
    credentials: true,
}));
app.use(
  morgan((tokens, req, res) => {
    return [
      tokens.method(req, res),
      tokens.url(req, res),
      tokens.status(req, res),
      tokens.res(req, res, 'content-length'),
      '-',
      tokens['response-time'](req, res),
      'ms',
    ].join(' ');
  })
);



