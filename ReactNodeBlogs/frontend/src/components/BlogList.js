import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Grid,
} from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';

const BlogList = ({ posts, onEdit, onDelete }) => {
  return (
    <Grid container spacing={3} sx={{ px: 3, mt: 3 }}>
      {posts.map((post) => (
        <Grid item xs={12} sm={6} md={4} key={post.id}>
          <Card elevation={4} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant="h6" color="primary" gutterBottom>
                {post.title}
              </Typography>
              <Typography variant="body2">{post.content}</Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: 'flex-end', px: 2, pb: 2 }}>
              <Button
                size="small"
                variant="outlined"
                startIcon={<Edit />}
                onClick={() => onEdit(post)}
              >
                Edit
              </Button>
              <Button
                size="small"
                variant="outlined"
                color="error"
                startIcon={<Delete />}
                onClick={() => onDelete(post.id)}
              >
                Delete
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default BlogList;
