import Image from "next/image";
import React, { useState, useEffect } from "react";

const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const [showText, setShowText] = useState(false); // New state to control text visibility

  useEffect(() => {
    const loadingTimer = setTimeout(() => setShowText(true), 1500); // Show text after 1500ms
    const finalTimer = setTimeout(() => setLoading(false), 4000); // Keep the loading state for 4000ms

    return () => {
      clearTimeout(loadingTimer);
      clearTimeout(finalTimer);
    };
  }, []);

  if (!loading) return null;

  return (
    <div className="preloader">
      {showText && ( // Render text only if showText is true
      <div className="texts-container">
    <h2 className="" >
       TEAM OJAS
    </h2>
         

        </div>
       
      )}
    </div>
  );
};

export default Preloader;