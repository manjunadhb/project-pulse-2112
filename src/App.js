import "./App.css";
import DailyStatusUpdate from "./components/DailyStatusUpdate";
import Login from "./components/Login";
import Messages from "./components/Messages";
import Tasks from "./components/Tasks";
import { Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/Home" element={<Home />}></Route>
      <Route path="/dailystatusupdate" element={<DailyStatusUpdate />}></Route>
      <Route path="/messages" element={<Messages />}></Route>
      <Route path="/tasks" element={<Tasks />}></Route>
      <Route path="*" element={<PageNotFound />}></Route>
    </Routes>
  );
}

export default App;
