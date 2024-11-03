import { Home, Todos } from "@/lib/pages";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div>
      {location.pathname !== "/" && (
        <button onClick={() => navigate(-1)}>Back</button>
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todos/:todoId" element={<Todos />} />
      </Routes>
    </div>
  );
}

export default App;
