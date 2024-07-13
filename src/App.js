import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import CheckoutPage from './pages/Checkout';
import MyPage from './pages/MyPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MyPage />} />
          <Route path="/checkout" element={ <CheckoutPage/> } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;