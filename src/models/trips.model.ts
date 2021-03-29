import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Trips extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    default: 'teste',
  })
  details?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Trips>) {
    super(data);
  }
}

export interface TripsRelations {
  // describe navigational properties here
}

export type TripsWithRelations = Trips & TripsRelations;
