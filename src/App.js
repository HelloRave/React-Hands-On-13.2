import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PageOne from './pages/PageOne'
import PageTwo from './pages/PageTwo'
import PageThree from './pages/PageThree'

export default function App() {
  return (
    <React.Fragment>
      <Router>
        <ul>
          <li>
            <Link to='/'>Page 1</Link>
          </li>
          <li>
            <Link to='/two'>Page 2</Link>
          </li>
          <li>
            <Link to='/three'>Page 3</Link>
          </li>
        </ul>

        <Routes>
          <Route path="/" element={<PageOne />} />
          <Route path="/two" element={<PageTwo />} />
          <Route path="/three" element={<PageThree />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}
