import React from "react";
import { Link } from "react-router-dom";
export default function MemoList({ memos, onClickHandler }) {
  return (
    <ul>
      {memos.map((memo) => (
        <li
          key={memo.id}
          onClick={() => {
            onClickHandler(memo.id);
          }}
        >
          <Link to={`/${memo.id}`}> {memo.title}</Link>
        </li>
      ))}
    </ul>
  );
}
