import { Routes, Route } from "react-router-dom";
import { Menu } from "./components/Menu";
import Board from "./pages/Board";

function App() {
  return (
    <div>
      <Menu />
      <Routes>
        <Route path="/attend" />
        <Route path="/board" element={<Board />} />
        <Route path="/mypage" />
        <Route path="/login" />
      </Routes>
    </div>
  );
}

export default App;
