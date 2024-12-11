"use client";
import { PostList2 } from "@/app/_components";

export default function withoutPromisePage() {
    return (
        <div className="mx-auto shadow-lg bg-white max-w-screen-md rounded-xl flex-1 p-8">
            <h1 className="text-2xl font-black">不使用 Skeleton UI</h1>
            <PostList2 />
        </div>
    );
}
