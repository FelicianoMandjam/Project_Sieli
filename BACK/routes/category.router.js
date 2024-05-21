import express from 'express'; 
import {add , allCategory , deleteById} from '../controllers/category.controller.js'

const router = express.Router();

router.post("/add" , add)
router.get("/all" , allCategory )
// router.delete("/delete" , deleteById)

export default router;