import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMemo, getMemos } from "../modules/memo";
import { MemoList } from "../components";

export default function MemoListContainer() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(
    (state) => state.memoReducer.memos
  );

  useEffect(() => {
    if (!data) {
      dispatch(getMemos());
    }
  }, [data]);

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러</div>;
  if (!data) return null;

  return (
    <div>
      <MemoList memos={data} />
    </div>
  );
}
