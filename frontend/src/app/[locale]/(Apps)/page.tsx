'use client';

import { useState } from 'react';
import { courses } from '@/data/courses';
import { CourseCard } from '@/components/CourseCard';
import { Course } from '@/types/course';

export default function HomePage() {
  const [coursesList, setCoursesList] = useState<Course[]>(courses);

  const handleToggleFavorite = (courseId: string) => {
    setCoursesList(prevCourses =>
      prevCourses.map(course =>
        course.id === courseId
          ? { ...course, isFavorite: !course.isFavorite }
          : course
      )
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold text-white">Featured Courses</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {coursesList.map(course => (
          <CourseCard
            key={course.id}
            course={course}
            onToggleFavorite={handleToggleFavorite}
          />
        ))}
      </div>
    </div>
  );
}