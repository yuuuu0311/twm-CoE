"use client";

import { Contract } from "@/app/_components";
import getPosts from "@/app/_utils/getPost";
import { use } from "react";

import { unstable_noStore as noStore } from "next/cache";
noStore();

const ContractList = () => {
  const contractData = use(getPosts(2000));

  return (
    <ul className="flex flex-col">
      {contractData.map((item, index) => (
        <Contract key={index} />
      ))}
    </ul>
  );
};

export default ContractList;
