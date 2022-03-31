const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res)=>{
  res.send('Hola mi server en express te responde :)');
});


app.get('/new-route', (req, res)=>{
  res.send('Hola soy un nuevo endpoint');
});

app.get('/home', (req, res)=>{
  res.send('Hola este es el home');
});

app.get('/products', (req, res)=>{
  res.json({
    name: "Producto 1",
    price: 1000
  })
});

app.listen(port, ()=>{
  console.log('Server corriendo en el puerto'+ port);
});
