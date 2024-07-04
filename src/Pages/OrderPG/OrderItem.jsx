import PropTypes from "prop-types";
import { formatCurrency } from "../../Utilities/helpers";

OrderItem.propTypes = {
  item: PropTypes.object,
  key_prop: PropTypes.number,
  ingredients: PropTypes.array,
  isLoadingIngredients: PropTypes.bool,
};

// isLoadingIngredients ,  ingredients,
function OrderItem({ item, key_prop, ingredients, isLoadingIngredients }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li className="py-3" key={key_prop}>
      <div className="flex items-center justify-between gap-4 text-sm">
        <p>
          <span className="font-bold">{quantity}&times;</span> {name}
        </p>
        <p className="font-bold">{formatCurrency(totalPrice)}</p>
      </div>
      <div>{isLoadingIngredients ? "Loading..." : ingredients.join(", ")}</div>
    </li>
  );
}

export default OrderItem;
