import Link from 'next/link'
import MainLayout from '../../components/layouts/MainLayout'

const Pricing = () => {
  return (
    <>
      <h1>Pricing Page</h1>
        <h1 className='title'>
          ir a <Link href="/">Home</Link>
        </h1>
    </>
  )
}

export default Pricing

Pricing.getLayout = (page) => {
  return (
    <MainLayout>
        {page}
    </MainLayout>
  )
}
