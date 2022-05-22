import express from 'express';

import multerMiddleware from '../middlewares/multerMiddleware.js';
import multerController from "./../controllers/multerController.js";

const multerRouter = express.Router();

multerRouter.post('/upload',multerMiddleware,multerController);

export default multerRouter;