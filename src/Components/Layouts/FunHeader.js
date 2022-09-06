import { LoginOutlined } from '@ant-design/icons';
import React from 'react';
import { Button, Layout } from 'antd';
import 'antd/dist/antd.min.css';

const { Header } = Layout;
function FunHeader() {
  return (
    <Header
      className="site-layout-background"
      style={{
        padding: 0,
        display: 'flex',
      }}
    >
      <div>
        <div
          gutter={0}
          style={{
            display: 'flex',
            paddingLeft: '10px',
            alignItems: 'flex-start',
          }}
        >
          <div>
            <Button
              type="primary"
              shape="round"
              icon={<LoginOutlined />}
              size="middle"
              href="/login"
            >
              Login
            </Button>
          </div>
        </div>
      </div>
    </Header>
  );
}

export default FunHeader;
