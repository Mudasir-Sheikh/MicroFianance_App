const mongoose = require('mongoose');

const loanSchema = new mongoose.Schema({
  category: { type: String, required: true },
  subcategory: { type: String, required: true },
  loanAmount: { 
    type: Number, 
    required: true,
    validate: {
      validator: function(value) {
        // Max loan limit validation for different categories
        if (this.category === 'Wedding Loans' && value > 500000) return false;
        if (['Home Construction Loans', 'Business Startup Loans'].includes(this.category) && value > 1000000) return false;
        // Education loans don't have a fixed max, but this can be customized as per the requirement
        return true;
      },
      message: 'Loan amount exceeds the maximum allowed for this category.',
    }
  },
  loanPeriod: { 
    type: Number, 
    required: true,
    default: 36,  // Default to 3 years
    validate: {
      validator: function(value) {
        // Loan period validation for different categories
        if (this.category === 'Wedding Loans' && value > 36) return false;
        if (['Home Construction Loans', 'Business Startup Loans'].includes(this.category) && value > 60) return false;
        if (this.category === 'Education Loans' && value > 48) return false;
        return true;
      },
      message: 'Loan period exceeds the maximum allowed for this category.'
    }
  },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },  // Reference to the user
});

const Loan = mongoose.model('Loan', loanSchema);

module.exports = Loan;
