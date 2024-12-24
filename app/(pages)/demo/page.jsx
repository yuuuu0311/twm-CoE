import { Suspense } from "react";
import {
  PostList,
  PostLoading,
  StoryList,
  StoryLoading,
  ContractList,
  ContractLoading,
} from "@/app/_components";

const DemoPage = () => {
  return (
    <div className="flex gap-8">
      <div className="max-w-2xl flex flex-col gap-8 ml-auto">
        {/* story */}
        <Suspense fallback={<StoryLoading />}>
          <StoryList />
        </Suspense>
        {/* post */}
        <Suspense fallback={<PostLoading />}>
          <PostList />
        </Suspense>
      </div>

      <div className="w-80">
        <p className="font-black text-lg mb-6 px-4">Contract</p>
        {/* contract */}
        <Suspense fallback={<ContractLoading />}>
          <ContractList />
        </Suspense>
      </div>
    </div>
  );
};

export default DemoPage;
