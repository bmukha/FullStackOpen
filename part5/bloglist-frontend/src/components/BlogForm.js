import blogService from '../services/blogs';
import { useState } from 'react';

const BlogForm = ({ user, blogs, setBlogs }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [url, setUrl] = useState('');
  const hadleAddNewBlog = async (event) => {
    event.preventDefault();
    const newBlog = await blogService.addBlog(
      { title, author, url },
      user.token
    );
    setTitle('');
    setAuthor('');
    setUrl('');
    setBlogs([...blogs, newBlog]);
  };

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={hadleAddNewBlog}>
        <div>
          title:
          <input
            type='text'
            value={title}
            name='Title'
            onChange={({ target }) => setTitle(target.value)}
          />
        </div>
        <div>
          author:
          <input
            type='text'
            value={author}
            name='Password'
            onChange={({ target }) => setAuthor(target.value)}
          />
        </div>
        <div>
          url:
          <input
            type='text'
            value={url}
            name='Password'
            onChange={({ target }) => setUrl(target.value)}
          />
        </div>
        <button type='submit'>create</button>
      </form>
    </div>
  );
};

export default BlogForm;
