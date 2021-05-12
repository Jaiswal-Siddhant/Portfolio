import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/AboutPage.module.css';

const AboutPage = () => {
	return (
		<>
			<h1 className={styles.title}>About me</h1>
			<div className={styles.container}>
				<div className={styles.imgHolder}>
					<Image src='/Person.svg' height={150} width={150} />
				</div>
			</div>
			<div className={styles.content}>
				<div className={styles.main}>
				I am&nbsp;<span className={styles.name}>Siddhant</span>, a
				student of Second year CSE from&nbsp;
				<Link href='http://mgmcen.ac.in/'>
					MGM's college of Engineering
				</Link>
				, Nanded.
				</div>
			</div>
		</>
	);
};

export async function getStaticProps() {
	return {
		props: { title: 'About' },
	};
}

export default AboutPage;
