import React, { useState, useEffect } from "react"

const Preloader = () => {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timer)
          setTimeout(() => setLoading(false), 500)
          return 100
        }
        return prevProgress + 2.5
      })
    }, 100)

    return () => clearInterval(timer)
  }, [])

  if (!loading) return null

  return (
    
    <div className="preloader">
      
      <h1 className="title">TEAM OJAS</h1>
      <div className="loading-bar">
        <div className="loading-progress" style={{ width: `${progress}%` }} />
      </div>
      <div className="particles">
        {[...Array(20)].map((_, index) => (
          <div key={index} className="particle" />
        ))}
      </div>
      <style jsx>{`
        .preloader {
          height: 100vh;
          width: 100vw;
          background: #000000;
          position: fixed;
          top: 0;
          left: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          z-index: 1000;
          overflow: hidden;
          animation: backgroundAnimation 10s ease infinite;
        }

        @keyframes backgroundAnimation {
          0% {
            background: #000000;
          }
          50% {
            background: #1a1a1a;
          }
          100% {
            background: #000000;
          }
        }

        .title {
          font-size: 5rem;
          font-weight: bold;
          color: transparent;
          background-image: linear-gradient(45deg, #8a2be2, #da70d6, #9370db);
          background-size: 300% 300%;
          background-clip: text;
          -webkit-background-clip: text;
          position: relative;
          z-index: 10;
          animation: pulse 2s infinite, glitch 5s infinite, gradientFlow 5s ease infinite, wave 1s infinite;
        }

        @keyframes wave {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        @keyframes glitch {
          0%, 100% {
            text-shadow: none;
          }
          20% {
            text-shadow: 3px 3px 0 #8a2be2, -3px -3px 0 #da70d6;
          }
          40% {
            text-shadow: -3px 3px 0 #8a2be2, 3px -3px 0 #da70d6;
          }
          60% {
            text-shadow: 3px -3px 0 #8a2be2, -3px 3px 0 #da70d6;
          }
          80% {
            text-shadow: -3px -3px 0 #8a2be2, 3px 3px 0 #da70d6;
          }
        }

        @keyframes gradientFlow {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .loading-bar {
          width: 300px;
          height: 4px;
          background: rgba(255, 255, 255, 0.1);
          margin-top: 20px;
          position: relative;
          overflow: hidden;
          border-radius: 2px;
        }

        .loading-progress {
          height: 100%;
          background: linear-gradient(90deg, #8a2be2, #da70d6, #9370db);
          background-size: 200% 100%;
          animation: gradientMove 2s linear infinite;
          transition: width 0.1s ease-out;
          box-shadow: 0 0 10px rgba(138, 43, 226, 0.5), 0 0 20px rgba(218, 112, 214, 0.5);
        }

        @keyframes gradientMove {
          0% {
            background-position: 100% 0%;
          }
          100% {
            background-position: -100% 0%;
          }
        }

        .particles {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .particle {
          position: absolute;
          width: 10px;
          height: 10px;
          background: linear-gradient(135deg, #8a2be2, #da70d6);
          border-radius: 50%;
          animation: float 4s infinite, colorChange 5s infinite alternate;
          opacity: 0.6;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          25% {
            opacity: 0.6;
          }
          50% {
            transform: translateY(-200px) translateX(100px) rotate(360deg);
            opacity: 0;
          }
          75% {
            opacity: 0.6;
          }
        }

        @keyframes colorChange {
          0% {
            background: linear-gradient(135deg, #8a2be2, #da70d6);
          }
          50% {
            background: linear-gradient(135deg, #da70d6, #9370db);
          }
          100% {
            background: linear-gradient(135deg, #9370db, #8a2be2);
          }
        }

        .particle:nth-child(even) {
          animation: float 4s infinite, colorChangeReverse 5s infinite alternate;
        }

        @keyframes colorChangeReverse {
          0% {
            background: linear-gradient(135deg, #9370db, #8a2be2);
          }
          50% {
            background: linear-gradient(135deg, #da70d6, #9370db);
          }
          100% {
            background: linear-gradient(135deg, #8a2be2, #da70d6);
          }
        }

        .particle:nth-child(3n) {
          animation-delay: 0.5s;
        }

        .particle:nth-child(3n + 1) {
          animation-delay: 1s;
        }

        .particle:nth-child(3n + 2) {
          animation-delay: 1.5s;
        }
      `}</style>
    </div>
  )
}

export default Preloader