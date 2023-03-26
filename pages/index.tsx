import Head from "next/head";
import { Inter } from "next/font/google";
import Layout, { siteTitle } from "@/components/Layout";
import utilStyles from "@/styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";

const inter = Inter({ subsets: ["latin"] });

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi I am jinyang, a student at Kyoto University.</p>
        <p>
          (this is a sample website - you&apos;ll be building a site like this
          on <a href="https://nextjs.org/learn">our Next.js tutorial</a>)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
