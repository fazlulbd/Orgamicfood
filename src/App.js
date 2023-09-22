import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements} from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Checkout from "./pages/Checkout";
import Contact from "./pages/Contact";


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
         <Route path="/" element={<Layout/>}>
         <Route index element={<Home />} />
         <Route path="/about" element={<About />} />
         <Route path="/shop" element={<Shop />} />
         <Route path="/contact" element={<Contact/>} />
         <Route path="/cart" element={<Cart />} />
         <Route path="/checkout" element={<Checkout />} />
         <Route path="/product/:pid" element={<ProductDetails />} />
         <Route path="/registration" element={<Registration />} />
         <Route path="/login" element={<Login />} />
         </Route>
      </Route>
    )
  )
  return (
    <RouterProvider router={router} />
  );
}

export default App;
