import { AsideItem } from "@/app/_components/";

const Aside = () => {
  return (
    <div className="w-96 border-r-[0.25px] border-r-stone-200 text-stone-800 bg-white p-8">
      <div className="sticky top-[96px]">
        <p className="font-bold text-2xl mb-6 px-4">Service</p>

        <ul className="flex flex-col gap-4">
          <AsideItem />
          <AsideItem />
          <AsideItem />
          <AsideItem />
          <AsideItem />
        </ul>
      </div>
    </div>
  );
};

export default Aside;
