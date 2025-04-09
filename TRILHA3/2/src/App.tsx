
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Animal from "./pages/Animal";
import "./styles/styles.css";

function App() {
  return (
    <Router>
      <nav className="navbar">       
        <Link to="/animal/unicornio">unicornio</Link>
        <Link to="/animal/Ornitorrinco">Ornitorrinco</Link>
      </nav>

      <div style={{ paddingTop: "80px" }}>
        <Routes>
          
          <Route path="/animal/:name" element={<Animal />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
