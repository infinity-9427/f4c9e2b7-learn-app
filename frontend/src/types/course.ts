export interface Course {
  id: string;
  title: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  author: {
    name: string;
    avatar: string;
    title: string;
  };
  rating: {
    value: number;
    count: number;
  };
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  students: number;
  lastUpdated: string;
  language: string;
  isFavorite?: boolean;
} 