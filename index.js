const express = require('express');
const app = express();
var cors = require('cors');
const port = process.env.PORT || 8000;

const chefs = require('./data/chefs.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send('hello chefs')
  });

  app.get('/chefs' , (req , res) => {
    res.send(chefs);
  })

  app.get('/chefs/:id' , (req, res) => {
    const id = parseInt(req.params.id);
    const selectChefs = chefs.find(n => parseInt(n.id) === id );
    res.send(selectChefs);
  })

app.listen(port , () => {
    console.log(`chefs api is running on port: ${port}`)
});