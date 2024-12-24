"use client";

const StoryLoading = () => {
  const data = Array(10).fill({ data: "test" });

  return (
    <div className="flex gap-4 overflow-auto">
      {data.map((item, index) => (
        <div
          key={index}
          className="min-w-32 min-h-[278px] bg-stone-200 animate-pulse h-auto overflow-hidden rounded-md"
        ></div>
      ))}
    </div>
  );
};

export default StoryLoading;
