import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen bg-gray-300 text-gray-900 flex flex-col">
      <header className="px-4 py-6 shadow-md bg-gray-600">
        <Navbar />
      </header>
      <main className="flex-1 w-full max-w-screen-xl mx-auto px-4 py-8">
        <Outlet />
      </main>
    </div>

  );
}

export default App;
