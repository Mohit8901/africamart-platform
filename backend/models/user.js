// models/user.js
const userSchema = new mongoose.Schema({
  businessName: String,
  taxId: String,
  verified: { type: Boolean, default: false },
  // Add Africa-specific fields
  country: { type: String, enum: ['NG', 'KE', 'ZA', 'GH'] },
  paymentMethods: [String]
});