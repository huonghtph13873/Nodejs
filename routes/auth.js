import express from 'express';
import {Singin , Singup} from '../controllers/auth';
const router = express.Router();
router.post("/singin" ,Singin)
router.post("/singup" , Singup)
export default router