const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const loggedIn = require('./utils/helper');

const routes = require('./controllers/');

const sequelize = require('./config/connection');

const app = express();
//const PORT = process.env.PORT || 3001;

const sess = {
    secret: 'the secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    }),
};

app.use(session(sess));

const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
    res.render('homepage');
})

app.get('/home', loggedIn, (req, res) => {
    res.render('homepage', {layout: 'home'});
})

// app.get('/login', (req, res) => {
//     res.render('homepage')
// });





app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(process.env.PORT || 3001, () => console.log('Now listening!'));
})