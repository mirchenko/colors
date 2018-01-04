import React from 'react';

export default ({ val, handler }) => <div className="pagination-item" onClick={() => handler(val)}>
  {val + 1}
</div>;