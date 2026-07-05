import { Link } from "react-router-dom";
import logoHm from "../assets/icons/logo-hm.svg";

function Footer() {
  const footerLinks = [
    { to: "/", label: "Home" },
    { to: "/artigos", label: "Artigos" },
    { to: "/sobre", label: "Sobre" },
    { to: "/parcerias", label: "Parcerias" }
  ];

  return (
    <footer className="w-full border-t border-slate-800 bg-black">
      <div className="mx-auto w-full max-w-5xl p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link className="mb-4 flex items-center gap-3 sm:mb-0" to="/">
            <img className="h-7 w-7" src={logoHm} alt="" aria-hidden="true" />
            <span className="whitespace-nowrap text-2xl font-semibold text-white">
              Histórias do Mundo
            </span>
          </Link>

          <ul className="mb-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-medium text-slate-300 sm:mb-0">
            {footerLinks.map((item) => (
              <li key={item.to}>
                <Link className="transition-colors hover:text-amber-300 hover:underline" to={item.to}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <hr className="my-6 border-slate-800 sm:mx-auto lg:my-8" />

        <span className="block text-sm text-slate-400 sm:text-center">
          © 2026{" "}
          <Link className="font-medium text-slate-200 hover:text-amber-300 hover:underline" to="/">
            Histórias do Mundo
          </Link>
          . Todos os direitos reservados.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
