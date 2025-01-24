import Home from "./Home.js"
import AnotherPage from "./AnotherPage.js";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/another" element={<AnotherPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;