import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PostgresDataSource} from '../datasources';
import {Trips, TripsRelations} from '../models';

export class TripsRepository extends DefaultCrudRepository<
  Trips,
  typeof Trips.prototype.id,
  TripsRelations
> {
  constructor(
    @inject('datasources.postgres') dataSource: PostgresDataSource,
  ) {
    super(Trips, dataSource);
  }
}
