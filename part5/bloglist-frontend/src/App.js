import { useState, useEffect } from 'react';
import Blog from './components/Blog';
import BlogForm from './components/BlogForm';
import LoginForm from './components/LoginForm';
import blogService from './services/blogs';

const App = () => {
  const [blogs, setBlogs] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    blogService.getAll().then((blogs) => setBlogs(blogs));
  }, []);

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser');
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
      blogService.setToken(user.token);
    }
  }, []);

  const hadleLogout = (event) => {
    event.preventDefault();
    setUser(null);
    window.localStorage.removeItem('loggedBlogappUser');
  };

  return user === null ? (
    <LoginForm setUser={setUser} />
  ) : (
    <div>
      <h2>blogs</h2>
      <span>{user.username} is logged in</span>
      <button onClick={hadleLogout}>logout</button>
      {blogs.map((blog) => (
        <Blog key={blog.id} blog={blog} />
      ))}
      <BlogForm user={user} blogs={blogs} setBlogs={setBlogs} />
    </div>
  );
};

export default App;
