// import { Link } from "react-router-dom";
import LinkButton from "../../UI/LinkButton";
import Button from "../../UI/Button";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "./cartSlice";
import { clearCart } from "./cartSlice";
import EmptyCart from "./EmptyCart";

function Cart() {
  const cart = useSelector(getCart);
  const userName = useSelector((state) => state.user.userName);
  const reduxDispatch = useDispatch();

  if (cart.length === 0) return <EmptyCart />;

  return (
    <div className="p-[10px]">
      <LinkButton to={"/menu"}>&larr; Back to menu</LinkButton>

      <h2 className="mt-[20px] text-[24px] font-bold">Your cart, {userName}</h2>
      <ul className="mt-[20px]">
        {cart.map((val, i) => (
          <CartItem item={val} key={i} />
        ))}
      </ul>

      <div className="mt-[30px] flex space-x-[10px]">
        <Button to="/order/new">Order pizzas</Button>

        <Button type={"grayed out"} onClick={() => reduxDispatch(clearCart())}>
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
