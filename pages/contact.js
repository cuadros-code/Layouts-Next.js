import Link from 'next/link'
import MainLayout from '../components/layouts/MainLayout'

const Contact = () => {
  return (
    <MainLayout>
      <h1>Contact Page</h1>
      <h1 className='title'>
        ir a <Link href="/">Home</Link>
      </h1>
    </MainLayout>
  )
}

export default Contact