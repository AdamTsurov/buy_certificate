import React, { useRef } from 'react';
import SiteLogo from './site-logo';
import Input from '../ui/input/input';

const Head = ({ title }) => {
  return (
    <>
      <SiteLogo className="header-sitelogo" title={title}/>
    </>
  );
};

export default Head;
