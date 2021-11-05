import Express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';

// Import Router
import studentRouter from './routes/students_router.js';
import userRouter from './routes/users_router.js';
import postsRouter from './routes/posts_router.js';

dotenv.config();
const PORT = process.env.PORT || 3000;

const app = Express();

// Middleware
app.use(Express.json());
app.use(cors());

// Router
app.use('/api/students', studentRouter);
app.use('/api/posts', postsRouter);
app.use('/api/users', userRouter);

app.get('/', (req, res) => {
	res.send('<h1>Hello, World</h1>');
});

// DB Connection
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () => console.log('DB is Connected!'));
app.listen(PORT, () => console.log('Listening on port ' + PORT));
