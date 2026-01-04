import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrchestrationModule } from './orchestration/orchestration.module';

@Module({
  imports: [OrchestrationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
