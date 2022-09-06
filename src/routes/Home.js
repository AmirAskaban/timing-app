import { Layout } from 'antd';
import React from 'react';
import 'antd/dist/antd.min.css';

import FunContent from '../Components/layouts/FunContent';
import FunHeader from '../Components/layouts/FunHeader';
import FunSider from '../Components/layouts/FunSider';
import FunFooter from '../Components/layouts/FunFooter';

function Home() {
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

export default Home;
