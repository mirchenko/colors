import { fetchProducts } from "../../db/queries/products";

const List = async ctx => {
  try {
    const page = ctx.request.query.page || 0;
    const size = ctx.request.query.size || 25;
    const products = await fetchProducts({ page, size });
    if(!products) {
      ctx.status = 409;
      ctx.body = {
        error: 'Conflict fetch products!'
      }
    }

    const { results, total } = products;

    ctx.status = 200;
    ctx.body = {
      data: results,
      page: {
        size,
        number: parseInt(page) + 1,
        totalElements: total,
        totalPages: Math.ceil(total / size)
      }
    };

  } catch (e) {
    console.log(e);
    ctx.status = 500;
    ctx.body = {
      error: 'Internal server error!'
    };
  }
};

export { List };