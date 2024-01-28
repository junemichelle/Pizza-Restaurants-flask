import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Restaurant from "./components/Restaurant";

function App() {
  return (
    <Router>
      <>
        <Header />
        <Routes>
          <Route path="/restaurants/:id" element={<Restaurant />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;