import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import { useState } from 'react';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import BuyerDashboard from './pages/BuyerDashboard';
import SellerDashboard from './pages/SellerDashboard';
import ProductsPage from './pages/ProductsPage';
import NotFoundPage from './pages/NotFoundPage';
import './App.css';


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState('buyer');

  return (
    <Router>
      <div className="App">
        {isAuthenticated && (
          <nav className="africa-nav">
            <Link to="/">Home</Link>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/products">Products</Link>
            <button onClick={() => setIsAuthenticated(false)}>Logout</button>
          </nav>
        )}

        <Routes>
          <Route path="/login" element={
            <LoginPage 
              onLogin={(role) => {
                setIsAuthenticated(true);
                setUserRole(role);
              }}
            />
          } />

          <Route path="/" element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <HomePage />
            </PrivateRoute>
          } />

          <Route path="/dashboard" element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              {userRole === 'buyer' ? <BuyerDashboard /> : <SellerDashboard />}
            </PrivateRoute>
          } />

          <Route path="/products" element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <ProductsPage />
            </PrivateRoute>
          } />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
  );
}

const PrivateRoute = ({ children, isAuthenticated }) => {
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default App;