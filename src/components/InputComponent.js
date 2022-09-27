import React, { useState } from "react";

export default function InputComponent({ onSubmitHandler }) {
  const [memoTitle, setMemoTitle] = useState("");
  const [memoBody, setMemoBody] = useState("");
  return (
    <form onSubmit={onSubmitHandler({ memoTitle, memoBody })}>
      <input
        type="text"
        value={memoTitle}
        onChange={(e) => {
          setMemoTitle(e.target.value);
        }}
      />
      <br />
      <textarea
        type="text"
        value={memoBody}
        onChange={(e) => {
          setMemoBody(e.target.value);
        }}
      />
      <button>등록</button>
    </form>
  );
}
