import React, { useState, useEffect } from 'react';
import {
  TextField,
  Button,
  Paper,
  Typography,
  Box,
  Stack,
} from '@mui/material';
import { Save, Edit } from '@mui/icons-material';

const BlogForm = ({ onSave, editingPost }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (editingPost) {
      setTitle(editingPost.title);
      setContent(editingPost.content);
    } else {
      setTitle('');
      setContent('');
    }
  }, [editingPost]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ title, content });
    setTitle('');
    setContent('');
  };

  return (
    <Paper
      elevation={6}
      sx={{
        p: 4,
        maxWidth: 600,
        mx: 'auto',
        mt: 5,
        backgroundColor: '#fdfdff',
        borderRadius: 4,
      }}
    >
      <Typography variant="h5" color="primary" gutterBottom>
        {editingPost ? 'Edit Blog Post' : 'Create a New Blog Post'}
      </Typography>

      <Box component="form" onSubmit={handleSubmit} noValidate autoComplete="off">
        <Stack spacing={3}>
          <TextField
            label="Title"
            variant="outlined"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            fullWidth
          />

          <TextField
            label="Content"
            variant="outlined"
            multiline
            rows={6}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            fullWidth
          />

          <Button
            type="submit"
            variant="contained"
            color={editingPost ? 'secondary' : 'primary'}
            startIcon={editingPost ? <Edit /> : <Save />}
            sx={{ py: 1.5 }}
          >
            {editingPost ? 'Update Post' : 'Create Post'}
          </Button>
        </Stack>
      </Box>
    </Paper>
  );
};

export default BlogForm;
