import React, { useState } from "react";

const Pass = () => {
  const [upper, setUpper] = useState(false);
  const [lower, setLower] = useState(false);
  const [number, setNumber] = useState(false);
  const [symbol, setSymbol] = useState(false);
  const [pass_length, setPass_length] = useState("");
  const [answer, setAnswer] = useState("");

  const generate = () => {
    const val = parseInt(pass_length);
    if (val >= 8 && val <= 50) {
      const new_str = [];
      let chars = "";
      if (upper) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      if (lower) chars += "abcdefghijklmnopqrstuvwxyz";
      if (number) chars += "0123456789";
      if (symbol) chars += "!£$%^&*@()";

      for (let i = 0; i < val; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        new_str.push(chars[randomIndex]);
      }
      setAnswer(new_str.join(""));
    } else {
      alert("Password length should be between 8 and 50 characters.");
    }
  };

  return (
    <div className="border border-spacing-8 bg-gray-900">
      <h2 className="text-3xl text-center font-mono font-bold text-pink-400 m-10">
        Random Password Generator
      </h2>
      <div className="flex m-10">
        <p className="bg-white text-black w-[90%] h-10 rounded-lg p-2">{answer}</p>
        <span className="bg-white text-black w-[10%] border border-green-700 text-center font-mono font-bold text-2xl cursor-pointer rounded-lg" onClick={()=>alert`copied password`}>
          copy
        </span>
      </div>
      <div className="flex gap-5 m-10">
        <h3 className="text-white font-mono font-semibold">
          Select Password length (8-50 characters)
        </h3>
        <span>
          <input
            type="number"
            placeholder="Enter the length of password.."
            className="rounded-lg"
            value={pass_length}
            onChange={(e) => {
              setPass_length(e.target.value);
            }}
          />
        </span>
      </div>

      <div className="text-white m-10">
        <p className="">
          {" "}
          <input
            type="checkbox"
            className="m-2"
            onChange={(e) => {
              setUpper(!upper);
            }}
          />
          Include upper case
        </p>
        <p className="">
          {" "}
          <input
            type="checkbox"
            className="m-2"
            onChange={(e) => {
              setLower(!lower);
            }}
          />
          Include lower case
        </p>
        <p className="">
          {" "}
          <input
            type="checkbox"
            className="m-2"
            onChange={(e) => {
              setNumber(!number);
            }}
          />
          Include number
        </p>
        <p className="">
          {" "}
          <input
            type="checkbox"
            className="m-2"
            onChange={(e) => {
              setSymbol(!symbol);
            }}
          />
          Include symbol
        </p>
      </div>
      <button
        className="bg-blue-500 text-center text-mono font-bold text-white m-10 w-[90%] h-10 rounded-lg"
        onClick={generate}
        setAnswer
      >
        Generate Password
      </button>
    </div>
  );
};

export default Pass;
