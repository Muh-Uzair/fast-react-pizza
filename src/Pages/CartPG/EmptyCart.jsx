import LinkButton from "../../UI/LinkButton";

function EmptyCart() {
  return (
    <div>
      {/* <Link to="/menu">&larr; Back to menu</Link> */}
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <p>Your cart is still empty. Start adding some pizzas :)</p>
    </div>
  );
}

export default EmptyCart;
