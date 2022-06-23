import { useEffect, useState } from "react";
import Link from "next/link";
import { getCategories } from "../services";
import styles from "../styles/sass/components/categories.module.scss";

export default function PostCategories() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories().then((categories) => {
      setCategories(categories);
    });
  }, []);
  console.log(categories);

  return (
    <div className={styles.categories__container}>
      <h3>Categories</h3>
      <div className={styles.category}>
        {categories.map((category) => (
          <div key={category.name}>
            <Link href={`/categories/${category.slug}`}>{category.name}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
