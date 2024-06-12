import React from "react"
import styles from "./ArticlesListCard.module.css"

export default function ArticlesListCard({ data }) {
	const { title, description, date, image } = data

	return (
		<li className={styles.card}>
			{image ? <img src={image} alt={title} /> : ''}
			<div>
				<h3>{title}</h3>
				<p>{description}</p>
				<p>{date}</p>
			</div>
		</li>
	)
}
