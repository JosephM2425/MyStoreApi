const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
  res.send('Hola mi server en express te responde :)');
});

router.get('/new-route', (req, res)=>{
  res.send('Hola soy un nuevo endpoint');
});

router.get('/home', (req, res)=>{
  res.send('Hola este es el home');
});

module.exports = router;
