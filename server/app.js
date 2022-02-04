import express from 'express';
import cors from 'cors';
import routes from './routes/routes.js';
// import path from 'path';

const app = express();
app.use(cors());
// app.use(path.join(__dirname, 'index'))

app.listen(4001, () => {
    console.log('Server Works !!! At port 4001');
});

app.use('/', routes);