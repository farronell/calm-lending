import logo from '../../img/logo/logo.png'
import styles from './Header.module.css'

export default function Header() {
	return (
		<header className={styles.header}>
			<a href='/'>
				<img src={logo} alt='logo' />
			</a>
			<nav>
				<ul className={styles.nav}>
					<li>
						<a href='/'>Home</a>
					</li>
					<li>
						<a href='/'>Archive</a>
					</li>
					<li>
						<a href='/'>About</a>
					</li>
				</ul>
			</nav>
		</header>
	)
}
