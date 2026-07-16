import { Link, useParams } from "react-router-dom";
import { getArticleBySlug } from "../data/articleRepository.js";

function isSectionTitle(block) {
  return block.length <= 90 && !/\.$/.test(block);
}

function parseArticleContent(content = "") {
  const blocks = content
    .split(/\n\s*\n/)
    .map((block) => block.trim())
    .filter(Boolean);
  const sourcesIndex = blocks.findIndex((block) =>
    block.toLowerCase().startsWith("fontes")
  );
  const bodyBlocks =
    sourcesIndex >= 0 ? blocks.slice(0, sourcesIndex) : blocks;
  const sourceBlocks = sourcesIndex >= 0 ? blocks.slice(sourcesIndex) : [];
  const sources = sourceBlocks
    .join("\n")
    .replace(/^fontes:\s*/i, "")
    .split("\n")
    .map((source) => source.trim())
    .filter(Boolean);

  return {
    bodyBlocks,
    sources,
  };
}

function Artigo() {
  const { slug } = useParams();
  const article = getArticleBySlug(slug);

  if (!article) {
    return (
      <section className="rounded-lg bg-white p-6 shadow">
        <h2 className="mb-2 text-2xl font-bold">Artigo nao encontrado</h2>
        <p className="mb-4 text-slate-600">
          O conteudo solicitado nao existe ou nao pode ser carregado.
        </p>
        <Link className="font-semibold text-blue-600" to="/artigos">
          Voltar para artigos
        </Link>
      </section>
    );
  }

  const { bodyBlocks, sources } = parseArticleContent(article.content);

  return (
    <article className="rounded-lg bg-white p-6 shadow">
      <Link className="mb-6 inline-block text-sm font-semibold text-blue-600" to="/artigos">
        Voltar para artigos
      </Link>

      <p className="mb-2 text-sm font-semibold text-blue-600">
        {article.category}
      </p>
      <h2 className="text-3xl font-bold">{article.title}</h2>
      <p className="mt-2 text-slate-500">
        {article.author ? `${article.author} - ` : ""}
        {article.date}
      </p>

      {article.image && (
        <img
          alt=""
          className="mt-6 aspect-video w-full rounded-lg object-cover"
          src={article.image}
        />
      )}

      {article.description && (
        <p className="mt-6 border-l-4 border-blue-600 bg-blue-50 px-5 py-4 text-lg leading-8 text-slate-700">
          {article.description}
        </p>
      )}

      <div className="mt-8 space-y-5">
        {bodyBlocks.map((block, index) =>
          isSectionTitle(block) ? (
            <h3
              className="pt-3 text-2xl font-bold leading-tight text-slate-900"
              key={`${block}-${index}`}
            >
              {block}
            </h3>
          ) : (
            <p
              className="text-lg leading-8 text-slate-700"
              key={`${block}-${index}`}
            >
              {block}
            </p>
          )
        )}
      </div>

      {sources.length > 0 && (
        <section className="mt-10 border-t border-slate-200 pt-6">
          <h3 className="text-xl font-bold text-slate-900">Fontes</h3>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-600">
            {sources.map((source) => (
              <li key={source}>{source}</li>
            ))}
          </ul>
        </section>
      )}
    </article>
  );
}

export default Artigo;
