import { Link } from "react-router-dom";
import instagramLogo from "../assets/icons/instagram-logo.svg";
import articleLogo from "../assets/icons/article.svg";
import partnerLogo from "../assets/icons/Partner.svg";

const logoLinkClassName =
  "mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full transition duration-300 hover:-translate-y-1 hover:scale-110 hover:bg-amber-100 hover:shadow-md";

function Snippets() {
  return (
    <section className="mx-auto max-w-5xl px-4 pb-16 pt-12 mt-9 animate-fade-in timeline-view animate-range-[entry_0%_cover_30%]">
      <h2 className="text-center text-3xl font-bold leading-tight">Conheça nosso mundo.</h2>

      <div className="mt-10 flex flex-col items-center gap-10 md:flex-row md:items-start">
        <div className="px-4 text-center md:basis-1/3">
          <a
            href="https://www.instagram.com/historiasdomundobr/"
            target="_blank"
            rel="noreferrer"
            className={logoLinkClassName}
          >
            <img src={instagramLogo} className="h-10 w-10" alt="" />
          </a>
          <h3 className="font-bold leading-6">Instagram</h3>
          <p className="mx-auto mt-2 max-w-48 text-sm leading-6">
            Nosso canal principal. Stories alcançando milhões de pessoas mensalmente.
          </p>
        </div>

        <div className="px-4 text-center md:basis-1/3">
          <Link to="/artigos" className={logoLinkClassName}>
            <img src={articleLogo} className="h-10 w-10" alt="" />
          </Link>
          <h3 className="font-bold leading-6">Artigos</h3>
          <p className="mx-auto mt-2 max-w-48 text-sm leading-6">Artigos históricos completos.</p>
        </div>

        <div className="px-4 text-center md:basis-1/3">
          <Link to="/parcerias" className={logoLinkClassName}>
            <img src={partnerLogo} className="h-10 w-10" alt="" />
          </Link>
          <h3 className="font-bold leading-6">Parcerias</h3>
          <p className="mx-auto mt-2 max-w-48 text-sm leading-6">Seja nosso parceiro. Entre em contato.</p>
        </div>
      </div>
    </section>
  );
}

export default Snippets;
