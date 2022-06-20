import { Inject, Injectable } from '@nestjs/common';
// import { Event } from './interfaces/event.interface';
import { PG_CONNECTION } from '../constants';
@Injectable()
export class EventsService {
  constructor(@Inject(PG_CONNECTION) private conn: any) {}
  // private readonly events: Event[] = [];

  // create(event: Event) {
  // this.events.push(event);
  // }

  // findAll(): Event[] {
  // return this.events;
  // }

  async getEvents() {
    const res = await this.conn.query('SELECT * FROM events');
    console.log('res.rows: ', res.rows);
    return res.rows;
  }
}
