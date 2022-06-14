import { Injectable } from '@nestjs/common';
// import { Event } from './interfaces/event.interface';

@Injectable()
export class EventsService {
  private readonly events: Event[] = [];

  create(event: Event) {
    this.events.push(event);
  }

  findAll(): Event[] {
    return this.events;
  }
}
