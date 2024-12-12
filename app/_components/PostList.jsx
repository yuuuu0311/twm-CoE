"use client";

import { Post } from "@/app/_components";
import getPosts from "@/app/_utils/getPost";
import { use } from "react";

import { unstable_noStore as noStore } from "next/cache";

noStore();

const PostList = () => {
    const postData = use(getPosts(3500));

    return (
        <ul>
            {postData.map((item, index) => (
                <Post key={index} />
            ))}
        </ul>
    );
};

export default PostList;
