import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Saylani Microfinance</h1>
        <div>
          <Link className="px-4 py-2" to="/">Home</Link>
          <Link className="px-4 py-2" to="/loan-application">Loan Application</Link>
          <Link className="px-4 py-2" to="/my-loans">My Loan</Link> {/* Add My Loan Link */}
          <Link className="px-4 py-2" to="/login">Login</Link>
          {/* <Link className="px-4 py-2" to="/signup">Sign Up</Link> */}
        </div>
      </div>
    </nav>
  );
};

export default Header;
