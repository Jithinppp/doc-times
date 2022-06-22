import Head from "next/head";
import styles from "../styles/sass/components/layout.module.scss";
import Link from "next/link";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from "react-icons/ai";
export default function Layout({ title, name, description, children }) {
  return (
    <div className={styles.grid__container}>
      <Head>
        <title>{title}</title>
        <meta name={name} content={description} />
        <link rel="icon" href="/public/favicon.ico" />
      </Head>

      <header className={styles.nav__container}>
        <h1 className={styles.logo}>
          <Link href={"/"}>DocTimes.</Link>
        </h1>
        <ul className={styles.nav__items}>
          <li className={styles.nav__item}>
            <Link href="/latest">Latest</Link>
          </li>
          <li className={styles.nav__item}>
            <Link href="/categories">Categories</Link>
          </li>
          <li className={styles.nav__item}>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </header>

      <div className={styles.main__container}>{children}</div>

      <footer className={styles.footer__container}>
        <h1 className={styles.footer__logo}>DocTimes.</h1>
        <p className={styles.footer__description}>
          Read articles about latest web technologies and development
        </p>
        <div className={styles.icons__container}>
          <Link href={"https://github.com/Jithinppp"}>
            <a target="_blank">
              <AiFillGithub />
            </a>
          </Link>
          <Link href={"https://www.linkedin.com/in/jithin-p-8396501b7/"}>
            <a target="_blank">
              <AiFillLinkedin />
            </a>
          </Link>
          <Link href={"https://twitter.com/Jithinppp"}>
            <a target="_blank">
              <AiFillTwitterSquare />
            </a>
          </Link>
        </div>
      </footer>
    </div>
  );
}

Layout.defaultProps = {
  title: "Doc Times",
  description: "place to find blogs about web development",
  name: "home",
};
