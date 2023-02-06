import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import session from 'express-session';

// ES2022 Modules fix for _dirname
import path, {dirname} from 'path';
import { fileURLToPath } from 'url';
const _dirname = dirname(fileURLToPath(import.meta.url));

//Configuration Module
import { Secret } from '../config/index.js';

// Import Routes
import router from './routes/index.js';

const app = express();

//EJS setup
app.set('views', path.join(_dirname,'/views'));
app.set('view engine', 'ejs');

//General Middlewares
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(express.static(path.join(_dirname,'../public')));
app.use(session({
    secret: Secret,
    saveUninitialized: false,
    resave: false
}));

//Use Routes
app.use('/',router);

export default app;