import express from 'express';
import { getHomePage, getHealth, getCivics } from '../controllers/controls.js';

const router = express.Router();

router.get('/', getHomePage);
router.get('/health', getHealth); 
router.get('/civics', getCivics); 

export default router;