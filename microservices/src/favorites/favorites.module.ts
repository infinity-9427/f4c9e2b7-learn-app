import { Module } from '@nestjs/common';
import { FavoritesController } from './favorites.controller';
import { FavoritesService } from './favorites.service';
import { RedisModule } from '@nestjs/redis';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    RedisModule.forRoot({
      config: {
        host: process.env.REDIS_HOST || 'localhost',
        port: parseInt(process.env.REDIS_PORT || '6379'),
      },
    }),
  ],
  controllers: [FavoritesController],
  providers: [FavoritesService],
})
export class FavoritesModule {} 