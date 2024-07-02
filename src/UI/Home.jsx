import { useSelector } from "react-redux";
import CreateUser from "../Pages/UserPG/CreateUser";
import Button from "./Button";

function Home() {
  const userName = useSelector((state) => state.user.userName);

  return (
    <div className="mx-[10px] my-[50px] text-center">
      <h1 className="mb-[50px] text-[20px] font-semibold text-stone-800 md:text-[25px]">
        The best pizza.
        <br />
        <span className="text-yellow-500 md:text-[30px]">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      {userName === "" ? (
        <CreateUser />
      ) : (
        <Button to="/menu">{`Continue Ordering, ${userName}`}</Button>
      )}
    </div>
  );
}

export default Home;
