import { Layout } from 'antd';
import React from 'react';
import 'antd/dist/antd.min.css';

import FunContent from './Layouts/FunContent';
import FunHeader from './Layouts/FunHeader';
import FunSider from './Layouts/FunSider';
import FunFooter from './Layouts/FunFooter';

function App() {
  return (
    <>
      <Layout>
        <FunSider />
        <Layout className="site-layout">
          <FunHeader />
          <FunContent />
        </Layout>
      </Layout>
      <FunFooter />
    </>
  );
}

export default App;
