import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCartQuantity, getTotalPrice } from "./cartSlice";
import { formatCurrency } from "../../Utilities/helpers";

function CartOverview() {
  const totalCartQuantity = useSelector(getCartQuantity);
  const totalPrice = useSelector(getTotalPrice);
  // console.log(totalCartQuantity);

  return (
    <div className="flex items-center justify-between bg-stone-800 p-[20px] text-stone-200 md:text-[23px]">
      <p className="space-x-[10px]">
        <span>{totalCartQuantity} pizzas</span>
        <span>{formatCurrency(totalPrice)}</span>
      </p>
      <Link to={"/cart"}>Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
