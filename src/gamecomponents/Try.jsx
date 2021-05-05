import React from 'react';

const Try = React.memo(({ idx }) => {
  return (
    <div>
      <li>{idx.try}</li>
      <span>{idx.result}</span>
    </div>
  );
});

export default Try;
