import Togglable from './Tobblable';
import blogService from '../services/blogs';

const Blog = ({ blog, blogs, setBlogs }) => {
  const { title, author, url, likes, id } = blog;
  const { username, _id, token } = blog.user;

  const handleLikeClick = async () => {
    const newBlog = await blogService.updateBlog(id, {
      title,
      author,
      url,
      likes: likes + 1,
      user: _id,
    }, token);
    const updatedBlogsArray = blogs.map(blog => blog.id !== newBlog.id ? blog : newBlog)
    setBlogs(updatedBlogsArray)
  };
  return (
    <div className='blog'>
      <span>Title: {title}</span>
      <Togglable onButtonLabel='view' offButtonLabel='hide'>
        <p>Author: {author}</p>
        <p>URL: {url}</p>
        <div>
          <span>Likes: {likes} </span>
          <button onClick={handleLikeClick}>like</button>
        </div>
        <p>Created by: {username}</p>
      </Togglable>
    </div>
  );
};
export default Blog;
