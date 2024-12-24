const Header = () => {
  return (
    <div className="w-full h-16 shadow flex items-center p-4 bg-white gap-6">
      <div className="rounded-md w-24 h-8 bg-stone-200"></div>

      <ul className="flex gap-6">
        <li>NavLink</li>
        <li>NavLink</li>
        <li>NavLink</li>
      </ul>

      <div className="px-4 py-1 ml-auto">Login</div>
    </div>
  );
};

export default Header;
