import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import { deleteItem } from "./cartSlice";

function CartDeleteItem({ pizzaId }) {
    const dispatch = useDispatch();

    return (
        <Button type="small" onClick={() => dispatch(deleteItem(pizzaId))}>
            Delete
        </Button>
    );
}

export default CartDeleteItem;
