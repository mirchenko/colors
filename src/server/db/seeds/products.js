const range = require('lodash/range');
const random = require('lodash/random');
const faker = require('faker');
const uuid = require('uuid/v4');

const colorsMock = [['red', 'green'], ['green', 'blue'], ['red']];

exports.seed = (knex, Promise) => knex('products').del()
  .then(() => knex('products').insert(range(200).map(product =>  ({
    id: uuid(),
    name: faker.commerce.productName(),
    color: JSON.stringify(colorsMock[random(0, 2)])
  }))));
