"use client";

const ContractLoading = () => {
  const data = Array(10).fill({ data: "test" });

  return (
    <div className="flex flex-col sticky top-[96px]">
      <p className="font-bold text-stone-800 text-lg mb-4 px-4">Contact</p>

      {data.map((item, index) => (
        <div className="px-4" key={index}>
          <div className="flex items-center gap-4 h-12">
            <div className="aspect-square h-8 w-auto bg-stone-200 rounded-full animate-pulse"></div>
            <p className="w-16 h-4 bg-stone-100 rounded-full animate-pulse"></p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContractLoading;
