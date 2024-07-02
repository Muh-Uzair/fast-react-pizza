import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./UI/Home";
import Menu, { loader as menuLoader } from "./Pages/MenuPG/Menu";
import Cart from "./Pages/CartPG/Cart";
import CreateOrder, {
  action as createOrderAction,
} from "./Pages/OrderPG/CreateOrder";
import Order, { loader as orderLoader } from "./Pages/OrderPG/Order";
import AppLayout from "./UI/AppLayout";
import Error from "./UI/Error";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        errorElement: <Error />,
        loader: menuLoader,
      },
      { path: "/cart", element: <Cart /> },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: createOrderAction,
      },
      { path: "/order/:orderID", element: <Order />, loader: orderLoader },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
