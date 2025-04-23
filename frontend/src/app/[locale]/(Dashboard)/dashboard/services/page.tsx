"use client"
import ServiceForm from "@/components/ServicesForm"
import { useSectionTitle } from '../../__hooks/useGetPathname'; 

const Page = () => {
  const sectionTitle = useSectionTitle();

    return (
      <div>
       <ServiceForm title={sectionTitle} />
      </div>
    )
  }
  
  export default Page
  