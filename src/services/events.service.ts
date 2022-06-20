import { Inject, Injectable } from '@nestjs/common';
// import { Event } from './interfaces/event.interface';
import { PG_CONNECTION } from '../constants';
@Injectable()
export class EventsService {
  constructor(@Inject(PG_CONNECTION) private conn: any) {}
  // private readonly events: Event[] = [];

  async getEvents() {
    const res = await this.conn.query('SELECT * FROM events');
    console.log('res.rows: ', res.rows);
    return res.rows;
  }

  async create(event: Event) {
    // const res = await this.conn.query('INSERT INTO events');
    // console.log('res.rows: ', res.rows);
    // return res.rows;
    const text = 'INSERT INTO events() VALUES($1, $2) RETURNING *';
    const values = ['brianc', 'brian.m.carlson@gmail.com'];

    // async/await
    try {
      const res = await client.query(text, values);
      console.log(res.rows[0]);
      // { name: 'brianc', email: 'brian.m.carlson@gmail.com' }
    } catch (err) {
      console.log(err.stack);
    }
  }
}
