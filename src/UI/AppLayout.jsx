import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../Pages/CartPG/CartOverview";
import Header from "./Header";
import IsLoadingCMP from "./IsLoadingCMP";
import { useSelector } from "react-redux";

export default function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  const cart = useSelector((state) => state.cart.cart);

  return (
    <div className="relative grid h-[100vh] grid-rows-[auto_1fr_auto] transition-all duration-300">
      {isLoading && <IsLoadingCMP />}
      <Header />

      <div className="overflow-auto bg-stone-100">
        <main className="mx-auto">
          <Outlet />
        </main>
      </div>

      {cart.length > 0 && <CartOverview />}
    </div>
  );
}
