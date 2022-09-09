import { Form, Input, Row } from 'antd';
import React from 'react';

function showInput() {
  // eslint-disable-next-line no-console
  console.log(document.querySelector('#eventName').value);
}
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
          <Form.Item label="Event Name">
            <Input id="eventName" type="text" className="form-control" />
            <button
              type="submit"
              value="Submit"
              // href="/timing-app/ShowEvents"
              onClick={showInput}
            >
              submit
            </button>
          </Form.Item>
        </Form>
      </Row>
    </div>
  );
}

export default Events;
