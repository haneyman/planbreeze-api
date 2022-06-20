import { Controller, Get, Post } from '@nestjs/common';
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

  @Post()
  async createEvent(event: dbEvent): Promise<string> {
    console.log('posting');
    const results = await this.eventService.createEvent(event);
    return results;
    // return 'planbreeze-api events: ' + JSON.stringify(results);
  }
}
