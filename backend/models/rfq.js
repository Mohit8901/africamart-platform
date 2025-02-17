// models/rfq.js
const rfqSchema = new mongoose.Schema({
    products: [{
      productId: mongoose.Schema.Types.ObjectId,
      quantity: Number
    }],
    buyer: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    status: { type: String, enum: ['PENDING', 'QUOTED'], default: 'PENDING' },
    deadline: Date
  });