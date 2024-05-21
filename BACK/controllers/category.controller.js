import { Category } from "../models/index.js";

const add = async (req, res, next) => {
  try {
    const category = await Category.create(req.body);
    res.status(201).json("New category as been added ! ");
  } catch (e) {
    console.log(e);
    next(e)
  }
};

const allCategory = async (req , res)=>{
    try {
        const category = await Category.findAll()
        res.status(200).json(category)
        console.table(category)
    } catch (e) {
        console.log(e)
        res.status(400).json("No category found ! ")
    }
}

// Modifier pour que le seul l'Admin puisse exécuter ces actions 
const deleteById = async (res , req ) => {
    try {
        const delectedCategory = await Category.destroy({where: {id: req.params.id}})

        if(!delectedCategory) return res.status(400).json('Category not found !')
    } catch (e) {
        console.log(e)
    }
}

export {add , allCategory , deleteById}
