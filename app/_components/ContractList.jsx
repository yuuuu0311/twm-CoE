"use client";

import { Contract } from "@/app/_components";
import getPosts from "@/app/_utils/getPost";
import { use } from "react";

import { unstable_noStore as noStore } from "next/cache";
noStore();

const ContractList = () => {
  const contractData = use(getPosts(2000));

  return (
    <div className="sticky top-[96px] text-stone-800 ">
      <p className="font-bold text-lg mb-4 px-4">Contact</p>

      <ul className="flex flex-col">
        {contractData.map((item, index) => (
          <Contract key={index} />
        ))}
      </ul>
    </div>
  );
};

export default ContractList;
