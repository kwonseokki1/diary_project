const sleep = (n) => new Promise((resolve) => setTimeout(resolve, n));

// {id, title, body}
const memos = [
  { id: 1, title: "redux-middleware", body: "learn redux-middleware" },
  { id: 2, title: "react-typescript", body: "learn react-typescript" },
  { id: 3, title: "redux-saga", body: "learn redux-saga" },
];

// 0.5초 뒤에 posts 배열 반환
export const getData = async () => {
  await sleep(500);
  return memos;
};

// 특정 post 반환
export const getDataById = async (id) => {
  await sleep(500);
  return memos.find((post) => post.id == id);
};
