import articles from "./articles.js";

function sortByNewest(firstArticle, secondArticle) {
  return new Date(secondArticle.date) - new Date(firstArticle.date);
}

export function getArticles() {
  return [...articles].sort(sortByNewest);
}

export function getArticleBySlug(slug) {
  return articles.find((article) => article.slug === slug) ?? null;
}

export function getPaginatedArticles(page = 1, limit = 6) {
  const allArticles = getArticles();
  const totalItems = allArticles.length;
  const totalPages = Math.max(Math.ceil(totalItems / limit), 1);
  const safePage = Math.min(Math.max(page, 1), totalPages);
  const start = (safePage - 1) * limit;
  const end = start + limit;

  return {
    items: allArticles.slice(start, end),
    pagination: {
      page: safePage,
      limit,
      totalItems,
      totalPages,
      hasPreviousPage: safePage > 1,
      hasNextPage: safePage < totalPages,
    },
  };
}
