import React from 'react';
import styled from 'styled-components';
import InfoBottom from './InfoBottom';
import { Link } from 'react-router-dom';

const Root = styled.div`
  max-width: 1080px;
  text-align: center;
  background-color: #151b29;
  color: white;
  height: 100%;
  margin: 0 auto;

  .main-top {
    padding-top: 100px;
  }

  .grid1 {
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 150px 5rem 100px 5rem;
    grid-gap: 66px;
  }
  .image-square {
    position: relative;
    padding-top: 100%;
    border: none;
    overflow: hidden;
    z-index: 2;
    font-size: 30px;
    border-radius: 1rem;
  }
  .img-inner-grid {
    position: absolute;
    width: 100%;
    min-height: 100%;
    height: auto;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    object-fit: cover;
    z-index: 1;
  }

  @media (max-width: 750px) {
    .grid1 {
      position: relative;
      display: grid;
      grid-template-columns: 1fr;
      padding: 120px 50px 100px 50px;
      grid-gap: 66px;
    }
  }
`;

const Main = () => {
  const videoSource = [
    'example_video.mp4',
    'example_video.mp4',
    'example_video.mp4',
    'example_video.mp4',
  ];

  return (
    <Root>
      <div className='main-top'>
        아래 분석 tool 들에 대한 간단 소개?!
        <p>~~~~~~~~~~</p>
        <p>Tool1 : </p>
        <p>Tool2 : </p>
        <p>Tool3 : </p>
      </div>
      <div className='grid1'>
        {videoSource.map((scr, idx) => (
          <div>
            <div className='image-square'>
              <button>
                <video
                  controls
                  onClick={() => {}}
                  className='img-inner-grid'
                  src={scr}
                  poster='example.jpg'
                />
              </button>
            </div>
            <Link
              to={`/tool${idx + 1}`}
              color='secondary'
              style={{ textDecoration: 'none', color: ' white' }}>
              TOOL {idx + 1}
            </Link>
          </div>
        ))}
      </div>
      <InfoBottom />
    </Root>
  );
};

export default Main;
