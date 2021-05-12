import Head from 'next/head';

const CustomHead = ({ title }) => {
	return (
		<Head>
			<title>{title}</title>
			<meta
				name='description'
				content="I, Siddhant Jaiswal am student of Second year CSE from MGM's college of engineering, Nanded. I am a back end MERN developer, and am passionate about coding"
			/>
			<meta
				name='keywords'
				content="Siddhant, Siddhant Jaiswal, Siddhant MGM, Siddhant CSE, CSE Portfolio,Siddhant Jaiswal MGM CSE, MGM, MGM's COE, MGM's college of engineering, Mahatma Gandhi Missions college of engineering, Nanded"
			/>
		</Head>
	);
};

export default CustomHead;

CustomHead.defaultProps = {
	title: 'Siddhant Jaiswal Portfolio',
};
