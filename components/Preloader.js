import React from 'react';
import styled from 'styled-components';
import { preLoaderAnim } from "@/animations";

const Preloader = () => {
  React.useEffect(() => {
    preLoaderAnim();
  }, []);

  return (
    <StyledWrapper>
      <div className="loader">
        <svg className="absolute" width={0} height={0}>
          <defs>
            <linearGradient id="b" x1={0} y1={62} x2={0} y2={2} gradientUnits="userSpaceOnUse">
              <stop stopColor="#973BED" />
              <stop offset={1} stopColor="#007CFF" />
            </linearGradient>
            <linearGradient id="c" x1={0} y1={64} x2={0} y2={0} gradientUnits="userSpaceOnUse">
              <stop stopColor="#FFC800" />
              <stop offset={1} stopColor="#F0F" />
              <animateTransform
                attributeName="gradientTransform"
                type="rotate"
                values="0 32 32;-270 32 32;-540 32 32;-810 32 32;-1080 32 32"
                dur="8s"
                repeatCount="indefinite"
              />
            </linearGradient>
            <linearGradient id="d" x1={0} y1={62} x2={0} y2={2} gradientUnits="userSpaceOnUse">
              <stop stopColor="#00E0ED" />
              <stop offset={1} stopColor="#00DA72" />
            </linearGradient>
          </defs>
        </svg>
        {["b", "c", "d", "b"].map((gradient, index) => (
          <svg
            key={index}
            viewBox="0 0 44 54"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              pathLength={360}
              d={getPaths()[index]}
              className={`dash gradient-${gradient}`}
              strokeWidth={index === 1 ? 5 : 4}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ))}
        <div className="w-2" />
      </div>
    </StyledWrapper>
  );
};

function getPaths() {
  return [
    "M15.75 11.40Q13.60 11.40 12.58 12.65Q11.55 13.90 11.55 17.10L11.55 23L19.85 23L19.85 17Q19.85 14.90 19.35 13.63Q18.85 12.35 17.98 11.88Q17.10 11.40 15.75 11.40M19.85 29.90L11.55 29.90L11.55 32.55Q11.55 35.10 10.20 36.30Q8.85 37.50 5.55 37.50Q4.15 37.50 3.25 37.10Q2.35 36.70 1.68 35.75Q1.00 34.80 0.68 32.98Q0.35 31.15 0.18 28.57Q0 26 0 22.05Q0 18.60 0.73 15.72Q1.45 12.85 2.68 10.85Q3.90 8.85 5.45 7.32Q7 5.80 8.83 4.95Q10.65 4.10 12.38 3.67Q14.10 3.25 15.85 3.25Q17.95 3.25 20.00 3.82Q22.05 4.40 24.15 5.80Q26.25 7.20 27.83 9.27Q29.40 11.35 30.40 14.65Q31.40 17.95 31.40 22.05Q31.40 28.65 30.93 31.82Q30.45 35 29.33 36.25Q28.20 37.50 25.85 37.50Q22.55 37.50 21.20 36.30Q19.85 35.10 19.85 32.55L19.85 29.90Z",
    "M30.80 9.25L30.80 24.15Q30.80 31.45 27.27 34.63Q23.75 37.80 15.40 37.80Q7.45 37.80 3.72 34.40Q0 31 0 24.15L0 9.25Q0 6.60 1.58 4.92Q3.15 3.25 5.55 3.25Q8.50 3.25 10.03 4.35Q11.55 5.45 11.55 8.80L11.55 25.10Q11.60 26.70 12.08 27.65Q12.55 28.60 13.35 28.98Q14.15 29.35 15.40 29.35Q16.65 29.35 17.45 29.05Q18.25 28.75 18.63 28.10Q19 27.45 19.13 26.80Q19.25 26.15 19.25 25.10L19.25 8.75Q19.25 7.05 19.68 5.90Q20.10 4.75 20.98 4.20Q21.85 3.65 22.77 3.45Q23.70 3.25 25 3.25Q27.90 3.25 29.35 4.65Q30.80 6.05 30.80 9.25Z",
    "M19.20 13.20Q19.20 10.80 17.45 9.90Q15.70 9 11.55 9L11.55 17.65Q15.45 17.65 17.33 16.67Q19.20 15.70 19.20 13.20M11.55 30Q11.55 37.50 5.70 37.50Q2.75 37.50 1.38 35.92Q0 34.35 0 30.35L0 9.25Q0 6.35 1.58 4.82Q3.15 3.30 5.70 3.30L16.20 3.30Q22.35 3.30 26.15 6.17Q29.95 9.05 29.95 13.55Q29.95 16.95 28.53 18.88Q27.10 20.80 23.95 21.70Q26.35 21.85 28.40 24.02Q30.45 26.20 30.45 29.45Q30.45 32.75 29.83 34.52Q29.20 36.30 28.05 36.90Q26.90 37.50 24.80 37.50Q21.85 37.50 20.48 36.27Q19.10 35.05 19.10 32.55Q19.10 29.45 18.50 27.77Q17.90 26.10 16.95 25.60Q16 25.10 14.30 25.10L11.55 25.15L11.55 30Z",
    "M15.75 11.40Q13.60 11.40 12.58 12.65Q11.55 13.90 11.55 17.10L11.55 23L19.85 23L19.85 17Q19.85 14.90 19.35 13.63Q18.85 12.35 17.98 11.88Q17.10 11.40 15.75 11.40M19.85 29.90L11.55 29.90L11.55 32.55Q11.55 35.10 10.20 36.30Q8.85 37.50 5.55 37.50Q4.15 37.50 3.25 37.10Q2.35 36.70 1.68 35.75Q1.00 34.80 0.68 32.98Q0.35 31.15 0.18 28.57Q0 26 0 22.05Q0 18.60 0.73 15.72Q1.45 12.85 2.68 10.85Q3.90 8.85 5.45 7.32Q7 5.80 8.83 4.95Q10.65 4.10 12.38 3.67Q14.10 3.25 15.85 3.25Q17.95 3.25 20.00 3.82Q22.05 4.40 24.15 5.80Q26.25 7.20 27.83 9.27Q29.40 11.35 30.40 14.65Q31.40 17.95 31.40 22.05Q31.40 28.65 30.93 31.82Q30.45 35 29.33 36.25Q28.20 37.50 25.85 37.50Q22.55 37.50 21.20 36.30Q19.85 35.10 19.85 32.55L19.85 29.90Z",
  ];
}

const StyledWrapper = styled.div`
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f0f0f0;
    margin: 0;
  }

  .loader {
    display: flex;
    align-items: center;
    position: relative;
  }

  .loader svg {
    margin: 0 5px;
    width: 64px;
    height: 64px;
  }

  .absolute {
    position: absolute;
  }

  .w-2 {
    width: 0.5em;
  }

  /* Animations */
  .dash {
    animation:
      dashArray 2s ease-in-out infinite,
      dashOffset 2s linear infinite;
  }

  /* Keyframe animations from the third file */
  @keyframes dashArray {
    0% {
      stroke-dasharray: 0 1 359 0;
    }
    50% {
      stroke-dasharray: 0 359 1 0;
    }
    100% {
      stroke-dasharray: 359 1 0 0;
    }
  }

  @keyframes dashOffset {
    0% {
      stroke-dashoffset: 365;
    }
    100% {
      stroke-dashoffset: 5;
    }
  }

  /* Dégradés */
  .gradient-b {
    stroke: url(#b);
  }

  .gradient-c {
    stroke: url(#c);
  }

  .gradient-d {
    stroke: url(#d);
  }
`;

export default Preloader;