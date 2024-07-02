// import { useState } from "react";

import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from "../../Services/apiRestaurant";
import Button from "../../UI/Button";
import { useSelector } from "react-redux";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetable",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function CreateOrder() {
  // const [withPriority, setWithPriority] = useState(false);
  const cart = fakeCart;
  console.log(cart);

  const navigation = useNavigation();
  const formErrors = useActionData();
  const userName = useSelector((state) => state.user.userName);

  return (
    <div className="mx-[10px]">
      <h2 className="mb-[20px] text-[25px] font-semibold">
        Ready to order? Lets go!
      </h2>

      <Form method="POST">
        <div className="flex flex-col gap-[3px] sm:mb-3 sm:flex-row">
          <label className="sm:basis-36">First Name</label>
          <input
            type="text"
            name="customer"
            required
            className="input sm:grow"
            defaultValue={userName}
          />
        </div>

        <div className="flex flex-col gap-[3px] sm:mb-3 sm:flex-row">
          <label className="sm:basis-36">Phone number</label>
          <div className="grow">
            <input type="tel" name="phone" required className="input w-full" />
            {formErrors?.phone && (
              <p className="mt-2 rounded-full bg-red-200 pl-3 font-semibold text-red-700">
                {formErrors.phone}
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-[3px] sm:mb-3 sm:flex-row">
          <label className="sm:basis-36">Address</label>
          <div className="grow">
            <input
              type="text"
              name="address"
              required
              className="input w-full"
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            name="priority"
            id="priority"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
            className="h-6 w-6 accent-yellow-400 outline-none focus:border-none focus:ring-[1px] focus:ring-yellow-400"
          />
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>

        <div className="mt-[10px]">
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <Button disabled={navigation.state === "submitting"}>
            {navigation.state === "submitting" ? "Submitting..." : "Order now"}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "on",
  };

  // form validation
  const errors = {};
  if (!isValidPhone(order.phone)) errors.phone = `Enter correct phone number`;

  if (Object.keys(errors).length > 0) return errors;

  const newOrder = await createOrder(order);

  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
