export function getUsers(req, res) {
  res.json([
    { id: 1, name: "Yuriy" },
    { id: 2, name: "Angela" }
  ]);
}
