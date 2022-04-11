import ActiveLink from './ActiveLink'
import styles from './NavBar.module.css'

const menuItems = [
  {
      text: 'Home',
      href: '/'
  },
  {
      text: 'About',
      href: '/about'
  },
  {
      text: 'Contact',
      href: '/contact'
  },
  {
      text: 'Pricing',
      href: '/pricing'
  },
];

const NavBar = () => {
  return (
    <>
      <nav className={styles.menu}>
        {
          menuItems.map(( data, index) => (
            <ActiveLink 
              key={index}
              href={data.href}
              text={data.text}
            />
          ))
        }
      </nav>
    </>
  )
}

export default NavBar