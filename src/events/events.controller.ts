import { Controller, Get } from '@nestjs/common';
import { EventsService } from '../services/events.service';

@Controller('events')
export class EventsController {
  constructor(private readonly eventService: EventsService) {}

  @Get()
  async getEvents(): Promise<string> {
    const results = await this.eventService.getEvents();
    return results;
    // return 'planbreeze-api events: ' + JSON.stringify(results);
  }
}
