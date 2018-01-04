import React from 'react';
import range from 'lodash/range';
import Item from './item';

export default ({ page, changePage }) => {
  const { totalPages } = page;
  return (
    <div className="pagination-wrapper">
      {range(0, totalPages).map(i => <Item key={i} val={i} handler={changePage}/>)}
    </div>
  );
};