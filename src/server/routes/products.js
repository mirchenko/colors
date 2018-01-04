import Router from 'koa-router';
import { List, Create, Delete } from '../controllers/products';

export default new Router()
  .get('/products', List)
  .post('/products', Create)
  .delete('/products/:id', Delete);