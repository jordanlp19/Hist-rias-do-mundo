import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logoHm from "../assets/icons/logo-hm.svg";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/artigos", label: "Artigos" },
    { to: "/sobre", label: "Sobre" },
    { to: "/parcerias", label: "Parcerias" }
  ];

  const linkClassName = ({ isActive }) =>
    [
      "block rounded-md px-3 py-2 text-sm font-medium transition-colors md:p-0",
      isActive
        ? "bg-amber-500 text-white md:bg-transparent md:text-amber-600"
        : "text-slate-700 hover:bg-amber-100 hover:text-amber-700 md:hover:bg-transparent"
    ].join(" ");

  return (
    <header className="sticky top-0 z-20 w-full border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur">
      <nav className="mx-auto flex max-w-5xl flex-wrap items-center justify-between px-4 py-4">
        <Link
          className="flex items-center gap-3 text-xl font-bold text-slate-900 font-title"
          to="/"
          onClick={() => setIsMenuOpen(false)}
        >
          <img className="h-8 w-8" src={logoHm} alt="" aria-hidden="true" />
          <span className="whitespace-nowrap">Hist&oacute;rias do Mundo</span>
        </Link>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-slate-700 transition-colors hover:bg-amber-100 hover:text-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-400 md:hidden"
          aria-controls="main-navigation"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <span className="sr-only">Abrir menu principal</span>
          <svg
            className="h-6 w-6"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="2"
              d={isMenuOpen ? "M6 6l12 12M18 6 6 18" : "M5 7h14M5 12h14M5 17h14"}
            />
          </svg>
        </button>

        <div
          className={`${isMenuOpen ? "block" : "hidden"} w-full md:block md:w-auto`}
          id="main-navigation"
        >
          <ul className="mt-4 flex flex-col rounded-md border border-slate-200 bg-slate-50 p-4 md:mt-0 md:flex-row md:items-center md:gap-8 md:border-0 md:bg-transparent md:p-0">
            {navLinks.map((item) => (
              <li key={item.to}>
                <NavLink
                  className={linkClassName}
                  to={item.to}
                  end={item.to === "/"}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
