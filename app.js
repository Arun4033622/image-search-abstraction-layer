const express  = require('express'),
      app      = express(),
      ejs      = require('ejs'),
      dotenv   = require('dotenv'),
      mongoose = require('mongoose'),
      routes   = require('./routes/index');

dotenv.config();
 
const url = process.env.MONGOLAB_URI;
mongoose.connect(url);

app.set('view engine', 'ejs');
app.use('/', routes);

app.listen(process.env.PORT, process.env.IP, () => {
    console.log('Server started!');
});
