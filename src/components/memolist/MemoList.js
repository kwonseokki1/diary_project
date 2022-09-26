import React from "react";

export default function MemoList({ memos }) {
  console.log(memos);
  return (
    <ul>
      {memos.map((memo) => (
        <li key={memo.id}>{memo.title}</li>
      ))}
    </ul>
  );
}
