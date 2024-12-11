"use client";

import { use } from "react";

import { Post } from "@/app/_components";
import getPosts from "@/app/_utils/getPost";

const PostList = () => {
    const postData = use(getPosts(5000));

    return (
        <ul>
            {postData.map((item, index) => (
                <Post key={index} />
            ))}
        </ul>
    );
};

export default PostList;
