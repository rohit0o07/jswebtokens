import express from 'express'
import { signIn, signup,google,signout } from '../controllers/auth.controller.js';


const router = express.Router();

router.post("/signup",signup);
router.post("/signIn",signIn);
router.post("/google",google);
router.get('/signout',signout);

export default router