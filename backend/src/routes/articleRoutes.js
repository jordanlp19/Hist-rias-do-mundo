import express from "express";
import articles from "../../data/articles.js";

const router = express.Router();

router.get("/", (req, res) => {
  const page = Math.max(Number.parseInt(req.query.page, 10) || 1, 1);
  const limit = Math.min(
    Math.max(Number.parseInt(req.query.limit, 10) || 6, 1),
    20
  );
  const sortedArticles = [...articles].sort(
    (first, second) => new Date(second.date) - new Date(first.date)
  );
  const total = sortedArticles.length;
  const totalPages = Math.max(Math.ceil(total / limit), 1);
  const currentPage = Math.min(page, totalPages);
  const start = (currentPage - 1) * limit;
  const items = sortedArticles.slice(start, start + limit).map(
    ({ content, ...summary }) => summary
  );

  res.json({
    items,
    pagination: {
      page: currentPage,
      limit,
      total,
      totalPages,
      hasNextPage: currentPage < totalPages,
      hasPreviousPage: currentPage > 1,
    },
  });
});

router.get("/:slug", (req, res) => {
  const article = articles.find((item) => item.slug === req.params.slug);

  if (!article) {
    return res.status(404).json({
      message: "Artigo não encontrado",
    });
  }

  res.json(article);
});

export default router;
