import Express from 'express';
import dotenv from  'dotenv';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import studentRouter from './routes/students.js';

dotenv.config();

const app = Express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(Express.json());

// Router
app.use('/students', studentRouter);

app.get('/', (req, res) => {

    let data = {id: 1, name: 'Yudi Alfayat'};

    res.json(data);
});


mongoose.connect(process.env.DB_CONNECT, () => {
    console.log('DB is Connected!');
});
app.listen(
    PORT, 
    {useNewUrlParse: true}, 
    () => console.log('Listening on port ' + PORT)
);


