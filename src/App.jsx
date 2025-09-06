import { useState, useEffect } from "react";
import SplashScreen from "./components/SplashScreen.jsx";
import HomePage from "./HomePage.jsx";

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    if (!showSplash) {
      setTimeout(() => setFadeIn(true), 50);
    }
  }, [showSplash]);

  return (
    <>
     <div className="device-message">
        For the best view, try opening on larger screen.
      </div>
    <div className="min-h-screen transition-colors duration-700 bg-black">
      {showSplash ? (
        <SplashScreen onFinish={() => setShowSplash(false)} />
      ) : (
        <div
          className={`transition-opacity duration-700 ${
            fadeIn ? "opacity-100" : "opacity-0"
          }`}
        >
          <HomePage />
        </div>
      )}
    </div>
    </>
  );
}

export default App;
