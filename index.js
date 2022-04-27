const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');

const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler')

const app = express();
const port = 3000;

app.use(express.json());

const whitelist = ['http://localhost:8080', 'https://myapp.com'];
const options = {
  origin: (origin, callback) => {
    whitelist.includes(origin) ? callback(null, true) : callback(new Error('no permitido'));
  }
}
app.use(cors(options));

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler)
app.use(errorHandler);

app.listen(port, ()=>{
  console.log('Server corriendo en el puerto'+ port);
});
