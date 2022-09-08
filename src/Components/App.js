import React from 'react';
import 'antd/dist/antd.min.css';
import { Route, Routes } from 'react-router-dom';

import Login from '../routes/Login';
import CreateEvents from '../routes/CreateEvents';
import ShowEvents from '../routes/ShowEvents';

function App() {
  return (
    <Routes>
      {/* <Route exact path="/" element={<Home />} /> */}
      <Route path="/" element={<Login />} />
      <Route path="/CreateEvents" element={<CreateEvents />} />
      <Route path="/ShowEvents" element={<ShowEvents />} />
    </Routes>
  );
}

export default App;
