import React, { useState, useEffect } from "react"

const Preloader = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000)
    return () => clearTimeout(timer)
  }, [])

  if (!loading) return null

  return (
    <div className="preloader">
      <div className="circuit-board">
        <div className="board-grid">
          {[...Array(100)].map((_, index) => (
            <div key={index} className="grid-point"></div>
          ))}
        </div>
        <div className="circuit-overlay"></div>
        <div className="components">
          <div className="main-microcontroller">
            <div className="chip-surface">
              {[...Array(20)].map((_, index) => (
                <div key={index} className="chip-detail"></div>
              ))}
            </div>
            <div className="microcontroller-pins">
              {[...Array(40)].map((_, index) => (
                <div key={index} className="pin"></div>
              ))}
            </div>
          </div>
          <div className="secondary-chips">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="secondary-chip">
                <div className="chip-glitch"></div>
              </div>
            ))}
          </div>
          <div className="connection-lines">
            {[...Array(25)].map((_, index) => (
              <div 
                key={index} 
                className="line" 
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  width: `${Math.random() * 200}px`
                }}
              ></div>
            ))}
          </div>
          <div className="led-cluster">
            {[...Array(6)].map((_, index) => (
              <div key={index} className={`led led-${index + 1}`}></div>
            ))}
          </div>
          <div className="team-ojas">TEAM OJAS</div>
        </div>
        <div className="electronic-noise"></div>
        <div className="circuit-sparks">
          {[...Array(10)].map((_, index) => (
            <div 
              key={index} 
              className="spark"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        .preloader {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background-color: #0a0a0a;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
          overflow: hidden;
        }

        .circuit-board {
          position: relative;
          width: 800px;
          height: 700px;
          background-color: #121212;
          border-radius: 15px;
          box-shadow: 
            0 0 50px rgba(0,255,255,0.3),
            inset 0 0 60px rgba(0,255,255,0.1);
          overflow: hidden;
        }

        .circuit-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: repeating-linear-gradient(
            45deg,
            transparent,
            transparent 10px,
            rgba(0,255,255,0.05) 10px,
            rgba(0,255,255,0.05) 20px
          );
          opacity: 0.2;
          z-index: 1;
        }

        .board-grid {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: grid;
          grid-template-columns: repeat(10, 1fr);
          opacity: 0.1;
        }

        .grid-point {
          width: 100%;
          height: 60px;
          border: 1px solid rgba(0,255,255,0.05);
        }

        .components {
          position: relative;
          width: 100%;
          height: 100%;
          z-index: 2;
        }

        .main-microcontroller {
          position: absolute;
          top: 35%;
          left: 50%;
          transform: translateX(-50%);
          width: 250px;
          height: 150px;
          background-color: #1e1e1e;
          border-radius: 10px;
          box-shadow: 
            0 0 20px rgba(0,255,255,0.5),
            0 10px 30px rgba(0,0,0,0.7),
            inset 0 0 30px rgba(0,255,255,0.2);
          animation: micro-pulse 5s infinite alternate;
          overflow: hidden;
          perspective: 500px;
          transform-style: preserve-3d;
          transition: all 0.3s ease;
        }

        .main-microcontroller:hover {
          transform: translateX(-50%) rotateX(10deg) rotateY(5deg) scale(1.05);
          box-shadow: 
            0 0 30px rgba(0,255,255,0.7),
            0 15px 40px rgba(0,0,0,0.8),
            inset 0 0 40px rgba(0,255,255,0.3);
        }

        .microcontroller-pins {
          position: absolute;
          top: -10px;
          left: 0;
          width: 100%;
          display: flex;
          justify-content: space-around;
          flex-wrap: wrap;
          transform: translateZ(10px);
        }

        .pin {
          width: 5px;
          height: 15px;
          background-color: #2c3e50;
          margin: 2px;
          animation: pin-flicker 1s infinite alternate;
          box-shadow: 0 0 5px rgba(0,255,255,0.3);
          transition: all 0.2s ease;
        }

        .pin:hover {
          transform: translateZ(5px) scale(1.2);
          background-color: #00ffff;
        }

        .chip-surface {
          position: absolute;
          top: 10%;
          left: 10%;
          width: 80%;
          height: 80%;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 5px;
        }

        .chip-detail {
          background-color: #2c3e50;
          border-radius: 2px;
          opacity: 0.7;
          animation: chip-flicker 1s infinite alternate;
        }

        .secondary-chips {
          position: absolute;
          bottom: 20px;
          display: flex;
          justify-content: space-around;
          width: 100%;
        }

        .secondary-chip {
          position: relative;
          width: 50px;
          height: 30px;
          background-color: #34495e;
          border-radius: 3px;
          animation: chip-pulse 2s infinite alternate;
          overflow: hidden;
        }

        .chip-glitch {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            to right,
            transparent,
            rgba(0,255,255,0.2),
            transparent
          );
          animation: glitch-scan 1s infinite;
          opacity: 0.3;
        }

        .connection-lines {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .line {
          position: absolute;
          background: linear-gradient(to right, rgba(0,255,255,0.2), transparent);
          height: 2px;
          opacity: 0.3;
          animation: line-scan 3s linear infinite;
        }

        .led-cluster {
          position: absolute;
          top: 30px;
          right: 30px;
          display: flex;
          gap: 15px;
        }

        .led {
          width: 15px;
          height: 15px;
          border-radius: 50%;
          box-shadow: 0 0 15px;
        }

        .led-1 { background-color: #e74c3c; animation: led-pulse 1s infinite alternate; }
        .led-2 { background-color: #2ecc71; animation: led-pulse 1.2s infinite alternate; }
        .led-3 { background-color: #3498db; animation: led-pulse 1.4s infinite alternate; }
        .led-4 { background-color: #f39c12; animation: led-pulse 1.6s infinite alternate; }
        .led-5 { background-color: #9b59b6; animation: led-pulse 1.8s infinite alternate; }
        .led-6 { background-color: #1abc9c; animation: led-pulse 2s infinite alternate; }

        .electronic-noise {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            transparent,
            rgba(0,255,255,0.05)
          );
          animation: noise 0.2s infinite;
        }

        .team-ojas {
          position: absolute;
          bottom: 70px;
          left: 50%;
          transform: translateX(-50%);
          color: cyan;
          font-family: monospace;
          font-size: 50px;
          text-shadow: 0 0 10px rgba(0,255,255,0.7);
          letter-spacing: 2px;
          animation: team-ojas-pulse 2s infinite alternate;
        }

        .circuit-sparks {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .spark {
          position: absolute;
          width: 2px;
          height: 20px;
          background: linear-gradient(to bottom, rgba(0,255,255,0.5), transparent);
          transform: rotate(45deg);
          animation: spark-effect 1s infinite;
          opacity: 0.7;
        }

        @keyframes micro-pulse {
          0% { transform: translateX(-50%) scale(0.98); }
          100% { transform: translateX(-50%) scale(1.02); }
        }

        @keyframes chip-flicker {
          0% { opacity: 0.6; }
          100% { opacity: 0.9; }
        }

        @keyframes pin-flicker {
          0% { opacity: 0.4; background-color: #2c3e50; }
          100% { opacity: 0.8; background-color: #34495e; }
        }

        @keyframes chip-pulse {
          0% { transform: scale(0.95); }
          100% { transform: scale(1.05); }
        }

        @keyframes led-pulse {
          0% { transform: scale(0.8); opacity: 0.7; }
          100% { transform: scale(1); opacity: 1; }
        }

        @keyframes line-scan {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        @keyframes noise {
          0% { background-position: 0 0; }
          100% { background-position: 100% 100%; }
        }

        @keyframes team-ojas-pulse {
          0% { transform: translateX(-50%) scale(0.95); opacity: 0.7; }
          100% { transform: translateX(-50%) scale(1); opacity: 1; }
        }

        @keyframes glitch-scan {
          0% { transform: translateX(-100%); }
           0% { transform: translateX(-50%); }
          100% { transform: translateX(100%); }
        }

        @keyframes spark-effect {
          0% { 
            opacity: 0.7; 
            transform: rotate(45deg) scale(1);
          }
             20% { 
            opacity: 0.3; 
            transform: rotate(45deg) scale(1.2);
          }
          50% { 
            opacity: 0.3; 
            transform: rotate(45deg) scale(1.2);
          }
             70% { 
            opacity: 0.3; 
            transform: rotate(45deg) scale(1.2);
          }
          100% { 
            opacity: 0; 
            transform: rotate(45deg) scale(0.5);
          }
        }
      `}</style>
    </div>
  )
}

export default Preloader