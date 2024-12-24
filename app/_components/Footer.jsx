const Footer = () => {
  return (
    <div className="w-full h-32 p-8 bg-stone-100">
      <div className="flex flex-col gap-6">
        <div className="flex items-end justify-between">
          <div className="rounded-md w-24 h-8 bg-stone-200"></div>
          <div className="flex gap-6 text-stone-800 text-sm">
            <p>常見QA</p>
            <p>台灣大哥大官網</p>
            <p>隱私權保護政策</p>
          </div>
        </div>
        <div>
          <p className="text-xs text-stone-400">
            台灣大哥大版權所有© 2024 TaiwanMobile All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
