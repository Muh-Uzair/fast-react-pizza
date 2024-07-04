import { useFetcher } from "react-router-dom";
import Button from "../../UI/Button";
import { updateOrder } from "../../Services/apiRestaurant";

export default function UpdateOrderPriority() {
  const fetcher = useFetcher();
  return (
    <div>
      <fetcher.Form method="PATCH">
        <Button>Make Order Priority</Button>
      </fetcher.Form>
    </div>
  );
}

export async function action({ params }) {
  // console.log(`here`);
  // console.log(params.orderIDs);
  const data = { priority: true };
  await updateOrder(params.orderID, data);
  return null;
}
