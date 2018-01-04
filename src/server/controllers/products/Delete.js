import { deleteProduct } from '../../db/queries/products';

const Delete = async ctx => {
  try {
    const id = ctx.params.id;

    if(!await deleteProduct(id)) {
      ctx.status = 409;
      ctx.body = {
        error: 'Conflict delete product!'
      };
    }

    ctx.status = 200;
    ctx.body = {
      message: 'success'
    };

  }
  catch(e) {
    console.log(e);
    ctx.status = 500;
    ctx.body = {
      error: 'Internal server error!'
    };
  }
};

export { Delete };