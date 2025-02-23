import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { clearCart, getTCartPrice, getTCartQuantity } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";
import { useEffect } from "react";

function CartOverview() {
    const tCartQuantity = useSelector(getTCartQuantity);
    const tCartPrice = useSelector(getTCartPrice);

    const location = useLocation();
    const isInCartPage = location.pathname === "/cart";
    const dispatch = useDispatch();

    useEffect(() => {
        if (
            location.pathname.startsWith("/order") &&
            !location.pathname.endsWith("/new")
        ) {
            dispatch(clearCart());
        }
    }, [location]);

    if (!tCartQuantity) return null;

    return (
        <div className="flex items-center justify-between bg-stone-800 px-4 py-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base">
            <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
                <span>{tCartQuantity} pizzas</span>
                <span>{formatCurrency(tCartPrice)}</span>
            </p>

            {!isInCartPage && <Link to="/cart">Open cart &rarr;</Link>}
        </div>
    );
}

export default CartOverview;
