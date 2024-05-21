import express from 'express'; 
import { add ,allContact ,deleteById } from '../controllers/contact.controller.js'

const router = express.Router();

router.post("/add" , add) ;
router.get("/all" , allContact) ;
// router.delete("/delete" , deleteById) ;


export default router;