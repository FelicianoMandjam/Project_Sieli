import { Product } from "../models/index.js";
// import { env } from "../config.js";

const add = async (req , res ,next) => {
    try {
        const product = await Product.create(req.body) 
        res.status(201).json("New product as been added ! ");
    } catch (error) {
        console.log(error);
        next(error);
    }
};

const allProduct = async (req , res) =>{
    try{
        const products = await Product.findAll()
        res.status(200).json(products)
    }catch(e){
        console.log(e)
        res.status(400).json("No product found!")
    }
};


// Modifier pour que le seul l'Admin puisse exécuter ces actions 
const deleteById = async (res , req , next) => {
    try{
        const delectedProduct = await Product.destroy({ where: { id: req.params.id } })

        if(!delectedProduct) return res.status(400).json('Product not found!')
    }catch(e){
    console.log(e);
    }
};

export {add ,allProduct, deleteById}