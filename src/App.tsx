import { useState } from 'react';
import './index.css';
import './output.css';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ username, password, keepLoggedIn });
  };

  return (
    <>
      <div className='bg-slate-800 py-4 px-2 text-end'>
        <h2 className='font-medium text-white'>Inicio de sesión</h2>
      </div>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white shadow-lg rounded-lg p-8 w-96">
          <h1 className='text-2xl font-semibold text-center mb-4'>Inicio de sesión</h1>
          <p className='text-gray-600 text-center mb-6'>Ingresa tus datos</p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username:</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                required
              />
            </div>
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                id="keepLoggedIn"
                checked={keepLoggedIn}
                onChange={() => setKeepLoggedIn(!keepLoggedIn)}
                className="mr-2"
              />
              <label className="text-sm text-gray-700" htmlFor="keepLoggedIn">Keep me logged in</label>
            </div>
            <div className="mb-4">
              <p className="text-center">
                <a href="#" className="text-blue-500 hover:underline">Forgot your password?</a>
              </p>
            </div>
            <button 
              type="submit" 
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;