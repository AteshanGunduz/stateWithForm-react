import { useState } from "react";
import "./styles.css";

export default function App() {
  const [message, setMessage] = useState();
  const handleMessage = (e) => {
    const trimmedName = e.target.value.trim();

    if (trimmedName.length === 0) {
      setMessage("");
    } else if (trimmedName.length < 3) {
      setMessage("Unvalid Message");
    } else {
      setMessage("You have a Message");
    }
  };
  return (
    <form>
      <label>Your Message</label>
      <input type="text" minLength="3" onInput={handleMessage} />
      <p>{message}</p>
    </form>
  );
}
