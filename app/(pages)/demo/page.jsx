import { Suspense } from "react";
import {
  PostList,
  PostLoading,
  StoryList,
  StoryLoading,
  ContractList,
  ContractLoading,
  Aside,
} from "@/app/_components";

const DemoPage = () => {
  return (
    <div className="flex gap-8 justify-between">
      <Aside />
      <div className="max-w-3xl flex flex-col gap-8 p-8">
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
        {/* contract */}
        <Suspense fallback={<ContractLoading />}>
          <ContractList />
        </Suspense>
      </div>
    </div>
  );
};

export default DemoPage;
