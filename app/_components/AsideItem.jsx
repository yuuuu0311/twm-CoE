import Image from "next/image";

const AsideItem = () => {
  return (
    <li className="flex gap-4 items-center text-stone-800">
      <div className="w-10">
        <Image src="/oppay.png" alt="oppay" width={90} height={90}></Image>
      </div>
      <p className="font-bold text-xl flex-1">Market</p>
    </li>
  );
};

export default AsideItem;
