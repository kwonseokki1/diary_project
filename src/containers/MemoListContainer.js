import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMemos } from "../modules/memo";
import { MemoList } from "../components";
export default function MemoListContainer() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(
    (state) => state.memoReducer.memos
  );

  useEffect(() => {
    dispatch(getMemos());
  }, []);
  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러</div>;
  if (!data) return null;
  return <MemoList memos={data} />;
}
