import React from 'react';

function Exmple(props) {
  const { name } = props;
  const { tool } = props;
  return (
    <div>
      <h1>My name is {name}.</h1>
      <p>My favorite design tool is {tool}.</p>
    </div>
  );
}

export default Exmple;
