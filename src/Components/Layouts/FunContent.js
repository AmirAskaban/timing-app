import React from 'react';
import { Layout } from 'antd';
import 'antd/dist/antd.min.css';

const { Content } = Layout;

function FunContent() {
  return (
    <Content
      className="site-layout-background"
      style={{
        margin: '24px 16px',
        padding: 24,
        minHeight: 280,
      }}
    >
      Content
    </Content>
  );
}

export default FunContent;
