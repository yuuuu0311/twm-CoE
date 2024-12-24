"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Contract = () => {
  return (
    <div className="px-4 animate-fadeIn">
      <div className="flex items-center gap-4 h-12">
        <Avatar className="aspect-square h-8 w-auto">
          <img src="https://github.com/shadcn.png" alt="" />
        </Avatar>
        <p className="font-bold">Davis Yu</p>
      </div>
    </div>
  );
};

export default Contract;
