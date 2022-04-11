import Link from "next/link"
import { useRouter } from "next/router"

const style = {
  color: '#311fd6',
  textDecoration: 'underline',
}

interface ActiveLinkProps {
  text: string
  href: string
}

const ActiveLink = ( { text, href }: ActiveLinkProps ) => {

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