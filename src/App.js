import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements} from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Home from "./pages/Home";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
         <Route index element={<Home />} />
      </Route>
    )
  )
  return (
    <RouterProvider router={router} />
  );
}

export default App;
