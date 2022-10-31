import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

import styles from "../styles/Home.module.css";

export interface IComment {
  id: number;
  name: string;
}

export const getServerSideProps: GetServerSideProps<{
  posts: IComment[];
}> = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/comments");
  const posts: IComment[] = await res.json();

  return {
    props: {
      posts,
    },
  };
};

const Home = ({
  posts,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter();

  const number = 4;

  return (
    <div className={styles.container}>
      <Head>
        <title>Next Demo</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image
        src="/images/pink-flo.jpg"
        alt="flower-img"
        width={150}
        height={300}
      />
      <h1 className="title">Home</h1>
      <h2>Comment List</h2>
      {posts?.map((comment: IComment) => (
        <h4
          key={comment.id}
          onClick={() => router.push(`/comment/${comment.id}`)}
          style={{ cursor: "pointer" }}
        >
          {comment.id} - {comment.name}
        </h4>
      ))}
      {/* example */}
      <style jsx>
        {`
          .title {
            display: ${number > 2 ? "block" : "none"};
            color: yellow;
          }
        `}
      </style>
    </div>
  );
};

export default Home;
