import { postProduct } from '../../db/queries/products';
import productValidate from '../../../utils/validators/productValidator';

const Create = async ctx => {
  try {
    const { isValid, errors } = productValidate(ctx.request.body);

    if(!isValid) {
      ctx.status = 400;
      ctx.body = {
        errors
      };
    }

    const product = await postProduct(ctx.request.body);
    if(!product) {
      ctx.status = 409;
      ctx.body = {
        error: 'Conflict post product!'
      };
    }

    ctx.status = 200;
    ctx.body = {
      product
    };

  } catch(e) {
    console.log(e);
    ctx.status = 500;
    ctx.bopdy = {
      error: 'Internal server error!'
    };
  }
};

export { Create };