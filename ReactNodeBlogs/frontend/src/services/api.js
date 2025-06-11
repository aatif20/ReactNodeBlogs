import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api/posts' });

export const fetchPosts = () => API.get('/');
export const createPost = (post) => API.post('/', post);
export const updatePost = (id, post) => API.put(`/${id}`, post);
export const deletePost = (id) => API.delete(`/${id}`);
