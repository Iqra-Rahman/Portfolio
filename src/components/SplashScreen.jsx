import { use } from "react";
import{useEffect, useState} from "react";
import { Typewriter } from "react-simple-typewriter";

export default function SplashScreen({onFinish}) {
    const [fade, setFade] = useState(false);
    useEffect(() => {
        const timer1 = setTimeout(() => setFade(true), 1000);
        const timer = setTimeout(() => {
            onFinish();
        }, 2500); // Display splash screen for 4 second

        return () => {
      clearTimeout(timer1);
      clearTimeout(timer);
    };
    }, [onFinish]);

    return (
        <div className={`flex items-center justify-center h-screen bg-black transition-opacity duration-50${
        fade ? "opacity-0" : "opacity-100"
      }`}
>
      <div className="text-center text-amber-50">
        {/* Gradient Text */}
        <h1 className="text-8xl font-extrabold bg-gradient-to-r from-[#96cdf2] to-[#0454ff] bg-clip-text text-transparent">
          Hello World!
        </h1>
        <h1 className="text-6xl font-bold mt-2"><h1 className="text-6xl font-bold mt-2"><Typewriter
            words={[
              "Welcome to My Portfolio"
            ]}
            loop={false} // set true if you want it to keep looping
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          /></h1></h1>
      </div>
    </div>
    );
}