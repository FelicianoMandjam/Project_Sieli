import express from 'express'; 
import {sendMail } from '../controllers/contact.controller.js'

const router = express.Router();

router.post("/post", sendMail)

// router.post("/add" , add) ;
// router.get("/all" , allContact) ;
// router.delete("/delete" , deleteById) ;


export default router;