import React from 'react';
import { Layout, Menu } from 'antd';
import 'antd/dist/antd.min.css';

const items1 = ['1', '2', '3'].map((key) => ({
  key,
  label: `nav ${key}`,
}));

const { Header } = Layout;
function FunHeader() {
  return (
    <Header
      className="site-layout-background"
      style={{
        padding: 0,
      }}
    >
      <Header className="header">
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={items1}
        />
      </Header>
    </Header>
  );
}

export default FunHeader;
