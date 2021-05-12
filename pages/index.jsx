import Link from "next/link";
import styles from "../styles/HomePage.module.css";
import Typing from "../components/Typing";

export default function HomePage() {
  
  return (
    <>
      <div className={styles.container}>
        <h5 className={styles.welcome}>Welcome to my portfolio! I am</h5>
        <h1 className={styles.title}>Siddhant Jaiswal</h1>
        <Typing className={styles.subtitle}/>
        <div className={styles.buttons}>
          <Link href="/about">
            <button className={styles.contained}>What Can I Do?</button>
          </Link>
          <Link href="/contact">
            <button className={styles.outlined}>React Out to Me</button>
          </Link>
        </div>
      </div>
    </>
  );
}


export async function getStaticProps() {
  return {
    props: { title: "Home" },
  };
}

