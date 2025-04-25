import { Injectable, Inject, InternalServerErrorException } from '@nestjs/common';
import { Redis } from 'ioredis';

@Injectable()
export class FavoritesService {
  constructor(
    @Inject('REDIS_CLIENT')
    private readonly redis: Redis,
  ) {}

  private getFavoritesKey(userId: string): string {
    return `favorites:${userId}`;
  }

  async addToFavorites(userId: string, courseId: string): Promise<void> {
    try {
      await this.redis.sadd(this.getFavoritesKey(userId), courseId);
    } catch (error) {
      console.error('Error adding to favorites:', error);
      throw new InternalServerErrorException('Failed to add course to favorites');
    }
  }

  async removeFromFavorites(userId: string, courseId: string): Promise<void> {
    try {
      await this.redis.srem(this.getFavoritesKey(userId), courseId);
    } catch (error) {
      console.error('Error removing from favorites:', error);
      throw new InternalServerErrorException('Failed to remove course from favorites');
    }
  }

  async getFavorites(userId: string): Promise<string[]> {
    try {
      return await this.redis.smembers(this.getFavoritesKey(userId));
    } catch (error) {
      console.error('Error getting favorites:', error);
      throw new InternalServerErrorException('Failed to get favorites');
    }
  }

  async isFavorite(userId: string, courseId: string): Promise<boolean> {
    try {
      const result = await this.redis.sismember(this.getFavoritesKey(userId), courseId);
      return result === 1;
    } catch (error) {
      console.error('Error checking favorite status:', error);
      throw new InternalServerErrorException('Failed to check favorite status');
    }
  }
} 