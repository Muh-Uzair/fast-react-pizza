import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserName from "../Pages/UserPG/UserName";

export default function Header() {
  const [enteredID, setEnteredId] = useState("");
  const navigate = useNavigate();

  function formSubmit(e) {
    e.preventDefault();
    navigate(`/order/${enteredID}`);
  }

  return (
    <header className="flex items-center justify-between space-x-[20px] border-b border-stone-200 bg-yellow-500 p-[20px]">
      <Link
        to={"/"}
        className="text-center text-[15px] font-bold uppercase tracking-[3px] md:text-[20px]"
      >
        Fast React Pizza Co.
      </Link>
      <form onSubmit={(e) => formSubmit(e)}>
        <input
          type="text"
          placeholder="Enter id #"
          value={enteredID}
          onChange={(e) => setEnteredId(e.target.value)}
          className="w-[180px] rounded-full bg-yellow-200 p-[6px] pl-[20px] transition-all duration-300 focus:w-[200px] focus:outline-none focus:ring focus:ring-yellow-500 sm:w-[300px] sm:focus:w-[320px]"
        />
      </form>

      <UserName />
    </header>
  );
}
