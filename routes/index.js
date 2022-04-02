const homeRouter = require('./homeRoutes');
const productsRouter = require('./productsRoutes');
const usersRouter = require('./usersRoutes');
const categoriesRouter = require('./categoriesRoutes');
const express = require('express');


function routerApi(app){
  const router = express.Router();
  app.use('/api/v1', router)
  router.use('/', homeRouter);
  router.use('/products', productsRouter);
  router.use('/users', usersRouter);
  router.use('/categories', categoriesRouter);
}


module.exports = routerApi;
