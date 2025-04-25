import { Module, OnModuleDestroy, Inject } from '@nestjs/common';
import { FavoritesController } from './favorites.controller';
import { FavoritesService } from './favorites.service';
import { ConfigModule } from '@nestjs/config';
import { Redis } from 'ioredis';

@Module({
  imports: [
    ConfigModule.forRoot(),
  ],
  controllers: [FavoritesController],
  providers: [
    FavoritesService,
    {
      provide: 'REDIS_CLIENT',
      useFactory: () => {
        const redis = new Redis({
          host: process.env.REDIS_HOST || 'localhost',
          port: parseInt(process.env.REDIS_PORT || '6379'),
          retryStrategy: (times) => {
            const delay = Math.min(times * 50, 2000);
            return delay;
          },
          maxRetriesPerRequest: 3,
        });

        redis.on('error', (err) => {
          console.error('Redis connection error:', err);
        });

        redis.on('connect', () => {
          console.log('Successfully connected to Redis');
        });

        return redis;
      },
    },
  ],
})
export class FavoritesModule implements OnModuleDestroy {
  constructor(@Inject('REDIS_CLIENT') private readonly redis: Redis) {}

  async onModuleDestroy() {
    await this.redis.quit();
  }
} 