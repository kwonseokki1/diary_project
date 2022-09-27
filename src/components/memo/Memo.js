import React from "react";
import { useSelector } from "react-redux";

export default function Memo({ memo }) {
  const { data, loading, error } = useSelector(
    (state) => state.memoReducer.memo
  );

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러</div>;
  if (!data) return null;
  return (
    <div>
      <h3>{data.title}</h3>
      <p>{data.body}</p>
    </div>
  );
}
