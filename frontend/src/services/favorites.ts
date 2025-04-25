import { API_URL } from '@/lib/constants';

export class FavoritesService {
  private static readonly BASE_URL = `${API_URL}/favorites`;

  static async addToFavorites(courseId: string, userId: string): Promise<void> {
    const response = await fetch(`${this.BASE_URL}/courses/${courseId}`, {
      method: 'POST',
      headers: {
        'x-user-id': userId,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to add course to favorites');
    }
  }

  static async removeFromFavorites(courseId: string, userId: string): Promise<void> {
    const response = await fetch(`${this.BASE_URL}/courses/${courseId}`, {
      method: 'DELETE',
      headers: {
        'x-user-id': userId,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to remove course from favorites');
    }
  }

  static async getFavorites(userId: string): Promise<string[]> {
    const response = await fetch(`${this.BASE_URL}/courses`, {
      headers: {
        'x-user-id': userId,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to get favorites');
    }

    return response.json();
  }

  static async isFavorite(courseId: string, userId: string): Promise<boolean> {
    const response = await fetch(`${this.BASE_URL}/courses/${courseId}`, {
      headers: {
        'x-user-id': userId,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to check favorite status');
    }

    const data = await response.json();
    return data.isFavorite;
  }
} 