import React from 'react';

function TestLol({a, b}) {
  const sum = (a, b) => {
    return a + b;
  };
  return (
    <div>
      <div>{sum(a,b)}</div>
      <div>TEST TEST TEST TRES</div>
    </div>
  );
}

export default TestLol;
