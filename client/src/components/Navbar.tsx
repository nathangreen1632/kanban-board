import { Link } from 'react-router-dom';
import { useUser } from '../hooks/useUser';

const Navbar = () => {
  const { user, isLoggedIn, logout } = useUser();

  return (
    <nav className="bg-neutral-500 text-neutral-100 shadow-md rounded-xl w-full max-w-4xl mx-auto mt-8 px-6 py-4">
      <div className="text-2xl font-bold text-gray-50 mb-3 text-center">
        <Link to="/">Krazy Kanban Board</Link>
      </div>
      <ul className="flex justify-center gap-6">
        {!isLoggedIn ? (
          <li>
            <Link
              to="/login"
              className="bg-neutral-300 text-black px-4 py-2 rounded-md text-sm font-medium hover:bg-black hover:text-white transition"
            >
              Login
            </Link>
          </li>
        ) : (
          <>
            <li className="flex items-center text-sm text-bold text-gray-50">
              <span>Welcome, {user?.username ?? 'User'}</span>
            </li>
            <li>
              <button
                type="button"
                onClick={logout}
                className="bg-neutral-300 text-black px-4 py-2 rounded-md text-sm font-medium hover:bg-black hover:text-white transition"
              >
                Logout
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
