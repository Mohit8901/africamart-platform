// src/features/products/ProductGrid.jsx
import { useSelector } from 'react-redux';
import CurrencyFormatter from '../../components/africa/CurrencyFormatter';

export default function ProductGrid() {
  const { products } = useSelector(state => state.products);
  const { country } = useSelector(state => state.auth.user);

  return (
    <div className="product-grid">
      {products.map(product => (
        <div key={product.id} className="product-card">
          <img 
            src={product.image} 
            alt={product.name}
            loading="lazy"
          />
          <h3>{product.name}</h3>
          <CurrencyFormatter 
            value={product.price}
            country={country}
          />
          <p>Min. Order: {product.minQuantity} {product.unit}</p>
        </div>
      ))}
    </div>
  );
}