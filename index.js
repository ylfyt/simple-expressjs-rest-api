import Express from 'express';
import dotenv from  'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import studentRouter from './routes/students_router.js';

dotenv.config();
const PORT = process.env.PORT || 3000;

const app = Express();

// Middleware
app.use(Express.json());
app.use(cors());

// Router
app.use('/students', studentRouter);

app.get('/', (req, res) => {

    let data = {id: 1, name: 'Yudi Alfayat'};

    res.json(data);
});

// DB Connection
mongoose.connect(
    process.env.DB_CONNECT, 
    {useNewUrlParser: true},
    () => console.log('DB is Connected!')
);
app.listen(PORT, () => console.log('Listening on port ' + PORT));


