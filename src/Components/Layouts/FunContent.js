import React from 'react';
import { Layout } from 'antd';
import 'antd/dist/antd.min.css';
import FunCarousel from './FunCarousel';

const { Content } = Layout;

function FunContent() {
  return (
    <Content
      className="site-layout-background"
      style={{
        margin: '0px 0px',
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 17,
        minHeight: 600,
      }}
    >
      <FunCarousel />
    </Content>
  );
}

export default FunContent;
