import { Router } from "express";
import {displayHomepage, displayAboutpage, displayContactpage, displayProjectspage,displayServicespage} from '../controllers/index.js';

const router = Router();

router.get('/', displayHomepage);
router.get('/home', displayHomepage);
router.get('/about', displayAboutpage);
router.get('/services', displayServicespage);
router.get('/projects', displayProjectspage);
router.get('/contact', displayContactpage);

export default router;