import Head from "next/head";
import styles from "../styles/layout.module.scss";

export default function Layout({ title, name, description, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name={name} content={description} />
        <link rel="icon" href="/public/favicon.ico" />
      </Head>
      <div className="main__container">{children}</div>
      <footer className={styles.footer__container}>
        <p>Doc Times</p>
        <p>designed and developed by @jithinppp</p>
      </footer>
    </div>
  );
}

Layout.defaultProps = {
  title: "Doc Times",
  description: "place to find blogs about web development",
  name: "home",
};
