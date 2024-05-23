import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <nav className="bg-white w-full shadow-md">
        <ul className="flex justify-center space-x-8 p-4">
          <li>
            <Link
              to="/"
              className="text-gray-700 hover:text-indigo-500 font-semibold"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/register"
              className="text-gray-700 hover:text-indigo-500 font-semibold"
            >
              Register
            </Link>
          </li>
          <li>
            <Link
              to="/personal-data"
              className="text-gray-700 hover:text-indigo-500 font-semibold"
            >
              Personal Data
            </Link>
          </li>
          <li>
            <Link
              to="/RegisterProduct"
              className="text-gray-700 hover:text-indigo-500 font-semibold"
            >
              Register Product
            </Link>
          </li>
          <li>
            <Link
              to="/inventary"
              className="text-gray-700 hover:text-indigo-500 font-semibold"
            >
              Estoque
            </Link>
          </li>
        </ul>
      </nav>
      <div className="flex-grow flex items-center justify-center">
        <h1 className="text-4xl font-bold text-gray-800">
          Welcome to My stock System 
        </h1>
      </div>
    </div>
  );
};

export default Home;
