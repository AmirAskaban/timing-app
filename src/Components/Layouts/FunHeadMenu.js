import { LoginOutlined, LogoutOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react';

function App() {
  return (
    <div>
      <Button
        type="primary"
        shape="round"
        icon={<LoginOutlined />}
        size="middle"
      >
        Login
      </Button>
      <Button
        type="primary"
        shape="round"
        icon={<LogoutOutlined />}
        size="middle"
      >
        Logout
      </Button>
    </div>
  );
}

export default App;
