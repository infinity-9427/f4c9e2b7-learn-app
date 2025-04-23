"use client"
import AboutForm from "@/components/AboutForm"
import { useSectionTitle } from '../../__hooks/useGetPathname'; 

const Page = () => {
  const sectionTitle = useSectionTitle();

  return (
    <div>
      <AboutForm title={sectionTitle} />
    </div>
  )
}

export default Page
