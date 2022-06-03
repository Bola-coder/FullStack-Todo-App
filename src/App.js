import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Todos from "./components/Todos";
import TodoDetails from "./components/TodoDetails";
import CreateTodo from "./components/CreateTodo";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todos" element={<Todos />} />
          <Route path="/create" element={<CreateTodo />} />
          <Route path="/:id" element={<TodoDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
