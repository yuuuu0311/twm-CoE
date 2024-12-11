"use client";
import { PostList, PostLoading } from "@/app/_components";

import { Suspense } from "react";

import { useParams } from "next/navigation";

export default function withPromisePage() {
    const { slug } = useParams();
    return (
        <div className="mx-auto shadow-lg bg-white max-w-screen-md rounded-xl flex-1 p-8">
            <h1 className="text-2xl font-black">使用 Skeleton UI</h1>
            <Suspense key={slug} fallback={<PostLoading />}>
                <PostList />
            </Suspense>
        </div>
    );
}
