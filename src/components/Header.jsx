import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white py-4 md:py-6 px-4">
      <section className="flex items-center justify-between mx-auto max-w-300">
        <span className="text-blue-500 font-bold">PhoneSnake</span>
        <nav>
          <ul className="flex items-center justify-center gap-6">
            <li>
              <Link to={"/"} href="">Home</Link>
            </li>
            <li>
              <Link to={"/about"} href="">About</Link>
            </li>
            <li>
              <Link to={"/contact"} href="">Contact</Link>
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
