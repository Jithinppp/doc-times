import { useState, useEffect } from "react";
import { getRecentPosts, getRelatedPosts } from "../services";
import styles from "../styles/sass/components/postWidget.module.scss";
import Image from "next/image";
import moment from "moment";
import Link from "next/link";

export default function PostWidget({ categories, slug }) {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getRelatedPosts(categories, slug).then((result) =>
        setRelatedPosts(result)
      );
    } else {
      getRecentPosts().then((result) => setRelatedPosts(result));
    }
  }, [slug]);
  console.log(relatedPosts);

  return (
    <div className={styles.widget__container}>
      <h3>{slug ? "Related Posts" : "Recent Posts"}</h3>
      {relatedPosts.map((post) => (
        <div className={styles.post__container} key={post.title}>
          <div className={styles.featuredImage__container}>
            <Image
              className={styles.featuredImage}
              alt={"featured-Image"}
              src={post.featuredImage.url}
              width={40}
              height={40}
            />
          </div>
          <div className={styles.description}>
            <Link href={`/posts/${post.slug}`}>
              <p className={styles.post__title}>{post.title}</p>
            </Link>
            <p className={styles.post__date}>
              {moment(post.createdAt).format("MMM-D-YYYY")}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
