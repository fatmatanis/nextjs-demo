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
