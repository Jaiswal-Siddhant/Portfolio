import Image from 'next/image';
import contact from '../styles/ContactPage.module.css';

const ContactPage = () => {
	return (
		<>
			<h1>Contact Me</h1>
			<div className={contact.upper}>
				You can contact me here:
				<div className={contact.content}>
					<span>
						<Image src='/Gmail.svg' height={20} width={20} />
					</span>
					&nbsp;Gmail:
					<span className={contact.mail}>
						&nbsp;siddhant2jaiswal@gmail.com
					</span>
				</div>
				<div className={contact.linkedin}>
					<span>
						<Image src='/LinkedIn.svg' height={20} width={20} />
					</span>
					&nbsp;LinkedIn:
					<span className={contact.mail}>
						&nbsp;
						<a
							href='https://www.linkedin.com/in/siddhant-jaiswal-3729991a2/'
							target='_blank'>
							Siddhant Jaiswal
						</a>
					</span>
				</div>
			</div>
		</>
	);
};

export async function getStaticProps() {
	return {
		props: { title: 'Contact' },
	};
}

export default ContactPage;
