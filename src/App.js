import { Routes, Route } from "react-router-dom";
import { Menu } from "./components/Menu";
import Board from "./pages/Board";
import Post from "./pages/Post";

function App() {
  return (
    <div>
      <Menu />
      <Routes>
        <Route exact path="/attend" />
        <Route exact path="/board" element={<Board />} />
        <Route exact path="/:postId" element={<Post />} />
        <Route exact path="/mypage" />
        <Route exact path="/login" />
      </Routes>
    </div>
  );
}

export default App;
