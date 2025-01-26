import { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    console.log('Signup submitted:', formData);
    // Here, you'd typically send a POST request to your backend to create a new user
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h3 className="text-2xl font-semibold mb-6 text-center">Sign Up</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2">Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
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
            value={formData.password}
            onChange={handleChange}
            className="border px-4 py-2 w-full rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="border px-4 py-2 w-full rounded-md"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-green-500 text-white px-6 py-2 w-full rounded-md"
        >
          Sign Up
        </button>
      </form>
      <div className="mt-4 text-center">
        <p className="text-sm">
          Already have an account? <Link to="/login" className="text-blue-500">Login here</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
