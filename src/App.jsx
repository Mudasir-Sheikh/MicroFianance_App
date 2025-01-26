import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import LoanApplicationForm from './components/LoanApplicationForm';
import MyLoansPage from './components/MyLoansPage'; // My Loan page import
import Signup from './components/Signup';
import Login from './components/Login';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/loan-application" element={<LoanApplicationForm />} />
        <Route path="/my-loans" element={<MyLoansPage />} /> {/* Add route for My Loans */}
        <Route path="/login" element={<Login />} />
        {/* Add the route for signup if needed */}
      </Routes>
    </Router>
  );
};

export default App;
