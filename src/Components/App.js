import React from 'react';
import 'antd/dist/antd.min.css';
import { Route, Routes } from 'react-router-dom';

import Login from '../routes/Login';
import CreateEvents from '../routes/CreateEvents';
import ShowEvents from '../routes/ShowEvents';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} exact />
      <Route path="/CreateEvents" element={<CreateEvents />} />
      <Route path="/ShowEvents" element={<ShowEvents />} />
    </Routes>
  );
}

export default App;
