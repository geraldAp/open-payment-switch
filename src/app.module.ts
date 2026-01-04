import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrchestrationModule } from './orchestration/orchestration.module';
import { WebhooksModule } from './modules/webhooks/webhooks.module';
import { PaymentsModule } from './modules/payments/payments.module';

@Module({
  imports: [OrchestrationModule, WebhooksModule, PaymentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
