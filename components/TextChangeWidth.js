"use client";
import React from 'react';
import { useState,useEffect,useRef } from 'react';



const TextChangeWidth = () => {
    const [paragraphStyle, setStyle] = useState({
        fontSize: "3vw",
        lineHeight: "4vw",
        fontWeight: "100",
      });
      const [catchSentenceStyle, setCatchSentenceStyle] = useState({
        fontSize: "7vw",
        lineHeight: "9vw",
        fontWeight: "600",
      });
      
      const updateStyle = () => {
        const vw = window.innerWidth * 0.0095;
        const vh = window.innerHeight * 0.0095;
        var responsiveSize = vw * 1.7;
        var cresponsiveSize = responsiveSize * 3.5;
        const screenRatio =  vw / vh;
    
        if (screenRatio < 0.74 && screenRatio > 0.5) {
          responsiveSize = vw * 2.9;
          cresponsiveSize = responsiveSize * 3.2;
        }
    
    
        setStyle({
          fontSize: responsiveSize + "px",
          lineHeight: responsiveSize * 1.3 + "px",
          fontWeight: "100",
        });
        setCatchSentenceStyle({
          fontSize: cresponsiveSize + "px",
          lineHeight: cresponsiveSize * 1.1 + "px",
          fontWeight: "100",
        });
      };
      
      useEffect(() => {
        updateStyle();
        window.addEventListener("resize", updateStyle);
        return () => window.removeEventListener("resize", updateStyle);
      }, []);
    
    
  return (
    <style>
      {`
        .dynamic-title {
          font-size: ${catchSentenceStyle.fontSize};
          line-height: ${catchSentenceStyle.lineHeight};
          font-weight: ${catchSentenceStyle.fontWeight};
        }
      `}
    </style>
  )
}

export default TextChangeWidth
