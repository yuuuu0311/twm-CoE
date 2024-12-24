"use client";

import { useEffect, useState } from "react";

import { Post } from "@/app/_components";

const PostList2 = () => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await fetch("/api/post", {
        method: "POST",
        body: JSON.stringify({
          delay: 3500,
        }),
      });

      const { data } = await response.json();
      setPost(data);
    })();
  }, []);

  return (
    <ul>
      {post?.map((item, index) => (
        <Post key={index} />
      ))}
    </ul>
  );
};

export default PostList2;
