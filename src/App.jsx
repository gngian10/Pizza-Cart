import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Start from "./ui/Start";
import ErrPage from "./ui/ErrPage";
import Menu, { loader as menuLoader } from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import CreateOrder, {
    action as createOrderAction,
} from "./features/order/CreateOrder";
import Order, { loader as orderLoader } from "./features/order/Order";
import AppLayout from "./ui/AppLayout";
import { action as actionUpdateOrder } from "./features/order/UpdateOrder";

const router = createBrowserRouter([
    {
        element: <AppLayout />,
        errorElement: <ErrPage />,

        children: [
            {
                path: "/",
                element: <Start />,
            },
            {
                path: "/menu",
                element: <Menu />,
                loader: menuLoader,
                errorElement: <ErrPage />,
            },
            { path: "/cart", element: <Cart /> },
            {
                path: "/order/new",
                element: <CreateOrder />,
                action: createOrderAction,
            },
            {
                path: "/order/:orderId",
                element: <Order />,
                loader: orderLoader,
                errorElement: <ErrPage />,
                action: actionUpdateOrder,
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
