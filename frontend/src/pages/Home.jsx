import heroBackground from "../assets/images/hero_background_otimizado.webp";
import Snippets from "../components/Snippets.jsx";
import Thebest from "../components/Thebest.jsx";

function Home() {
  return (
    <>
      <section className="relative min-h-[70vh] overflow-hidden">
        <img
          className="absolute inset-0 h-full w-full object-cover contrast-125 saturate-75"
          src={heroBackground}
          alt=""
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black/20" aria-hidden="true" />
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to bottom, rgba(255,255,255,0.18) 0px, rgba(255,255,255,0.18) 1px, transparent 1px, transparent 4px)",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 shadow-[inset_0_0_120px_rgba(0,0,0,0.75)]"
          aria-hidden="true"
        />
      </section>

      <Thebest />
      <Snippets />
    </>
  );
}

export default Home;
