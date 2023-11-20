import { useState } from "react";
import "./AddTask.css";

const AddTask = (props) => {
  let minDate = new Date().toISOString().slice(0, 10);
  let maxDate = minDate.slice(0, 4) * 1 + 1;
  maxDate = maxDate + "-12-31";
  const [text, setText] = useState("");
  const [checked, setChecked] = useState(false);
  const [date, setDate] = useState(minDate);

  const handleText = (e) => {
    setText(e.target.value);
  };

  const handleChechbox = (e) => {
    setChecked(e.target.value);
  };

  const handleDate = (e) => {
    setDate(e.target.value);
  };

  const handleClick = () => {
    if (text.length > 2) {
      const add = props.add(text, date, checked);
      if (add) {
        setText("");
        setChecked(false);
        setDate(minDate);
      }
    } else {
      alert("Nazwa jest za krótka");
    }
  };

  return (
    <>
      <div className="form">
        <input
          type="text"
          placeholder="Dodaj zadanie"
          value={text}
          onChange={handleText}
        />
        <input
          type="checkbox"
          checked={checked}
          id="important"
          onChange={handleChechbox}
        />
        <label htmlFor="important">Priorytet</label>
        <br />
        <label htmlFor="date">Do kiedy zrobić </label>
        <input
          type="date"
          value={date}
          min={minDate}
          max={maxDate}
          onChange={handleDate}
        />
        <button onClick={handleClick}>Dodaj</button>
      </div>
      <hr />
    </>
  );
};

export default AddTask;