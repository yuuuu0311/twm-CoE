"use client";

import { Story } from "@/app/_components";
import getPosts from "@/app/_utils/getPost";
import { use } from "react";

import { unstable_noStore as noStore } from "next/cache";
noStore();

const StoryList = () => {
  const storyData = use(getPosts(5000));

  return (
    <ul className="flex gap-4 overflow-auto">
      {storyData.map((item, index) => (
        <Story key={index} />
      ))}
    </ul>
  );
};

export default StoryList;
