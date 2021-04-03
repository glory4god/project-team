import React from 'react';
import styled from 'styled-components';

const Root = styled.div`
  .pd-x {
    padding-left: 80px;
    padding-right: 80px;
  }
  .bottom-line {
    border: 0.05rem solid white;
  }
  .info {
    height: 300px;
  }
  .introduce {
    padding-top: 12px;
  }

  @media (max-width: 750px) {
    .pd-x {
      padding-left: 46px;
      padding-right: 46px;
    }
  }
`;

const InfoBottom = () => {
  return (
    <Root>
      <div className='pd-x'>
        <div className='bottom-line'></div>
        <div className='info'>
          <div className='introduce'>소개 : </div>
          <div></div>
        </div>
      </div>
    </Root>
  );
};

export default InfoBottom;
