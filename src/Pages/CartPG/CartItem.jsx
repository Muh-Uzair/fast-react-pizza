import DeleteButton from "../../UI/DeleteButton";
import { formatCurrency } from "../../Utilities/helpers";
import PropTypes from "prop-types";

CartItem.propTypes = {
  item: PropTypes.object,
  key_prop: PropTypes.number,
};

function CartItem({ item, key_prop }) {
  const { name, quantity, totalPrice } = item;

  return (
    <li
      key={key_prop}
      className="border-b-[1px] border-stone-200 sm:mb-[18px] sm:flex sm:items-center sm:justify-between"
    >
      <p className="font-semibold">
        {quantity}&times; {name}
      </p>
      <div className="mb-[10px] flex items-center justify-between sm:space-x-3">
        <p className="font-medium italic">{formatCurrency(totalPrice)}</p>
        <DeleteButton item={item} />
      </div>
    </li>
  );
}

export default CartItem;
