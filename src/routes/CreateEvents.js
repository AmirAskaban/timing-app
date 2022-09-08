import { Button, Form, Input, Row } from 'antd';
import React from 'react';

function Events() {
  return (
    <div
      style={{
        minHeight: 760,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Row>
        <Form name="basic">
          <Form.Item label="Event Name" name="event">
            <Input />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              href="/timing-app/ShowEvents"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Row>
    </div>
  );
}

export default Events;
