import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: ['crack-pika-6517-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username:
            'Y3JhY2stcGlrYS02NTE3JMFtIXsU3Roi_32CThUjrKenl7apPCJ8BjkafBkY7x0',
          password:
            'UaJrCwybsNO5t66Q4xnXeGACQdFnPOK8H1_6fFl7LnfBkacx69_Sk3b3XlQZD0m9mSz8Mg==',
        },
        ssl: true,
      },
    });
  }

  async onModuleDestroy() {
    await this.close();
  }
}
