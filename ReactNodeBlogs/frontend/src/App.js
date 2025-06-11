import React, { useEffect, useState } from 'react';
import { fetchPosts, createPost, updatePost, deletePost } from './services/api';
import BlogList from './components/BlogList';
import BlogForm from './components/BlogForm';

function App() {
  const [posts, setPosts] = useState([]);
  const [editingPost, setEditingPost] = useState(null);

  const loadPosts = async () => {
    const res = await fetchPosts();
    setPosts(res.data);
  };

  useEffect(() => {
    loadPosts();
  }, []);

  const handleSave = async (post) => {
    if (editingPost) {
      await updatePost(editingPost.id, post);
      setEditingPost(null);
    } else {
      await createPost(post);
    }
    loadPosts();
  };

  const handleDelete = async (id) => {
    await deletePost(id);
    loadPosts();
  };

  return (
    <div>
      <h1>Simple Blog</h1>
      <BlogForm onSave={handleSave} editingPost={editingPost} />
      <BlogList posts={posts} onEdit={setEditingPost} onDelete={handleDelete} />
    </div>
  );
}

export default App;
