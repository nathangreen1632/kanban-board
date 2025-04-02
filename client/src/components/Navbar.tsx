import { Link } from 'react-router-dom';
import { useUser } from '../hooks/useUser';


const Navbar = () => {
  const { user, isLoggedIn, logout } = useUser();

  return (
    <div className='nav'>
      <div className='nav-title'>
        <Link to='/'>Krazy Kanban Board</Link>
      </div>
      <ul>
        {!isLoggedIn ? (
          <li className='nav-item'>
            <Link to='/login' className='login-button'>Login</Link>
          </li>
        ) : (
          <>
            <li className='nav-item'>
              <span>Welcome, {user?.username ?? 'User'}</span>
            </li>
            <li className='nav-item'>
              <button type='button' onClick={logout}>Logout</button>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
