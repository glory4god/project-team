import React from 'react';
import styled from 'styled-components';

const Root = styled.div``;

const KakaoMap = ({ mapSelect }) => {
  React.useEffect(() => {
    const container = document.getElementById('map');

    const markerPosition = new window.kakao.maps.LatLng(37.5351, 126.90067);
    const options = {
      center: markerPosition,
      level: 3,
    };

    const map = new window.kakao.maps.Map(container, options);

    const marker = new window.kakao.maps.Marker({
      position: markerPosition,
    });

    marker.setMap(map);
  }, []);

  return (
    <Root>
      <div style={{ width: '500px', height: '400px' }} id="map" />
      <form>
        키워드 :
        <input type="text" id="keyword" size="15" />
        <button type="submit">검색하기</button>
      </form>
    </Root>
  );
};
export default KakaoMap;
