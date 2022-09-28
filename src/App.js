import "./App.css";
import MemoListContainer from "./containers/MemoListContainer";
import MemoContainer from "./containers/MemoContainrer";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MemoListContainer />} />
        <Route path="/:id" element={<MemoContainer />} />
      </Routes>
    </div>
  );
}

export default App;
