import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMemo, getMemos, addMemo } from "../modules/memo";
import { MemoList } from "../components";
import { InputComponent } from "../components";
export default function MemoListContainer() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(
    (state) => state.memoReducer.memos
  );

  const onClickHandler = (id) => {
    dispatch(getMemo(id));
  };

  const onSubmitHandler = (memo) => {
    dispatch(addMemo(memo));
  };

  useEffect(() => {
    dispatch(getMemos());
  }, []);

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러</div>;
  if (!data) return null;

  return (
    <div>
      <MemoList memos={data} onClickHandler={onClickHandler} />
      <InputComponent onSubmitHandler={onSubmitHandler} />
    </div>
  );
}
