const ArticlesPage = () => {
  return (
    <>
      <h1>Articles Page</h1>
      <h2>No Articles Yet</h2>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "Articles" },
  };
}

export default ArticlesPage;
