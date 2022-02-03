import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

app.listen(4000, () => {
    console.log('Server Works !!! At port 4000');
});

app.use('/', routes);