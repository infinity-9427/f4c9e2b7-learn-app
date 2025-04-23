import { Course } from '@/types/course';

export const courses: Course[] = [
  {
    id: '1',
    title: 'Complete Web Development Bootcamp',
    description: 'Learn HTML, CSS, JavaScript, React, Node.js, and more to become a full-stack developer.',
    price: 89.99,
    originalPrice: 199.99,
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    author: {
      name: 'John Doe',
      avatar: 'https://i.pravatar.cc/150?img=1',
      title: 'Senior Software Engineer'
    },
    rating: {
      value: 4.7,
      count: 12500
    },
    duration: '44 hours',
    level: 'Beginner',
    students: 150000,
    lastUpdated: '2024-03-15',
    language: 'English',
    isFavorite: false
  },
  {
    id: '2',
    title: 'Advanced React Patterns and Best Practices',
    description: 'Master advanced React concepts, patterns, and performance optimization techniques.',
    price: 79.99,
    originalPrice: 149.99,
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    author: {
      name: 'Jane Smith',
      avatar: 'https://i.pravatar.cc/150?img=2',
      title: 'React Expert'
    },
    rating: {
      value: 4.8,
      count: 8300
    },
    duration: '32 hours',
    level: 'Intermediate',
    students: 85000,
    lastUpdated: '2024-03-10',
    language: 'English',
    isFavorite: false
  },
  {
    id: '3',
    title: 'Machine Learning A-Z: Hands-On Python & R',
    description: 'Learn to create Machine Learning Algorithms in Python and R from two Data Science experts.',
    price: 99.99,
    originalPrice: 179.99,
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    author: {
      name: 'Dr. Sarah Johnson',
      avatar: 'https://i.pravatar.cc/150?img=3',
      title: 'Data Science Expert'
    },
    rating: {
      value: 4.6,
      count: 15600
    },
    duration: '54 hours',
    level: 'Advanced',
    students: 200000,
    lastUpdated: '2024-03-01',
    language: 'English',
    isFavorite: false
  },
  {
    id: '4',
    title: 'AWS Certified Solutions Architect',
    description: 'Comprehensive guide to AWS services, architecture patterns, and best practices for cloud solutions.',
    price: 129.99,
    originalPrice: 199.99,
    image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    author: {
      name: 'Michael Chen',
      avatar: 'https://i.pravatar.cc/150?img=4',
      title: 'Cloud Architect'
    },
    rating: {
      value: 4.9,
      count: 9200
    },
    duration: '38 hours',
    level: 'Intermediate',
    students: 75000,
    lastUpdated: '2024-03-05',
    language: 'English',
    isFavorite: false
  },
  {
    id: '5',
    title: 'UI/UX Design Masterclass',
    description: 'Learn modern UI/UX design principles, tools, and techniques to create beautiful user interfaces.',
    price: 69.99,
    originalPrice: 129.99,
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    author: {
      name: 'Emily Rodriguez',
      avatar: 'https://i.pravatar.cc/150?img=5',
      title: 'UI/UX Designer'
    },
    rating: {
      value: 4.7,
      count: 11200
    },
    duration: '28 hours',
    level: 'Beginner',
    students: 95000,
    lastUpdated: '2024-03-08',
    language: 'English',
    isFavorite: false
  },
  {
    id: '6',
    title: 'Python for Data Science and Machine Learning',
    description: 'Comprehensive Python course covering data analysis, visualization, and machine learning fundamentals.',
    price: 84.99,
    originalPrice: 159.99,
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    author: {
      name: 'David Kim',
      avatar: 'https://i.pravatar.cc/150?img=6',
      title: 'Data Scientist'
    },
    rating: {
      value: 4.8,
      count: 18700
    },
    duration: '42 hours',
    level: 'Intermediate',
    students: 165000,
    lastUpdated: '2024-03-12',
    language: 'English',
    isFavorite: false
  },
  {
    id: '7',
    title: 'Mobile App Development with Flutter',
    description: 'Build beautiful, natively compiled applications for mobile, web, and desktop from a single codebase.',
    price: 94.99,
    originalPrice: 169.99,
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    author: {
      name: 'Alex Thompson',
      avatar: 'https://i.pravatar.cc/150?img=7',
      title: 'Mobile Developer'
    },
    rating: {
      value: 4.7,
      count: 7800
    },
    duration: '36 hours',
    level: 'Intermediate',
    students: 62000,
    lastUpdated: '2024-03-07',
    language: 'English',
    isFavorite: false
  },
  {
    id: '8',
    title: 'Cybersecurity Fundamentals',
    description: 'Learn essential cybersecurity concepts, tools, and techniques to protect systems and data.',
    price: 109.99,
    originalPrice: 189.99,
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    author: {
      name: 'Robert Wilson',
      avatar: 'https://i.pravatar.cc/150?img=8',
      title: 'Security Expert'
    },
    rating: {
      value: 4.9,
      count: 6300
    },
    duration: '48 hours',
    level: 'Advanced',
    students: 45000,
    lastUpdated: '2024-03-03',
    language: 'English',
    isFavorite: false
  },
  {
    id: '9',
    title: 'Digital Marketing Masterclass',
    description: 'Comprehensive guide to SEO, social media marketing, content strategy, and analytics.',
    price: 79.99,
    originalPrice: 149.99,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    author: {
      name: 'Lisa Martinez',
      avatar: 'https://i.pravatar.cc/150?img=9',
      title: 'Marketing Strategist'
    },
    rating: {
      value: 4.6,
      count: 8900
    },
    duration: '32 hours',
    level: 'Beginner',
    students: 78000,
    lastUpdated: '2024-03-09',
    language: 'English',
    isFavorite: false
  },
  {
    id: '10',
    title: 'Blockchain Development with Ethereum',
    description: 'Learn to build decentralized applications (DApps) using Solidity and Ethereum blockchain.',
    price: 119.99,
    originalPrice: 199.99,
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    author: {
      name: 'James Anderson',
      avatar: 'https://i.pravatar.cc/150?img=10',
      title: 'Blockchain Developer'
    },
    rating: {
      value: 4.8,
      count: 5200
    },
    duration: '40 hours',
    level: 'Advanced',
    students: 35000,
    lastUpdated: '2024-03-11',
    language: 'English',
    isFavorite: false
  }
]; 