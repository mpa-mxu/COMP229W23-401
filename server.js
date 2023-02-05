const connect = require('connect');
const app = connect();

function logger(req, res, next){
    console.log(req.method, res.url);
    next();
}

function goodbyeWorld(req, res, next){
    res.setHeader('Content-Type', 'text/html');
    res.end('Goodbye World');
}

function helloWorld(req, res, next){
    res.setHeader('Content-Type', 'text/html');
    res.end('Hello World');
}

app.use(logger);
app.use('/hello', helloWorld);
app.use('/goodbye', goodbyeWorld);

app.listen(3000);

console.log('Server running at http://localhost:3000');