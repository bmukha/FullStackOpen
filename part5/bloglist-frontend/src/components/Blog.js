import Togglable from './Tobblable';

const Blog = ({ blog }) => (
  <div className='blog'>
    <span>Title: {blog.title}</span>
    <Togglable onButtonLabel='view' offButtonLabel='hide'>
      <p>Author: {blog.author}</p>
      <p>URL: {blog.url}</p>
      <p>Likes: {blog.likes}</p>
      <p>Created by: {blog.user.username}</p>
    </Togglable>
  </div>
);

export default Blog;
