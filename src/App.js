import "./App.css";
import { Button } from "./ui/ui";
import MemoListContainer from "./containers/MemoListContainer";
import { Routes, Route } from "react-router-dom";
import { Memo } from "./components";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MemoListContainer />} />
        <Route path="/:id" element={<Memo />} />
      </Routes>
    </div>
  );
}

export default App;
