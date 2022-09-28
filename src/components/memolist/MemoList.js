import React from "react";
import { Link } from "react-router-dom";
export default function MemoList({ memos }) {
  return (
    <ul>
      {memos.map((memo) => (
        <li key={memo.id} onClick={() => {}}>
          <Link to={`/${memo.id}`}> {memo.title}</Link>
        </li>
      ))}
    </ul>
  );
}
