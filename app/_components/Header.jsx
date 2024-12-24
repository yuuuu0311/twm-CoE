import Image from "next/image";

const Header = () => {
  return (
    <div className="w-full h-16 shadow flex items-center p-4 bg-white gap-6 sticky top-0 z-[999]">
      <div>
        <Image src="/logo_dcb.svg" alt="oppay" width={172} height={23}></Image>
      </div>
      <div className="px-4 py-1 ml-auto rounded-full bg-orange-500 text-white font-bold">
        Login
      </div>
    </div>
  );
};

export default Header;
