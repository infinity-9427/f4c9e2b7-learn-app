import { Controller, Get, Post, Delete, Param, HttpCode, HttpStatus } from '@nestjs/common';
import { FavoritesService } from './favorites.service';

@Controller('favorites')
export class FavoritesController {
  constructor(private readonly favoritesService: FavoritesService) {}

  @Post(':userId/courses/:courseId')
  @HttpCode(HttpStatus.CREATED)
  async addToFavorites(
    @Param('userId') userId: string,
    @Param('courseId') courseId: string,
  ): Promise<void> {
    await this.favoritesService.addToFavorites(userId, courseId);
  }

  @Delete(':userId/courses/:courseId')
  @HttpCode(HttpStatus.NO_CONTENT)
  async removeFromFavorites(
    @Param('userId') userId: string,
    @Param('courseId') courseId: string,
  ): Promise<void> {
    await this.favoritesService.removeFromFavorites(userId, courseId);
  }

  @Get(':userId/courses')
  async getFavorites(@Param('userId') userId: string): Promise<string[]> {
    return await this.favoritesService.getFavorites(userId);
  }

  @Get(':userId/courses/:courseId')
  async isFavorite(
    @Param('userId') userId: string,
    @Param('courseId') courseId: string,
  ): Promise<{ isFavorite: boolean }> {
    const isFavorite = await this.favoritesService.isFavorite(userId, courseId);
    return { isFavorite };
  }
} 