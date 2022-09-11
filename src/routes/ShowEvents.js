import { Button, Checkbox, Table } from 'antd';
import React, { useState } from 'react';

const columns = [
  {
    title: 'Day/Time',
    dataIndex: 'day',
  },
];
for (let i = 8; i < 24; i += 1) {
  columns.push({
    title: `${i}-${i + 1}`,
    dataIndex: `${i}`,
  });
}

const data = [
  // {
  //   day: 'Saturday',
  // },
  // {
  //   day: 'Sunday',
  // },
  // {
  //   day: 'Monday',
  // },
  // {
  //   day: 'Tuesday',
  // },
  // {
  //   day: 'Wednesday',
  // },
  // {
  //   day: 'Thursday',
  // },
  // {
  //   day: 'Friday',
  // },
];

for (let j = 0; j < 7; j += 1) {
  data.push({
    8: <Checkbox />,
    9: <Checkbox />,
    10: <Checkbox />,
    11: <Checkbox />,
    12: <Checkbox />,
    13: <Checkbox />,
    14: <Checkbox />,
    15: <Checkbox />,
    16: <Checkbox />,
    17: <Checkbox />,
    18: <Checkbox />,
    19: <Checkbox />,
    20: <Checkbox />,
    21: <Checkbox />,
    22: <Checkbox />,
    23: <Checkbox />,
  });
}
function App() {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(false);

  const start = () => {
    setLoading(true); // ajax request after empty completing

    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };

  const onSelectChange = (newSelectedRowKeys) => {
    // eslint-disable-next-line no-console
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;
  return (
    <div
      style={{
        padding: 50,
        display: 'flex',
        // width: 700,
        flexDirection: 'column-reverse',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          marginBottom: 16,
        }}
      >
        <Button
          type="primary"
          onClick={start}
          disabled={!hasSelected}
          loading={loading}
        >
          Reload
        </Button>
        <span
          style={{
            marginLeft: 8,
          }}
        >
          {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
        </span>
      </div>
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={data}
        size="middle"
      />
    </div>
  );
}
export default App;
