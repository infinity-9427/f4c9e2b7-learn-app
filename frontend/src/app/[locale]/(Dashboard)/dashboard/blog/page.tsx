"use client"
import BlogForm from "@/components/BlogForm"
import { useSectionTitle } from '../../__hooks/useGetPathname'; 

const Page = () => {
  const sectionTitle = useSectionTitle();

    return (
      <div>
        <BlogForm title={sectionTitle} />
      </div>
    )
  }
  
  export default Page
  