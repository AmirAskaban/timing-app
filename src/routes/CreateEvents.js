import { Form, Input, Row, Button } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

function showInput() {
  // eslint-disable-next-line no-console
  console.log(document.querySelector('#eventName').value);
}
function Events() {
  return (
    <Row
      style={{
        minHeight: 760,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Form name="basic">
        <Form.Item label="Event Name">
          <Input id="eventName" type="text" className="form-control" />
          <Button type="submit" value="Submit" onClick={showInput}>
            <Link to="/ShowEvents">Submit</Link>
          </Button>
        </Form.Item>
      </Form>
    </Row>
  );
}

export default Events;
