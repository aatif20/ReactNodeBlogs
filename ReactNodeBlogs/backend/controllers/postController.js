let posts = [];
let idCounter = 1;

exports.getPosts = (req, res) => res.json(posts);

exports.createPost = (req, res) => {
  const post = { id: idCounter++, ...req.body };
  posts.push(post);
  res.status(201).json(post);
};

exports.updatePost = (req, res) => {
  const { id } = req.params;
  const index = posts.findIndex(p => p.id == id);
  if (index > -1) {
    posts[index] = { ...posts[index], ...req.body };
    res.json(posts[index]);
  } else {
    res.status(404).json({ error: 'Post not found' });
  }
};

exports.deletePost = (req, res) => {
  const { id } = req.params;
  posts = posts.filter(p => p.id != id);
  res.status(204).end();
};
