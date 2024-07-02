import { useSelector } from "react-redux";

export default function UserName() {
  const userName = useSelector((state) => state.user.userName);

  if (userName === "") return null;
  return (
    <div className="hidden text-[20px] font-bold uppercase tracking-widest md:block">
      {userName}
    </div>
  );
}
