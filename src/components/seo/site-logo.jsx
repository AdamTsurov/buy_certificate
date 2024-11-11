import React from 'react';
import TextLink from '../ui/link/link';

const SiteLogo = ({ title, className, ...props }) => {
  return (
    <div className={className} {...props}>
      <TextLink className="company-name" link={'/'} title={title} />
    </div>
  );
};

export default SiteLogo;
