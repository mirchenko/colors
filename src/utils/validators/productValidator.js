import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default ({ name, color }) => {
  const errors = {};

  if(!Validator.isLength(name, { min: 4, max: 8 })) {
    errors.name = {
      title: 'Name error',
      message: 'Only 4-8 characters allowed!'
    };
  }

  if(!Validator.isAlphanumeric(name)) {
    errors.name = {
      title: 'Name error',
      message: 'Only numbers and letters allowed!'
    };
  }

  if(color.length === 0) {
    errors.color = {
      title: 'Color error',
      message: 'Red, Green, Blue color allowed!'
    };
  }

  (color || []).forEach(color => {
    if(['red', 'green', 'blue'].indexOf < 0) {
      errors.color = {
        title: 'Color error',
        message: 'Red, Green, Blue color allowed!'
      };
    }
  });

  return {
    isValid: isEmpty(errors),
    errors
  };
};