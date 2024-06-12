import React from 'react'
import styles from './Form.module.css'

export default function Form() {
	return (
		<section className={styles.section}>
			<div className={styles.titleForm}>
				<h2 className={styles.titleForm_heading}>Stay in the know.</h2>
				<p className={styles.titleForm_text}>
					Sign-up to my newsletter to get an update whenever I post a new
					article. I try to be very mindful of not spamming my subscribers.
				</p>
			</div>
			<form
				onSubmit={e => {
					e.preventDefault()
				}}
				className={styles.form}
			>
				<label htmlFor='name'>Name</label>
				<input type='text' id='name' className={styles.inpt} />
				<label htmlFor='email'>Email Address</label>
				<input type='email' id='email'  className={styles.inpt}/>
				<button type='submit' className={styles.btn}>Apply</button>
			</form>
		</section>
	)
}
