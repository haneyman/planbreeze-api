import { Controller, Get } from '@nestjs/common';
import { EventsService } from '../services/events.service';

@Controller('events')
export class EventsController {
  constructor(private readonly eventService: EventsService) {}

  @Get()
  getEvents(): string {
    const results = this.eventService.findAll();
    return 'a bunch of events: ' + JSON.stringify(results);
  }
}
