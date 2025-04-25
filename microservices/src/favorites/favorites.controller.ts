import { Controller, Get, Post, Delete, Param, HttpCode, HttpStatus, UseGuards } from '@nestjs/common';
import { FavoritesService } from './favorites.service';
import { AuthGuard } from '../auth/auth.guard';
import { User } from '../auth/user.decorator';

@Controller('favorites')
@UseGuards(AuthGuard)
export class FavoritesController {
  constructor(private readonly favoritesService: FavoritesService) {}

  @Post('courses/:courseId')
  @HttpCode(HttpStatus.CREATED)
  async addToFavorites(
    @User() user: { id: string },
    @Param('courseId') courseId: string,
  ): Promise<void> {
    await this.favoritesService.addToFavorites(user.id, courseId);
  }

  @Delete('courses/:courseId')
  @HttpCode(HttpStatus.NO_CONTENT)
  async removeFromFavorites(
    @User() user: { id: string },
    @Param('courseId') courseId: string,
  ): Promise<void> {
    await this.favoritesService.removeFromFavorites(user.id, courseId);
  }

  @Get('courses')
  async getFavorites(@User() user: { id: string }): Promise<string[]> {
    return await this.favoritesService.getFavorites(user.id);
  }

  @Get('courses/:courseId')
  async isFavorite(
    @User() user: { id: string },
    @Param('courseId') courseId: string,
  ): Promise<{ isFavorite: boolean }> {
    const isFavorite = await this.favoritesService.isFavorite(user.id, courseId);
    return { isFavorite };
  }
} 