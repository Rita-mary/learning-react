const Header = () => {
  return (
    <header className="bg-white py-4 md:py-6 px-4">
      <section className="flex items-center justify-between mx-auto max-w-300">
        <span className="text-blue-500 font-bold">PhoneSnake</span>
        <nav>
          <ul className="flex items-center justify-center gap-6">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Comtact</a>
            </li>
          </ul>
        </nav>
        <div>
          <button className="bg-blue-500 rounded-full py-2 px-6 text-white">Login</button>
        </div>
      </section>
    </header>
  );
};

export default Header;
