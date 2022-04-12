import Link from 'next/link'
import DarkLayout from '../components/layouts/DarkLayout'
import MainLayout from '../components/layouts/MainLayout'

const About = () => {
  return (
    <>
      <h1>About Page</h1>
      <h1 className='title'>
        ir a <Link href="/">Home</Link>
      </h1>
    </>
  )
}

export default About

About.getLayout = (page: JSX.Element | JSX.Element[]) => {
  return (
    <MainLayout>
      <DarkLayout>
        {page}
      </DarkLayout>
    </MainLayout>
  )
}