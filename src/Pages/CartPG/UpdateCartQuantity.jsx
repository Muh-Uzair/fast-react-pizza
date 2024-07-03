import { useDispatch, useSelector } from "react-redux";
import Button from "../../UI/Button";
import PropTypes from "prop-types";
import { decreaseQt, increaseQt } from "./cartSlice";

UpdateCartQuantity.propTypes = {
  id: PropTypes.number,
};

export default function UpdateCartQuantity({ id }) {
  const reduxDispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const itemQt = cart.find((pizza) => pizza.pizzaId === id).quantity;

  function buttonMinusClick() {
    reduxDispatch(decreaseQt(id));
  }
  function buttonPlusClick() {
    reduxDispatch(increaseQt(id));
  }
  return (
    <div className="flex gap-[10px]">
      <Button type="round" onClick={buttonMinusClick}>
        -
      </Button>
      {itemQt}
      <Button type="round" onClick={buttonPlusClick}>
        +
      </Button>
    </div>
  );
}
