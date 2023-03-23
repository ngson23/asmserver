const express = require('express')
const app = express()
const port = 3000
const path = require('path'); 
const expressHbs = require('express-handlebars');

app.engine('.hbs', expressHbs.engine({

  extname: "hbs",

  defaultLayout: 'main',

  //layoutsDir: "views/layouts/",

}));

app.set('view engine', '.hbs');
app.set('views', './views');
app.set('views', path.join(__dirname, 'views'));
app.get('/', (req, res) => {
  res.render('main', { layouts:'main' });
});
  
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/login.html");
});
app.get('/login', (req, res) => {
  res.render('login', {
      layout: 'login'
  })
});

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/signup.html");
});
app.get('/signup', (req, res) => {
  res.render('signup', {
      layout: 'signup'
  })
});

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/admin.html");
});
app.get('/admin', (req, res) => {
  res.render('admin', {
      layout: 'admin'
  })
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});

// npm install express-handlebars
// npm install express
// npm install http 
// npm install -g nodemon
//npm install --save multer

