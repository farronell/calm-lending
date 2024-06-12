import dataArticlesList from '../../data/dataArticlesList'
import ArticlesListCard from './ArticlesListCard/ArticlesListCard'
import styles from "./ArticlesList.module.css"

export function ArticlesList() {
	const data = dataArticlesList
	return (
		<section className={styles.section}>
			<ul className={styles.list}>
				{data.map((article, index)=> (
					<ArticlesListCard data={article} key={index}/>
				))}
			</ul>
			<a href="/" className={styles.arrow}>View archive</a>
		</section>
	)
}
