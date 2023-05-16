import express  from "express";
import morgan from 'morgan'
import cors from 'cors'
import cookieParser from 'cookie-parser';
import helmet from "helmet";
import dotenv from 'dotenv'
import { userRouter } from "./userRoutes/userRoutes.js";
import { adminRouter } from "./adminRoutes/adminRoutes.js";
import connectDB from "./database/connection.js";

    const app = express()
    connectDB();
    app.use(express.json());
    app.use(cookieParser())
    dotenv.config()
    app.use(
        cors({
        origin:['http://localhost:5173'],
        methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH'],
        credentials:true,
    }))
    
    app.use('/',userRouter)
    app.use('/admin',adminRouter)
    app.use(morgan('dev'));

    app.use(express.urlencoded({ extended: true }));
    app.use(cookieParser());
    app.use(helmet({xssFilter:true}))
    app.listen(process.env.PORT,()=>console.log(`server is running on port ${process.env.PORT}`))