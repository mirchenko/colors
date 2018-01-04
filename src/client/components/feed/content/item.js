import React from 'react';
import { Button } from '../../../elements';

export default ({ id, name, color, isFetching, deleteProduct }) => <div className="product-item">
  <span>{name}</span>
  <div className="colors-wrapper">{color.map(color => <span key={`${id}${color}`}  style={{ color }}>{color}</span>)}</div>
  <Button type="danger" title="Delete" isFetching={isFetching} handler={() => deleteProduct(id)}/>
</div>;