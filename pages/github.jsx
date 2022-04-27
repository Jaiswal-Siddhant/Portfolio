import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/GitHubPage.module.css';

const GithubPage = () => {
	return (
		<div className={styles.wrapper}>
			<a href='https://github.com/siddhant-jaiswal-j' target='_blank'>
				<h1>Github Page</h1>
			</a>
			<div className={styles.container}>
				<main className={styles.main}>
					<div className={styles.grid}>
						<a
							href='https://github.com/Jaiswal-Siddhant/Login-page-with-MongoDb'
							className={styles.card}
							target='_blank'>
							<h2>Login Page with database [mongoDB] &rarr;</h2>
							<p>A template for full fledged website.</p>
						</a>

						<a
							href='https://github.com/Jaiswal-Siddhant/REST-student-API'
							className={styles.card}
							target='_blank'>
							<h2>REST CRUD API &rarr;</h2>
							<p>
								This API was demonstration for create read
								update and delete (CRUD) student info
							</p>
						</a>

						<a
							href='https://github.com/Jaiswal-Siddhant/Dynamic-Weather-App-Express'
							className={styles.card}
							target='_blank'>
							<h2>Dynamic Weather App &rarr;</h2>
							<p>
								This shows live temperature of location entered
								on a map made with leaflet.js
							</p>
						</a>

						<a
							href='https://github.com/Jaiswal-Siddhant'
							className={styles.card}
							target='_blank'>
							<h2>This portfolio &rarr;</h2>
							<p>
								VS code themed portfolio for next generation
								developers.
							</p>
						</a>
					</div>
				</main>

				<footer className={styles.footer}>
					<a
						href='https://vercel.com/siddhant-jaiswal-j'
						target='_blank'
						rel='noopener noreferrer'>
						Powered by{' '}
						<span className={styles.logo}>
							<Image
								src='/vercel.svg'
								alt='Vercel Logo'
								width={72}
								height={16}
							/>
						</span>
					</a>
				</footer>
			</div>
		</div>
	);
};

export async function getStaticProps() {
	return {
		props: { title: 'Github' },
	};
}

export default GithubPage;
