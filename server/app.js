import express from 'express';
import cors from 'cors';
import routes from './routes/routes.js';
import path from 'path';

export const __dirname = path.resolve();
const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, '/index')))
const PORT = process.env.PORT || 4001;

app.listen(PORT, () => {
    console.log(`Server working on port ${PORT}`);
});

app.use('/', routes);