import { Link, useSearchParams } from "react-router-dom";
import { getPaginatedArticles } from "../data/articleRepository.js";

const ARTICLES_PER_PAGE = 6;

function getVisiblePages(currentPage, totalPages) {
  const pages = new Set([1, totalPages]);
  const start = Math.max(currentPage - 1, 1);
  const end = Math.min(currentPage + 1, totalPages);

  for (let page = start; page <= end; page += 1) {
    pages.add(page);
  }

  return [...pages].sort((first, second) => first - second);
}

function Artigos() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = Math.max(
    Number.parseInt(searchParams.get("page"), 10) || 1,
    1
  );
  const { items: articles, pagination } = getPaginatedArticles(
    currentPage,
    ARTICLES_PER_PAGE
  );

  function goToPage(page) {
    setSearchParams(page === 1 ? {} : { page: String(page) });
  }

  return (
    <section>
      <div className="mb-6">
        <h2 className="text-3xl font-bold">Artigos</h2>
        <p className="mt-2 text-slate-600">
          Conteudos recentes publicados no site.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {articles.map((article) => (
          <article key={article.id} className="rounded-lg bg-white p-5 shadow">
            <p className="mb-2 text-sm font-semibold text-blue-600">
              {article.category}
            </p>
            <h3 className="text-xl font-bold">{article.title}</h3>
            <p className="mt-2 text-slate-600">{article.description}</p>
            <div className="mt-4 flex items-center justify-between gap-4">
              <span className="text-sm text-slate-500">{article.date}</span>
              <Link
                className="font-semibold text-blue-600 hover:text-blue-800"
                to={`/artigos/${article.slug}`}
              >
                Ler artigo
              </Link>
            </div>
          </article>
        ))}
      </div>

      {pagination && pagination.totalPages > 1 && (
        <nav
          aria-label="Paginacao de artigos"
          className="mt-8 flex flex-wrap items-center justify-center gap-2"
        >
          <button
            className="rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 disabled:cursor-not-allowed disabled:opacity-50"
            disabled={!pagination.hasPreviousPage}
            onClick={() => goToPage(pagination.page - 1)}
            type="button"
          >
            Anterior
          </button>

          {getVisiblePages(pagination.page, pagination.totalPages).map(
            (page, index, visiblePages) => {
              const isCurrent = page === pagination.page;
              const previousPage = visiblePages[index - 1];
              const hasGap = previousPage && page - previousPage > 1;

              return (
                <div className="flex items-center gap-2" key={page}>
                  {hasGap && (
                    <span className="px-1 text-sm font-semibold text-slate-500">
                      ...
                    </span>
                  )}
                  <button
                    aria-current={isCurrent ? "page" : undefined}
                    className={`h-10 w-10 rounded-md border text-sm font-semibold ${
                      isCurrent
                        ? "border-blue-600 bg-blue-600 text-white"
                        : "border-slate-300 bg-white text-slate-700"
                    }`}
                    onClick={() => goToPage(page)}
                    type="button"
                  >
                    {page}
                  </button>
                </div>
              );
            }
          )}

          <button
            className="rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 disabled:cursor-not-allowed disabled:opacity-50"
            disabled={!pagination.hasNextPage}
            onClick={() => goToPage(pagination.page + 1)}
            type="button"
          >
            Proxima
          </button>
        </nav>
      )}
    </section>
  );
}

export default Artigos;
