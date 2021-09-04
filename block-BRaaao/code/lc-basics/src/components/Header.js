const Header = () => {
  return (
    <div className="flex flex-row justify-between border-2">
      <div className="p-8">
        <img src="/logo192.png" className="w-8" alt="take" />
      </div>
      <div>
        <ul className="flex flex-row justify-between">
          <li className="p-8 border-solid text-xl">
            <a href="www.google.com"> Home</a>
          </li>
          <li className="p-8 border-solid text-xl">
            <a href="www.google.com"> About</a>
          </li>
          <li className="p-8 border-solid text-xl">
            <a href="www.google.com"> Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
