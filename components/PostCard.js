import styles from "../styles/sass/components/postCard.module.scss";
import Image from "next/image";
import moment from "moment";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function PostCard({ post: { node } }) {
  return (
    <div className={styles.card}>
      <div className={styles.card__header}>
        <Image
          className={styles.card__image}
          width={400}
          height={200}
          src={node.featuredImage.url}
          alt="card-image"
        />
      </div>
      <div className={styles.card__body}>
        <span className={styles.tag}>
          <Link href={`/categories/${node.categories[0].slug}`}>
            <a>#{node.categories[0].name}</a>
          </Link>
        </span>
        <h4 className={styles.post__title}>{node.title}</h4>
        <p className={styles.excerpt}>{node.excerpt}</p>
        <Link href={`/posts/${node.slug}`}>
          <a className={styles.readMore}>Read more...</a>
        </Link>
      </div>
      <div className={styles.author__container}>
        <Image
          className={styles.author__image}
          src={node.author.photo.url}
          alt="author-photo"
          width={40}
          height={40}
        />
        <div className={styles.name__date__container}>
          <span className={styles.author__name}>{node.author.name}</span>
          <span className={styles.date}>
            {moment(node.createdAt).format("MMM-D-YYYY")}
          </span>
        </div>
      </div>
    </div>
  );
}
