/* global kakao */

import React, { useEffect, useState } from 'react';

export default function Map() {
  const [map, setMap] = useState(null);

  //처음 지도 그리기
  useEffect(() => {
    const container = document.getElementById('map');
    const options = { center: new kakao.maps.LatLng(33.450701, 126.570667) };
    const kakaoMap = new kakao.maps.Map(container, options);
    setMap(kakaoMap);
  }, []);

  return (
    <div id="map" style={{ width: '500px', height: '500px' }}>
      map
    </div>
  );
}
