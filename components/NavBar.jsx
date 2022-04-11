import ActiveLink from './ActiveLink'
import styles from './NavBar.module.css'

const NavBar = () => {
  return (
    <>
      <nav className={styles.menu}>
        <ActiveLink text="Home" href="/" />
        <ActiveLink text="About" href="/about" />
        <ActiveLink text="Contact" href="/contact" />
      </nav>
    </>
  )
}

export default NavBar