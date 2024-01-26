import React from 'react';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Main from "./pages/Main"
import Error404 from "./pages/Error404"

function App() {
  return (
    <Router>
    <div>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;

