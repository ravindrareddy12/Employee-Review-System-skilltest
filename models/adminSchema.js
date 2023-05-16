const mongoose = require('mongoose');

// Schema for Admin
const adminSchema = new mongoose.Schema({
  // Inherit fields from the Employee schema
  employee: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Employee',
    required: true
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  performance: {
    type: String,
    required: true
  },
  reviews: {
    type: String,
    required: true
  },
  // Other admin-specific fields
  adminField: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;
