import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Memo } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { getMemo } from "../modules/memo";
const MemoContainer = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(
    (state) => state.memoReducer.memo[params.id] || {}
  );

  useEffect(() => {
    dispatch(getMemo(params.id));
  }, []);

  if (loading && !data) return <div>로딩중...</div>;
  if (error) return <div>에러</div>;
  if (!data) return null;

  return <Memo memo={data} />;
};

export default MemoContainer;
