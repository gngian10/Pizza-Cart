import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { decreaseItemQuantityaddItem, increaseItemQuantity } from "./cartSlice";

function CartUpdateItemQuantity({ pizzaId, quantity }) {
    const dispatch = useDispatch();

    return (
        <div className="flex items-center gap-2 md:gap-3">
            <Button
                type={"round"}
                onClick={() => dispatch(decreaseItemQuantityaddItem(pizzaId))}
            >
                -
            </Button>
            <span className="text-sm font-medium ">{quantity}</span>
            <Button
                type={"round"}
                onClick={() => dispatch(increaseItemQuantity(pizzaId))}
            >
                +
            </Button>
        </div>
    );
}

export default CartUpdateItemQuantity;
