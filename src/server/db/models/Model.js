import Objection from 'objection';
import uuid from 'uuid/v4';
import knex from '../connection';
import mapKeys from 'lodash/mapKeys';
import camelCase from 'lodash/camelCase';
import snakeCase from 'lodash/snakeCase';

Objection.Model.knex(knex);

export default class Model extends Objection.Model {
  $formatDatabaseJson(json) {
    return mapKeys(json, (v, k) => snakeCase(k));
  }

  $parseDatabaseJson(json) {
    return mapKeys(json, (v, k) => camelCase(k));
  }

  $beforeInsert() {
    this.created_at = new Date();
    this.updated_at = new Date();
    this.id = uuid();
  }

  $beforeUpdate() {
    this.updated_at = new Date();
  }

  $beforeValidate(jsonSchema, json, opt) {
    return jsonSchema;
  }
}
