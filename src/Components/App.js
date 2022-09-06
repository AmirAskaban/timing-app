import React from 'react';
import 'antd/dist/antd.min.css';
import { Route, Routes } from 'react-router-dom';

import Home from '../routes/Home';
import Login from '../routes/Login';
import SignUp from '../routes/SignUp';
import Events from '../routes/Events';
import About from '../routes/About';
import Contact from '../routes/Contact';
import NotFound from '../routes/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/timing-app" element={<Home />} />
      <Route path="/timing-app/login" element={<Login />} />
      <Route path="/timing-app/SignUp" element={<SignUp />} />
      <Route path="/timing-app/Events" element={<Events />} />
      <Route path="/timing-app/about" element={<About />} />
      <Route path="/timing-app/contact" element={<Contact />} />
      <Route path="/404" element={<NotFound />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
