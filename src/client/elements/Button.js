import React from 'react';
import { Loader } from './';

export const Button = ({ handler, type, className, isFetching, title }) =>
  <button className={`${type} ${className ? className : ''}`} onClick={handler}>
    {
      isFetching
        ? <Loader height={18} width={18}/>
        : <span>{title}</span>
    }
  </button>;