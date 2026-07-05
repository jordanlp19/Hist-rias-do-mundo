import quotesIcon from "../assets/icons/quotes.svg";

function Thebest() {
  return (
    <section className="mt-[84px] px-4 pb-12 pt-12 animate-fade-in timeline-view animate-range-[entry_0%_cover_30%]">
      <div className="mx-auto flex max-w-5xl justify-center text-center">
        <div className="relative inline-block max-w-3xl px-5 pt-4">
          <img
            src={quotesIcon}
            className="absolute left-0 top-0 h-4 w-4 opacity-35 sm:h-5 sm:w-5"
            alt=""
            aria-hidden="true"
          />
          <h2 className="text-4xl font-bold leading-tight text-slate-950 sm:text-5xl lg:text-6xl">
            O maior do segmento na América Latina
          </h2>
        </div>
      </div>
    </section>
  );
}

export default Thebest;
