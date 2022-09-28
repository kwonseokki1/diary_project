import { dynamicState } from "../utils/useDynamicState";
import { getData, getDataById } from "../assets/temp";
import { createPromiseThunk } from "../utils/createPromiseThunk";

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
  memo: {},
};

export const getMemos = createPromiseThunk(GET_MEMOS, getData);

export const getMemo = (id) => async (dispatch) => {
  dispatch({ type: GET_MEMO, meta: id });
  try {
    const payload = await getDataById(id);
    dispatch({ type: GET_MEMO_SUCCESS, payload, meta: id });
  } catch (e) {
    dispatch({ type: GET_MEMO_ERROR, payload: e, error: true, meta: id });
  }
};

export default function memoReducer(state = initialData, action) {
  switch (action.type) {
    case GET_MEMOS:
      return {
        ...state,
        memos: dynamicState.loading(),
      };
    case GET_MEMOS_SUCCESS:
      return {
        ...state,
        memos: dynamicState.success(action.payload),
      };
    case GET_MEMOS_ERROR:
      return {
        ...state,
        memos: dynamicState.error(action.payload),
      };

    case GET_MEMO:
      return {
        ...state,
        memo: {
          ...state.memo,
          [action.meta]: dynamicState.loading(
            state.memo[action.meta] && state.memo[action.meta]
          ),
        },
      };
    case GET_MEMO_SUCCESS:
      return {
        ...state,
        memo: {
          ...state.memo,
          [action.meta]: dynamicState.success(action.payload),
        },
      };
    case GET_MEMO_ERROR:
      return {
        ...state,
        memo: {
          ...state.memo,
          [action.meta]: dynamicState.error(action.payload),
        },
      };

    default:
      return state;
  }
}
