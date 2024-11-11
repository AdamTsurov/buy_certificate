import React, { forwardRef } from 'react';

const Input = forwardRef(({ className, ...props }, ref) => {
  return <input ref={ref} className={className} {...props} />;
});

export default Input;
