import PropTypes from "prop-types";
import Button from "../../UI/Button";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../CartPG/cartSlice";
import DeleteButton from "../../UI/DeleteButton";
import UpdateCartQuantity from "../CartPG/UpdateCartQuantity";

MyMenuItem.propTypes = {
  val: PropTypes.object,
  i: PropTypes.number,
};

export default function MyMenuItem({ val, i }) {
  const { id, name, unitPrice } = val;
  const reduxDispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  // if (cart[id]?.quantity > 0) {
  //   console.log(cart[id]);
  // }

  function handleButtonAddCart() {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };
    reduxDispatch(addItem(newItem));
  }

  function checkExistenceInCart() {
    let flag = false;
    cart.forEach((cartItem) => {
      if (cartItem.pizzaId === val.id) flag = true;
    });

    return flag;
  }

  return (
    <li key={i} className="flex gap-[10px] py-[8px]">
      <div className="h-[80px] w-[80px]">
        <img
          src={val.imageUrl}
          className={val.soldOut ? `opacity-70 grayscale` : ``}
        />
      </div>
      <div className="flex-grow text-[15px]">
        <span className="font-bold">{val.name}</span>
        <ul className="mb-[4px] flex text-[14px]">
          {val.ingredients.map((ingredientsItem, i) => (
            <li key={i}>
              <span className="capitalize italic">
                {i === val.ingredients.length - 1
                  ? `${ingredientsItem} `
                  : `${ingredientsItem},`}
              </span>
            </li>
          ))}
        </ul>
        <div className="flex justify-between font-medium">
          {val.soldOut ? (
            <span className="mt-[7 px] text-stone-500">Sold out</span>
          ) : (
            <span className="mt-[5px]">${val.unitPrice.toFixed(2)} </span>
          )}

          {!val.soldOut &&
            (checkExistenceInCart() ? (
              <div className="flex gap-4">
                <UpdateCartQuantity id={id} />
                <DeleteButton item={cart.find((item) => item.pizzaId === id)} />
              </div>
            ) : (
              <Button onClick={() => handleButtonAddCart()} type="small">
                Add to cart
              </Button>
            ))}
        </div>
      </div>
    </li>
  );
}
