import { dynamicState } from "../utils/useDynamicState";
import { getData } from "../assets/temp";

// Get memo actions
const GET_MEMOS = "memo/GET_MEMOS";
const GET_MEMOS_SUCCESS = "memo/GET_MEMOS_SUCCESS";
const GET_MEMOS_ERROR = "memo/GET_MEMOS_ERROR";
const GET_MEMO = "memo/GET_MEMO";
const GET_MEMO_SUCCESS = "memo/GET_MEMO_SUCCESS";
const GET_MEMO_ERROR = "memo/GET_MEMO_ERROR";

// Memo crud
const ADD_MEMO = "memo/ADD_MEMO";
const DLETE_MEMO = "memo/DELETE_MEMO";
const MODIFY_MEMO = "memo/MODIFY_MEMO";

const initialData = {
  memos: {
    loading: null,
    data: null,
    error: null,
  },
  memo: {
    loading: null,
    data: null,
    error: null,
  },
};

export const getMemos = () => async (dispatch) => {
  dispatch({ type: GET_MEMOS });
  try {
    const res = await getData();
    dispatch({ type: GET_MEMOS_SUCCESS, data: res });
  } catch (e) {
    dispatch({ type: GET_MEMOS_ERROR, error: e });
  }
};

export const getMemo = () => ({ type: GET_MEMO });

export default function memoReducer(state = initialData, action) {
  switch (action.type) {
    case GET_MEMOS:
      return {
        ...state,
        memos: dynamicState.loading(),
      };
    case GET_MEMOS_SUCCESS:
      console.log(action);
      return {
        ...state,
        memos: dynamicState.success(action.data),
      };
    case GET_MEMOS_ERROR:
      return {
        ...state,
        memos: dynamicState.error(action.error),
      };

    case GET_MEMO:
      return {
        ...state,
        memo: dynamicState.loading(),
      };
    case GET_MEMO_SUCCESS:
      return {
        ...state,
        memo: dynamicState.success(action.data),
      };
    case GET_MEMO_ERROR:
      return {
        ...state,
        memo: dynamicState.error(action.error),
      };
    default:
      return state;
  }
}
