const express = require('express');
const cors = require('cors');
const app = express();
const postsRouter = require('./routes/posts');

app.use(cors());
app.use(express.json());

app.use('/api/posts', postsRouter);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
