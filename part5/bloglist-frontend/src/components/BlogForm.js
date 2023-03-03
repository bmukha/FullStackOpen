import blogService from '../services/blogs';
import { useState } from 'react';
import Notification from './Notification';

const BlogForm = ({ user, blogs, setBlogs, blogFormRef }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [url, setUrl] = useState('');
  const [message, setMessage] = useState(null);
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
    setMessage({
      text: `a new blog ${title} by ${author} is added`,
      type: 'info',
    });
    blogFormRef.current.toggleVisibility();
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
      {message ? (
        <Notification message={message} setMessage={setMessage} />
      ) : null}
    </div>
  );
};

export default BlogForm;
