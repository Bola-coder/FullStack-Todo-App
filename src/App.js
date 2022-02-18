import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Todos from "./components/Todos";
import TodoDetails from "./components/TodoDetails";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Todos />} />
          <Route path="/:id" element={<TodoDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
