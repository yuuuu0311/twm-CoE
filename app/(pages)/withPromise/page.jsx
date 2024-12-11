"use client";
import { PostList, PostLoading } from "@/app/_components";

import { Suspense } from "react";

export default function withPromisePage() {
    return (
        <div>
            <h1 className="text-2xl font-black">使用 Skeleton UI</h1>
            <Suspense fallback={<PostLoading />}>
                <PostList />
            </Suspense>
        </div>
    );
}
