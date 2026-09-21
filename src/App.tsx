import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import CustomerLayout from './layouts/CustomerLayout';
import ERPLayout from './layouts/ERPLayout';
import CustomerHome from './pages/customer/Home';
import CartCheckout from './pages/customer/CartCheckout';
import ERPHome from './pages/erp/Home';
import LiveOrders from './pages/erp/LiveOrders';
import MenuInventory from './pages/erp/MenuInventory';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CustomerLayout />}>
          <Route index element={<CustomerHome />} />
          <Route path="cart" element={<CartCheckout />} />
        </Route>
        <Route path="/erp" element={<ERPLayout />}>
          <Route index element={<ERPHome />} />
          <Route path="orders" element={<LiveOrders />} />
          <Route path="menu" element={<MenuInventory />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
