import Koa from 'koa';
import bodyParser from 'koa-body';
import cors from'@koa/cors';
import productsRoutes from './routes/products';

const PORT = process.env.PORT || 3000;

export default new Koa()
  .use(cors())
  .use(bodyParser())
  .use(productsRoutes.routes())
  .listen(PORT, () => console.log(`Backend service listen on port: ${PORT}`));