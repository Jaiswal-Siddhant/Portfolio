import React from "react";
import words from './Words';
import styles from "../styles/HomePage.module.css";
import Typed from 'typed.js'

class Typing extends React.Component {
	componentDidMount() {
		const options = {
			strings: words,
			typeSpeed: 50,
			backSpeed: 50,
			loop: true,
			cursorChar: '|',
		};
		this.typed = new Typed(this.el, options);
	}
	componentWillUnmount() {
		this.typed.destroy();
	}

	render() {
		return (
			<>
				<h3 className={styles.subtitle}>
					<span
						style={{ whiteSpace: 'pre' }}
						ref={(el) => {
							this.el = el;
						}}
					/>
				</h3>
			</>
		);
	}
}
export default Typing;
