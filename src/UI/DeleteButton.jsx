import { useDispatch } from "react-redux";
import Button from "./Button";
import { deleteFromCart } from "../Pages/CartPG/cartSlice";
import PropTypes from "prop-types";

DeleteButton.propTypes = {
  item: PropTypes.object,
};

export default function DeleteButton({ item }) {
  const reduxDispatch = useDispatch();

  return (
    <Button
      type={"small"}
      onClick={() => reduxDispatch(deleteFromCart(item.pizzaId))}
    >
      Delete
    </Button>
  );
}
