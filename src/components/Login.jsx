import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login submitted:', credentials);
    // Here, you'd typically send a POST request to your backend to verify the login credentials
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h3 className="text-2xl font-semibold mb-6 text-center">Login</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2">Username:</label>
          <input
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleChange}
            className="border px-4 py-2 w-full rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Password:</label>
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            className="border px-4 py-2 w-full rounded-md"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-green-500 text-white px-6 py-2 w-full rounded-md"
        >
          Login
        </button>
      </form>
      <div className="mt-4 text-center">
        <p className="text-sm">
          Don't have an account? <Link to="/signup" className="text-blue-500">Sign up here</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
