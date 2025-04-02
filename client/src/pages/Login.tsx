import { useState, FormEvent, ChangeEvent } from "react";
import Auth from '../utils/auth';
import { login } from "../api/authAPI";

const Login = () => {
  const [loginData, setLoginData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const result = await login(loginData);
      if (result.success && result.data) {
        Auth.login(result.data.token);
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[1000px] px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-neutral-500 shadow-md rounded-lg p-8 w-full max-w-md space-y-5"
      >
        <h1 className="text-2xl font-bold text-center text-white">Login</h1>

        <div>
          <label htmlFor="username" className="block text-sm font-medium text-white mb-1">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={loginData.username || ''}
            onChange={handleChange}
            className="w-full bg-white border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-rose-500"
            required
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-white mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={loginData.password || ''}
            onChange={handleChange}
            className="w-full bg-white border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-rose-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-neutral-300 text-black font-medium py-2 px-4 rounded-md hover:bg-black hover:text-white transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
