//Index Controller
export function displayHomepage(req, res, next){
    res.render('index', {title: 'Home', page:'home'});
}

export function displayAboutpage(req, res, next){
    res.render('index', {title: 'About', page:'home'});
}

export function displayServicespage(req, res, next){
    res.render('index', {title: 'Services', page:'home'});
}

export function displayProjectspage(req, res, next){
    res.render('index', {title: 'Projects', page:'home'});
}

export function displayContactpage(req, res, next){
    res.render('index', {title: 'Contact', page:'home'});
}