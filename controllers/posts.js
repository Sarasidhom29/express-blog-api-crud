import posts from "../data/posts.js";

function index(req, res) {
  res.status(200).json(posts);
}

function show(req, res) {
  const id = Number(req.params.id);

  if (Number.isNaN(id) || id <= 0) {
    return res.status(400).json({ error: "Id non valido" });
  }

  const post = posts.find((item) => item.id === id);

  if (!post) {
    return res.status(404).json({ error: "Post non trovato" });
  }

  res.status(200).json(post);
}

function destroy(req, res) {
  const id = Number(req.params.id);

  if (Number.isNaN(id) || id <= 0) {
    return res.status(400).json({ error: "Id non valido" });
  }

  const indexPost = posts.findIndex((item) => item.id === id);

  if (indexPost === -1) {
    return res.status(404).json({ error: "Post non trovato" });
  }

  posts.splice(indexPost, 1);

  console.log("Menu aggiornato dopo la rimozione:", posts);

  res.status(204).send();
}

export { index, show, destroy };