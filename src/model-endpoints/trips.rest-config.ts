import {ModelCrudRestApiConfig} from '@loopback/rest-crud';
import {Trips} from '../models';

const config: ModelCrudRestApiConfig = {
  model: Trips,
  pattern: 'CrudRest',
  dataSource: 'postgres',
  basePath: '/trips',
};
module.exports = config;
