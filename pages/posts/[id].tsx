import Date from "@/components/date";
import Layout from "@/components/Layout";
import { getAllPostIds, getPostData } from "@/lib/posts";
import { GetStaticPropsContext } from "next";
import Head from "next/head";
import utilStyles from "../../styles/utils.module.css";

type PostData = {
  postData: {
    id: string;
    title: string;
    date: string;
    contentHtml: string;
  };
};

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const postData = await getPostData(params?.id as string);
  return {
    props: {
      postData,
    },
  };
}

export default function Post({ postData }: PostData) {
  return (
    <Layout home={false}>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingX1}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div
          dangerouslySetInnerHTML={{
            __html: postData.contentHtml,
          }}
        />
      </article>
    </Layout>
  );
}
