import { Router } from 'express';
import { SignUp, signIN } from '../controllers/user.controller.js';
import { upload } from "../middlewares/multer.middleware.js";

const router = Router();

router.post('/signup', upload.fields([
  {
      name: "avatar",
      maxCount: 1
  }, 
  {
      name: "coverImage",
      maxCount: 1
  }
]), SignUp);

router.post('/signin', signIN);

export default router;
