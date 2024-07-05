import express from "express";
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from "cookie-parser";
// Routes
import userRoutes from './routes/user.router.js'
import productRoutes from './routes/product.router.js'
import categoryRoutes from './routes/category.router.js'
import contactRoutes from './routes/contact.router.js'
import './models/index.js'

// APP
dotenv.config();
const app = express()


// MiddleWare 
app.use(express.json())
app.use(cors())
app.use(cookieParser())

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    res.setHeader("Access-Control-Allow-Credentials", true);
    return next();
  });


// Prefixes 
app.use('/user' , userRoutes);
app.use('/product' , productRoutes);
app.use('/category' , categoryRoutes);
app.use('/contact' , contactRoutes);


export default app