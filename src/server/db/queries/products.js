import Products from '../models/Products';

const fetchProducts = ({ page, size }) =>
  Products
    .query()
    .select()
    .page(parseInt(page), parseInt(size))
    .then(products => products);

const postProduct = product =>
  Products
    .query()
    .insert({...product, color: JSON.stringify(product.color)})
    .then(product => product instanceof Products ? product : false);

const deleteProduct = id =>
  Products
    .query()
    .delete()
    .where({ id })
    .then(affectedRows => affectedRows === 1);

export { fetchProducts, postProduct, deleteProduct };