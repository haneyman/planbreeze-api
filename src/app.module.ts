import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventsService } from './services/events.service';
import { EventsController } from './events/events.controller';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { configService } from './services/config.service';
import { DbModule } from './db/db.module';
@Module({
  imports: [DbModule],
  // imports: [TypeOrmModule.forRoot(configService.getTypeOrmConfig())],
  controllers: [AppController, EventsController],
  providers: [AppService, EventsService],
})
export class AppModule {}
