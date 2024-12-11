"use client";
import { PostList } from "@/app/_components";

export default function withPromisePage() {
    return (
        <div>
            <h1 className="text-2xl font-black">不使用 Skeleton UI</h1>
            <PostList />
        </div>
    );
}
