import express from "express"
// J'importe les function de meon controller 
// import { login , register , getAll , getById , updateById , deleteById } from "../controllers/user.controller.js";
import userController from "../controllers/user.controller.js";

const router = express.Router();

router.get("/all" , userController.getAll );
// router.post("/sign" , login);
// router.post("/add" , register);
// router.get("/oneUser" , getById);
// router.get("/update" , updateById);
// router.get("/dalete" , deleteById);

export default router;