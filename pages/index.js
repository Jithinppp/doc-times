import { Layout, PostCard, PostWidget, PostCategories } from "../components";
import styles from "../styles/sass/pages/home.module.scss";
import { getPosts } from "../services";

export default function HomePage({ posts }) {
  return (
    <Layout
      title={"DocTimes"}
      name={"home"}
      description={"find blogs about web development"}
    >
      <div className={styles.home__container}>
        <div className={styles.blogs}>
          {posts.map((post, id) => (
            <PostCard key={id} post={post} />
          ))}
        </div>
        <div className={styles.options__container}>
          <PostWidget />
          <PostCategories />
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}
