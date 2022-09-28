import React from "react";
import { useSelector } from "react-redux";

export default function Memo({ memo }) {
  return (
    <div>
      <h3>{memo.title}</h3>
      <p>{memo.body}</p>
    </div>
  );
}
