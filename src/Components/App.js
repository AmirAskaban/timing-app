import { Layout } from 'antd';
import React from 'react';

import 'antd/dist/antd.min.css';
import './App.css';
// import Exmple from './Exmple';

import FunContent from './Layouts/FunContent';
// import FunHeader from './Layouts/FunHeader';
import FunSider from './Layouts/FunSider';

function App() {
  return (
    // <div>
    //   <Exmple name="Ihechikara" tool="Figma" />
    // </div>
    <Layout>
      <FunSider />
      <Layout className="site-layout">
        {/* <FunHeader /> */}
        <FunContent />
      </Layout>
    </Layout>
  );
}

export default App;
