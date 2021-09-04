const Header = () => {
  return (
    <div className="flex flex-row justify-between border-2">
      <div className="p-8">
        <img src="/logo192.png" className="w-8" />
      </div>
      <div>
        <ul className="flex flex-row justify-between">
          <li className="p-8 border-solid text-xl">
            <a href="#"> Home</a>
          </li>
          <li className="p-8 border-solid text-xl">
            <a href="#"> About</a>
          </li>
          <li className="p-8 border-solid text-xl">
            <a href="#"> Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
