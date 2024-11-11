import React from 'react';
import { Link } from 'react-router-dom';

const TextLink = ({ title, link, ...props }) => {
  return (
    <Link to={link} {...props}>
      {title}
    </Link>
  );
};

export default TextLink;
