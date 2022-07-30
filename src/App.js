import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Todos from "./components/Todos";
import TodoDetails from "./components/TodoDetails";
import CreateTodo from "./components/CreateTodo";
import Home from "./components/Home";
import AuthProvider from "./components/context/authContext";
import Signup from "./components/Signup";
function App() {
  return (
    <Router>
      <div className="app">
        <AuthProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/todos" element={<Todos />} />
            <Route path="/create" element={<CreateTodo />} />
            <Route path="/:id" element={<TodoDetails />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </AuthProvider>
      </div>
    </Router>
  );
}

export default App;
