"use client";
import { PostList, PostLoading } from "@/app/_components";

import { Suspense } from "react";

export default function withPromisePage() {
    return (
        <Suspense fallback={<PostLoading />}>
            <PostList />
        </Suspense>
    );
}
