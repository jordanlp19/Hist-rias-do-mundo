const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

async function request(path, options = {}) {
  const response = await fetch(`${API_URL}${path}`, {
    headers: {
      "Content-Type": "application/json",
      ...options.headers
    },
    ...options
  });

  if (!response.ok) {
    throw new Error("Erro na requisição");
  }

  return response.json();
}

const api = {
  get: (path) => request(path),
  post: (path, body) => request(path, {
    method: "POST",
    body: JSON.stringify(body)
  })
};

export default api;
