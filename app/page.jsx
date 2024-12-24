"use client";

import { PostList, PostList2, PostLoading } from "@/app/_components";
import { Suspense } from "react";

const Compare = () => {
  return (
    <div className="flex items-start gap-4 p-8">
      <div className="mx-auto shadow-lg bg-white max-w-screen-md rounded-xl flex-1 p-8">
        <h1 className="text-2xl font-black">使用 Skeleton UI</h1>
        <Suspense fallback={<PostLoading />}>
          <PostList />
        </Suspense>
      </div>

      <div className="mx-auto shadow-lg bg-white max-w-screen-md rounded-xl flex-1 p-8">
        <h1 className="text-2xl font-black">不使用 Skeleton UI</h1>
        <PostList2 />
      </div>
    </div>
  );
};

export default Compare;
