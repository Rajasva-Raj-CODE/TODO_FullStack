import express from 'express';
import connectDB from '../backend/utils/db.js';
import dotenv from 'dotenv';
import todoRouter from '../backend/routers/todo.router.js';
import userRouter from '../backend/routers/user.router.js';
import cors from 'cors';

dotenv.config();


const app = express();
connectDB();

app.use(express.json());

app.use('/todo',todoRouter)
app.use('/user',userRouter)


app.listen(process.env.PORT, () => {
    console.log('Server is running on port 3000');
});

