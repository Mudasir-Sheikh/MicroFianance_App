import { useState } from 'react';

const LoanRequestForm = () => {
  const [formData, setFormData] = useState({
    userId: '',
    loanAmount: 0,
    loanDate: '',
    status: 'Pending',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    // Here, you'd typically send this data to your backend API
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h3 className="text-2xl font-semibold mb-4">Loan Request Form</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2">User ID:</label>
          <input
            type="text"
            name="userId"
            value={formData.userId}
            onChange={handleChange}
            className="border px-4 py-2 w-full rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Loan Amount:</label>
          <input
            type="number"
            name="loanAmount"
            value={formData.loanAmount}
            onChange={handleChange}
            className="border px-4 py-2 w-full rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Loan Date:</label>
          <input
            type="date"
            name="loanDate"
            value={formData.loanDate}
            onChange={handleChange}
            className="border px-4 py-2 w-full rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Status:</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="border px-4 py-2 w-full rounded-md"
          >
            <option value="Pending">Pending</option>
            <option value="Approved">Approved</option>
            <option value="Rejected">Rejected</option>
          </select>
        </div>
        <button type="submit" className="bg-green-500 text-white px-6 py-2 rounded-md">
          Submit Request
        </button>
      </form>
    </div>
  );
};

export default LoanRequestForm;
