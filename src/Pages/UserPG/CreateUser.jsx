import { useState } from "react";
import Button from "../../UI/Button";
import { useDispatch } from "react-redux";
import { updateUserName } from "./userSlice";
import { useNavigate } from "react-router-dom";

function CreateUser() {
  const [username, setUsername] = useState("");
  const reduxDispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!username) return;
    reduxDispatch(
      updateUserName(username.charAt(0).toUpperCase() + username.slice(1)),
    );
    navigate("/menu");
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>👋 Welcome! Please start by telling us your name:</p>

      <input
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="input my-[10px]"
      />

      {username !== "" && (
        <div>
          <Button>Start Ordering</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
