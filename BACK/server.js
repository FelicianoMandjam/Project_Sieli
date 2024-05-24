import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';   // DOTENV que me permet de récupérer tous qu'est dans mon fichier .env
import { env } from './config.js'
import cookieParser from 'cookie-parser'
// Routes
import userRoutes from './routes/user.router.js'
import productRoutes from './routes/product.router.js'
import categoryRoutes from './routes/category.router.js'
import contactRoutes from './routes/contact.router.js'
import './models/index.js'

dotenv.config();
const app = express()

// PORT , si dans le .env yapas de déclaration de PORT le port 8080 sera le choix par défaut
const PORT = env.port || 8080;


// MiddleWare 
app.use(express.json())
app.use(cors())
app.use(cookieParser())

app.use('/user' , userRoutes);
app.use('/product' , productRoutes);
app.use('/category' , categoryRoutes);
app.use('/contact' , contactRoutes);


app.listen(3001 , () => {
    console.log(`API ouverte au port 3001 lien est http;//localhost:${PORT}`);
});

