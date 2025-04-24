import { Injectable } from '@nestjs/common';
import { RedisService } from '@nestjs/redis';

@Injectable()
export class FavoritesService {
  constructor(private readonly redisService: RedisService) {}

  private getFavoritesKey(userId: string): string {
    return `favorites:${userId}`;
  }

  async addToFavorites(userId: string, courseId: string): Promise<void> {
    const client = this.redisService.getClient();
    await client.sAdd(this.getFavoritesKey(userId), courseId);
  }

  async removeFromFavorites(userId: string, courseId: string): Promise<void> {
    const client = this.redisService.getClient();
    await client.sRem(this.getFavoritesKey(userId), courseId);
  }

  async getFavorites(userId: string): Promise<string[]> {
    const client = this.redisService.getClient();
    return await client.sMembers(this.getFavoritesKey(userId));
  }

  async isFavorite(userId: string, courseId: string): Promise<boolean> {
    const client = this.redisService.getClient();
    return await client.sIsMember(this.getFavoritesKey(userId), courseId);
  }
} 