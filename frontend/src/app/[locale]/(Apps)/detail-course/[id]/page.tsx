'use client';

import { useState } from 'react';
import { use } from 'react';
import { courses } from '@/data/courses';
import { Course } from '@/types/course';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function CourseDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const [course, setCourse] = useState<Course | undefined>(
    courses.find(c => c.id === resolvedParams.id)
  );

  if (!course) {
    return <div className="text-white">Course not found</div>;
  }

  const handleToggleFavorite = () => {
    setCourse(prev => prev ? { ...prev, isFavorite: !prev.isFavorite } : undefined);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="relative aspect-video overflow-hidden rounded-lg">
            <Image
              src={course.image}
              alt={course.title}
              fill
              className="object-cover"
            />
          </div>
          
          <h1 className="mt-6 text-3xl font-bold text-white">{course.title}</h1>
          
          <div className="mt-4 flex items-center gap-4">
            <div className="flex items-center">
              <i className="ri-star-fill text-yellow-400"></i>
              <span className="ml-1 text-lg font-medium text-white">{course.rating.value}</span>
              <span className="ml-1 text-gray-300">({course.rating.count.toLocaleString()} ratings)</span>
            </div>
            <span className="text-gray-300">•</span>
            <span className="text-gray-300">{course.students.toLocaleString()} students</span>
          </div>
          
          <div className="mt-6 flex items-center gap-4">
            <Image
              src={course.author.avatar}
              alt={course.author.name}
              width={48}
              height={48}
              className="rounded-full"
            />
            <div>
              <div className="font-medium text-white">{course.author.name}</div>
              <div className="text-sm text-gray-300">{course.author.title}</div>
            </div>
          </div>
          
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-white">What you'll learn</h2>
            <p className="mt-4 text-gray-300">{course.description}</p>
          </div>
        </div>
        
        <div className="lg:col-span-1">
          <div className="sticky top-4 rounded-lg border border-gray-700 bg-gray-800 p-6 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <div className="text-3xl font-bold text-white">${course.price}</div>
              {course.originalPrice && (
                <div className="text-lg text-gray-400 line-through">
                  ${course.originalPrice}
                </div>
              )}
            </div>
            
            <Button className="mb-4 w-full bg-blue-600 hover:bg-blue-700" size="lg">
              Add to Cart
            </Button>
            
            <Button
              variant="outline"
              className="w-full border-gray-600 text-gray-300 hover:bg-gray-700"
              onClick={handleToggleFavorite}
            >
              <i className={`ri-heart-${course.isFavorite ? 'fill' : 'line'} mr-2 text-xl ${
                course.isFavorite ? 'text-red-500' : 'text-gray-300'
              }`}></i>
              {course.isFavorite ? 'Remove from Wishlist' : 'Add to Wishlist'}
            </Button>
            
            <div className="mt-6 space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-300">Duration</span>
                <span className="font-medium text-white">{course.duration}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Level</span>
                <span className="font-medium text-white">{course.level}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Language</span>
                <span className="font-medium text-white">{course.language}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Last Updated</span>
                <span className="font-medium text-white">{course.lastUpdated}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 