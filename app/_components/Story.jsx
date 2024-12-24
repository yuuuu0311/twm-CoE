"use client";

import Image from "next/image";

const Story = () => {
  return (
    <div className="min-w-32 h-auto overflow-hidden rounded-md animate-fadeIn">
      <Image src="/01.jpg" alt="chiikawa" width={128} height={278}></Image>
    </div>
  );
};

export default Story;
