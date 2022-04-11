import Link from 'next/link'
import MainLayout from '../components/layouts/MainLayout'

export default function Home() {
  return (
    <>
      <MainLayout>
        <h1>Home Page</h1>
        <h1 className='title'>
          ir a <Link href="/about">About</Link>
        </h1>
      </MainLayout> 
    </>
  )
}
