import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Products from './pages/Products';
import Categories from './pages/Categories';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <header className="header">
          <h1>📦 Product Management System</h1>
          <nav style={{ display: 'flex', gap: '16px' }}>
            <Link to="/" className="btn btn-primary">Products</Link>
            <Link to="/categories" className="btn btn-secondary">Categories</Link>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
