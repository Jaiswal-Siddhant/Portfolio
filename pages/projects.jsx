import Link from 'next/link';
import styles from '../styles/Projects.module.css';

const ProjectsPage = () => {
  return (
    <>
      <h1>My Projects</h1>
        <div className={styles.subtitle}>
          Projects can be found at my github!
        </div>
      <div className={styles.buttons}>
        <Link href="/github">
          <button className={styles.contained}>Let's go!!</button>
        </Link>
      </div>
    </>
  );
};


export async function getStaticProps() {
  return {
    props: { title: "Projects" },
  };
}


export default ProjectsPage;
