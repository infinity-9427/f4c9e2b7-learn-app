import { Course } from '@/types/course';
import { Button } from './ui/button';
import Link from 'next/link';
import Image from 'next/image';

interface CourseCardProps {
  course: Course;
  onToggleFavorite: (courseId: string) => void;
}

export const CourseCard = ({ course, onToggleFavorite }: CourseCardProps) => {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-700 bg-gray-800 shadow-sm transition-all hover:shadow-lg hover:border-blue-500">
      <div className="relative aspect-video">
        <Image
          src={course.image}
          alt={course.title}
          fill
          className="object-cover"
        />
        <button
          onClick={() => onToggleFavorite(course.id)}
          className="absolute right-2 top-2 rounded-full bg-gray-800/80 p-2 hover:bg-gray-700"
        >
          <i className={`ri-heart-${course.isFavorite ? 'fill' : 'line'} text-xl ${
            course.isFavorite ? 'text-red-500' : 'text-gray-300'
          }`}></i>
        </button>
      </div>
      
      <div className="flex flex-1 flex-col p-4">
        <Link href={`/detail-course/${course.id}`}>
          <h3 className="mb-2 text-lg font-semibold text-white line-clamp-2 hover:text-blue-400">
            {course.title}
          </h3>
        </Link>
        
        <p className="mb-2 text-sm text-gray-300 line-clamp-2">
          {course.description}
        </p>
        
        <div className="mt-auto">
          <div className="mb-2 flex items-center gap-2">
            <div className="flex items-center">
              <i className="ri-star-fill text-yellow-400"></i>
              <span className="ml-1 text-sm font-medium text-white">{course.rating.value}</span>
              <span className="ml-1 text-sm text-gray-400">({course.rating.count.toLocaleString()})</span>
            </div>
            <span className="text-gray-400">•</span>
            <span className="text-sm text-gray-400">{course.students.toLocaleString()} students</span>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Image
                src={course.author.avatar}
                alt={course.author.name}
                width={24}
                height={24}
                className="rounded-full"
              />
              <span className="text-sm text-gray-300">{course.author.name}</span>
            </div>
            <div className="text-right">
              {course.originalPrice && (
                <span className="text-sm text-gray-400 line-through">
                  ${course.originalPrice}
                </span>
              )}
              <div className="text-lg font-bold text-white">${course.price}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 