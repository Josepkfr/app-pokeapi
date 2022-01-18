import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layaout from "../containers/Layaout";
import Home from "../pages/Home";

function App() {
  return (
    <Router>
      <Layaout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Layaout>
    </Router>
  );
}

export default App;
