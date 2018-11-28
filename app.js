const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const rootDir = require('./util/path');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

app.set('view engine', 'pug');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes.router);
app.use(shopRoutes.router);
app.use((req, res, next) => {
    res.status(404).render('404',{ pageTitle: 'Not found' })
});

app.listen(3000);