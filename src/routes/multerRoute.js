import express from 'express';
import multer from 'multer';

import postFile from "./../controllers/multerController.js";

const upload = multer({ dest: 'uploads/' })
const multerRouter = express.Router();

multerRouter.post('/upload',upload.single('photo'),postFile);

export default multerRouter;