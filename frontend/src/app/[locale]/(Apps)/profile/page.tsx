'use client';

import { useEffect, useState } from 'react';
import { useRouter } from '@/i18n/navigation';
import Cookies from 'js-cookie';
import { Button } from '@/components/ui/button';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { CourseCard } from '@/components/CourseCard';
import { courses } from '@/data/courses';
import { RiUserLine, RiHeartLine, RiLogoutBoxLine, RiCalendarLine, RiMailLine, RiLockLine } from '@remixicon/react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface User {
  id: number;
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  createdAt: string;
  updatedAt: string;
}

export default function Profile() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const favoriteCourseIds = useSelector((state: RootState) => state.favorites.favoriteCourseIds);
  const favoriteCourses = courses.filter(course => favoriteCourseIds.includes(course.id));

  useEffect(() => {
    const userCookie = Cookies.get('user');
    if (userCookie) {
      try {
        setUser(JSON.parse(userCookie));
      } catch (error) {
        console.error('Error parsing user data:', error);
      }
    }
  }, []);

  const handleLogout = () => {
    // Remove all auth cookies
    Cookies.remove('isAuthenticated');
    Cookies.remove('authExpiry');
    Cookies.remove('token');
    Cookies.remove('user');
    
    // Redirect to login
    router.push('/login');
  };

  if (!user) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-5xl mx-auto">
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-2xl overflow-hidden">
          {/* Profile Header */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-white/20 flex items-center justify-center">
                <RiUserLine className="text-white text-4xl md:text-5xl" />
              </div>
              <div className="text-center md:text-left">
                <h1 className="text-2xl md:text-3xl font-bold text-white">{user.username}</h1>
                <p className="text-indigo-100 mt-1">{user.email}</p>
                <div className="mt-3 flex items-center justify-center md:justify-start gap-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    user.blocked 
                      ? 'bg-red-500/20 text-red-300' 
                      : user.confirmed 
                        ? 'bg-green-500/20 text-green-300' 
                        : 'bg-yellow-500/20 text-yellow-300'
                  }`}>
                    {user.blocked ? 'Blocked' : user.confirmed ? 'Confirmed' : 'Pending Confirmation'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Content */}
          <div className="p-6 md:p-8">
            <Tabs defaultValue="info" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="info">Account Info</TabsTrigger>
                <TabsTrigger value="favorites">Favorites ({favoriteCourses.length})</TabsTrigger>
              </TabsList>
              
              <TabsContent value="info" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-800/50 p-4 rounded-lg flex items-start gap-3">
                    <div className="bg-indigo-500/20 p-2 rounded-full">
                      <RiMailLine className="text-indigo-400 text-xl" />
                    </div>
                    <div>
                      <h3 className="text-gray-400 text-sm">Email</h3>
                      <p className="text-white font-medium">{user.email}</p>
                    </div>
                  </div>
                  
                  <div className="bg-gray-800/50 p-4 rounded-lg flex items-start gap-3">
                    <div className="bg-purple-500/20 p-2 rounded-full">
                      <RiUserLine className="text-purple-400 text-xl" />
                    </div>
                    <div>
                      <h3 className="text-gray-400 text-sm">Username</h3>
                      <p className="text-white font-medium">{user.username}</p>
                    </div>
                  </div>
                  
                  <div className="bg-gray-800/50 p-4 rounded-lg flex items-start gap-3">
                    <div className="bg-green-500/20 p-2 rounded-full">
                      <RiCalendarLine className="text-green-400 text-xl" />
                    </div>
                    <div>
                      <h3 className="text-gray-400 text-sm">Member Since</h3>
                      <p className="text-white font-medium">{new Date(user.createdAt).toLocaleDateString()}</p>
                    </div>
                  </div>
                  
                  <div className="bg-gray-800/50 p-4 rounded-lg flex items-start gap-3">
                    <div className="bg-blue-500/20 p-2 rounded-full">
                      <RiLockLine className="text-blue-400 text-xl" />
                    </div>
                    <div>
                      <h3 className="text-gray-400 text-sm">Account Status</h3>
                      <p className="text-white font-medium">
                        {user.blocked ? 'Blocked' : user.confirmed ? 'Confirmed' : 'Pending Confirmation'}
                      </p>
                    </div>
                  </div>
                </div>
                
                <Button
                  onClick={handleLogout}
                  className="w-full bg-red-600 hover:bg-red-700 text-white flex items-center justify-center gap-2"
                >
                  <RiLogoutBoxLine className="text-xl" />
                  Logout
                </Button>
              </TabsContent>
              
              <TabsContent value="favorites">
                {favoriteCourses.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {favoriteCourses.map(course => (
                      <CourseCard key={course.id} course={course} />
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="bg-gray-800/50 p-4 rounded-full mb-4">
                      <RiHeartLine className="text-gray-400 text-3xl" />
                    </div>
                    <h3 className="text-xl font-medium text-white mb-2">No Favorites Yet</h3>
                    <p className="text-gray-400 max-w-md">
                      You haven't added any courses to your favorites yet. Browse our courses and click the heart icon to add them to your favorites.
                    </p>
                    <Button 
                      onClick={() => router.push('/')} 
                      className="mt-6 bg-indigo-600 hover:bg-indigo-700 text-white"
                    >
                      Browse Courses
                    </Button>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
} 