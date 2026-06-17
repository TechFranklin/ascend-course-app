import dynamic from 'next/dynamic'

const CourseManagement = dynamic(() => import('@/components/CourseManagement'), {
  ssr: false,
})

export default function Home() {
  return <CourseManagement />
}