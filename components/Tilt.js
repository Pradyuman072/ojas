import React, { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';

const Tilt = ({ options, ...props }) => {
  const tiltRef = useRef();

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, options);
      const { vanillaTilt } = tiltRef.current;
      return () => {
        if (vanillaTilt && typeof vanillaTilt.destroy === 'function') {
          vanillaTilt.destroy();
        }
      };
    }
  }, [options]);

  return <div ref={tiltRef} {...props} />;
};

export default Tilt;
