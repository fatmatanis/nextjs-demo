import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { IComment } from "..";

const SingleComment = () => {
  const [comment, setcomment] = useState<IComment>();

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(
          "https://jsonplaceholder.typicode.com/comments"
        );
        const data = await res.json();
        setcomment(data && data.find((u: IComment) => u.id === Number(id)));
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [id]);

  return (
    <div style={{ padding: "48px" }}>
      <h2 style={{ color: "red" }}>Single Comment</h2>
      <p>
        <b>Full Comment: </b> {comment?.name}
      </p>
    </div>
  );
};

export default SingleComment;

//
//
// import { GetStaticProps, InferGetStaticPropsType } from "next";
// import { useRouter } from "next/router";
// import { ParsedUrlQuery } from "querystring";
// import React, { useEffect, useState } from "react";
// import { IComment } from "..";

// const SingleComment = ({
//   commentData,
// }: InferGetStaticPropsType<typeof getStaticProps>) => {

//   return (
//     <div style={{ padding: "48px" }}>
//       <h2 style={{ color: "red" }}>Single Comment</h2>
//       <p>
//         <b>Full Comment: </b> {commentData.name}
//       </p>
//     </div>
//   );
// };

// export default SingleComment;

// export interface IParams extends ParsedUrlQuery {
//   id: string;
// }

// export const getStaticProps: GetStaticProps<{ commentData: IComment }> = async (
//   context
// ) => {
//   const params = context.params as IParams;
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/comments/${params.id}`
//   );
//   const commentData = await res.json();

//   return {
//     props: {
//       commentData,
//     },
//   };
// };

// export async function getStaticPaths() {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/comments/`);
//   const data = await res.json();
//   const ids = data.map((comment: IComment) => comment.id);
//   const paths = ids.map((id: number) => ({ params: { id: id.toString() } }));

//   return {
//     paths,
//     fallback: false, // can also be true or 'blocking'
//   };
// }
