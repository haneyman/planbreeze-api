import { Inject, Injectable } from '@nestjs/common';
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

  async createEvent(event: dbEvent) {
    // const res = await this.conn.query('INSERT INTO events');
    // console.log('res.rows: ', res.rows);
    const text =
      'INSERT INTO events(blob, category, date_added, description, event_date, priority) VALUES($1, $2, $3, $4, $5, $6) RETURNING *';
    const values = [
      event.blob,
      event.category,
      event.date_added,
      event.description,
      event.event_date,
      event.priority,
    ];

    // async/await
    try {
      const res = await this.conn.query(text, values);
      console.log('res', res);
      console.log(res.rows[0]);
      return res.rows;
    } catch (err) {
      console.log(err.stack);
    }
  }
}
