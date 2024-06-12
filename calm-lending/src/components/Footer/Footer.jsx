import React from "react"
import logo from '../../img/logo/logo.png'
import styles from "./Footer.module.css"

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={styles.footer_card}>
				<a href='/'>
					<img src={logo} alt='logo' />
				</a>
				<h3>A lifestyle blog about minimalism, technology, design & travel.</h3>
				<nav>
					<ul className={styles.footer_nav}>
						<li>
							<a href='/'>Instructions</a>
						</li>
						<li>
							<a href='/'>Style guide</a>
						</li>
						<li>
							<a href='/'>Licenses</a>
						</li>
						<li>
							<a href='/'>Changelog</a>
						</li>
					</ul>
				</nav>
			</div>
		</footer>
	)
}
