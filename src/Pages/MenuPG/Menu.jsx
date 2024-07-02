import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../Services/apiRestaurant";
import MyMenuItem from "./MyMenuItem";

function Menu() {
  const menu = useLoaderData();
  // console.log(menu);
  return (
    <div>
      <ul className="divide-y divide-stone-200 px-[10px]">
        {menu.map((val, i) => (
          <MyMenuItem val={val} key={i} />
        ))}
      </ul>
    </div>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export async function loader() {
  const menu = await getMenu();
  // console.log(menu);
  return menu;
}

export default Menu;
