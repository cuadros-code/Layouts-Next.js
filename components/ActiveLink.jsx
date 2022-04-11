import Link from "next/link"
import { useRouter } from "next/router"

const style = {
  color: '#311fd6',
  textDecoration: 'underline',
}

const ActiveLink = ( { text, href } ) => {

  const { asPath } = useRouter()

  return (
    <>
      <Link href={href} >
        <a style={ asPath === href ? style: {} } > { text } </a>
      </Link>
    </>
  )
}

export default ActiveLink