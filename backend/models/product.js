// models/product.js
const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    category: { type: String, enum: ['Agriculture', 'Textiles', 'Minerals'] },
    pricePerUnit: Number,
    minOrderQuantity: Number,
    seller: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    // Africa-specific fields
    originCountry: String,
    certifications: [String]
  });