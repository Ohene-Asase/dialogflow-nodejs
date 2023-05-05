const express = require('express');
const  bodyParser =  require('body-parser');
const cors =  require('cors');
const port = process.env.PORT || 3000;
var app = express();
const corsOption = {
  origin: 'http://localhost:3000'
}
app.use(bodyParser.urlencoded({extended: false}))
app.options('*', cors(corsOption))
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');
  next();
});
// res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
// res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

app.get('/', (req,res) => {
  res.send('Hi, from the server')
})
app.use(cors(corsOption));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
require('./routes/df-routes')(app)
app.listen(3000, ()=> {
  console.log('Server has started')
})



