import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store/store';
import { toggleFavorite } from '@/store/slices/favoritesSlice';
import { useState } from 'react';

export const useFavorites = () => {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  const favoriteCourseIds = useSelector((state: RootState) => state.favorites.favoriteCourseIds);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleToggleFavorite = (courseId: string) => {
    if (!isAuthenticated) {
      setShowLoginModal(true);
      return;
    }
    dispatch(toggleFavorite(courseId));
  };

  const isFavorite = (courseId: string) => {
    return favoriteCourseIds.includes(courseId);
  };

  return {
    handleToggleFavorite,
    isFavorite,
    showLoginModal,
    setShowLoginModal,
    favoriteCourseIds
  };
}; 