import express from 'express'; 
import { add , allProduct , deleteById } from "../controllers/product.controller.js"

const router = express.Router();

router.post("/add" , add)
router.get("/all" , allProduct)
// router.post("/delete/" , deleteById)

export default router