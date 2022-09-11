import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Col, Form, Input, Row } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div
      style={{
        minHeight: 760,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Row
        align="middle"
        justify="center"
        style={{
          width: 600,
          height: 600,
        }}
      >
        <Col>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
          >
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Please input your Username!',
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your Password!',
                },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                <Link to="/CreateEvents">Login</Link>
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default Login;
