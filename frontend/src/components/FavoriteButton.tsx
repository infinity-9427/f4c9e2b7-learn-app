import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';
import { FavoritesService } from '@/services/favorites';
import { useToast } from '@/components/ui/use-toast';

interface FavoriteButtonProps {
  courseId: string;
  userId: string;
  className?: string;
}

export function FavoriteButton({ courseId, userId, className }: FavoriteButtonProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const checkFavoriteStatus = async () => {
      try {
        const status = await FavoritesService.isFavorite(courseId, userId);
        setIsFavorite(status);
      } catch (error) {
        console.error('Error checking favorite status:', error);
      }
    };

    checkFavoriteStatus();
  }, [courseId, userId]);

  const toggleFavorite = async () => {
    if (isLoading) return;

    setIsLoading(true);
    try {
      if (isFavorite) {
        await FavoritesService.removeFromFavorites(courseId, userId);
        toast({
          title: 'Removed from favorites',
          description: 'Course has been removed from your favorites',
        });
      } else {
        await FavoritesService.addToFavorites(courseId, userId);
        toast({
          title: 'Added to favorites',
          description: 'Course has been added to your favorites',
        });
      }
      setIsFavorite(!isFavorite);
    } catch (error) {
      console.error('Error toggling favorite:', error);
      toast({
        title: 'Error',
        description: 'Failed to update favorites',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleFavorite}
      disabled={isLoading}
      className={className}
    >
      <Heart
        className={`h-5 w-5 ${isFavorite ? 'fill-current text-red-500' : 'text-gray-500'}`}
      />
    </Button>
  );
} 