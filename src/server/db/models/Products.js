import Model from './Model';

export default class Products extends Model {
  static tableName = 'products';
  
  static jsonSchema = {
    type: 'object',
    properties: {
      id: { type: 'uuid' },
      name: { type: 'string' },
      color: { type: 'json' }
    }
  };
}