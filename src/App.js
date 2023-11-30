import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import AddProductPage from './pages/AddProductPage';
import ProductListPage from './pages/ProductListPage';

const App = () => {
  return (
    <AppProvider>
      <Router>
        <div className="container">
          <div className="content">
            <nav>
              <ul>
                <li>
                  <Link to="/add">Add Product</Link>
                </li>
                <li>
                  <Link to="/browse">Products</Link>
                </li>
              </ul>
            </nav>
            <hr />
            <Routes>
              <Route path="/add" element={<AddProductPage />} />
              <Route path="/browse" element={<ProductListPage />} />
            </Routes>
          </div>
        </div>
      </Router>
    </AppProvider>
  );
};

export default App;
