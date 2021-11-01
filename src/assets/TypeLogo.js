import React from 'react';
import styled from '@emotion/styled/macro';

const SVG = styled('svg')`
  width: 57px;
  height: 22px;
  margin-left: 10px;
  g {
    fill: ${p => (p.color ? p.color : '#808184')};
  }
`;

const TypeLogo = ({ color }) => (
  <svg
    width="33"
    height="14"
    viewBox="0 0 33 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.70898 13V8.00781H7.86816V5.90723H2.70898V2.50586H8.36035V0.317383H0.0546875V13H2.70898ZM12.4736 13V4.69434H12.5527L18.4854 13H20.6826V0.317383H18.1426V8.5791H18.0723L12.1484 0.317383H9.93359V13H12.4736ZM22.3174 9.37891C22.3965 11.7695 24.4092 13.2197 27.4326 13.2197C30.6055 13.2197 32.5479 11.6465 32.5479 9.16797C32.5479 7.24316 31.3789 6.16211 28.6982 5.62598L27.3535 5.35352C25.8594 5.05469 25.2441 4.57129 25.2441 3.78906C25.2441 2.85742 26.123 2.24219 27.4326 2.24219C28.7686 2.24219 29.709 2.89258 29.7969 3.97363H32.3018C32.2578 1.64453 30.3945 0.0976562 27.4326 0.0976562C24.6113 0.0976562 22.5898 1.63574 22.5898 3.95605C22.5898 5.8457 23.8291 7.05859 26.3604 7.55957L27.6963 7.82324C29.2871 8.14844 29.8848 8.62305 29.8848 9.45801C29.8848 10.3896 28.918 11.0752 27.5029 11.0752C26.0615 11.0752 24.9893 10.4424 24.8223 9.37891H22.3174Z"
      fill="#1969FF"
    />
  </svg>
);

export default TypeLogo;
