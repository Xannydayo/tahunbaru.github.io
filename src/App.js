import Particles from 'react-particles';
import { loadFireworksPreset } from 'tsparticles-preset-fireworks';
import { Typewriter } from 'react-simple-typewriter';
import { useState } from 'react';
import Countdown from 'react-countdown';

function App() {
  const [newYearMessage, setNewYearMessage] = useState(['Goodbye 2024!']);

  const particlesinitialization = async (engine) => {
    await loadFireworksPreset(engine);
  };

  function timeleft() {
    const newYearDate = new Date('January 1, 2025 00:00:00').getTime();
    const nowDate = new Date().getTime();
    const remainingTime = newYearDate - nowDate;
    return remainingTime;
  }

  return (
    <>
      <Particles
        init={particlesinitialization}
        options={{ preset: 'fireworks' }}
      />
      <div className="flex flex-col justify-center items-center min-h-screen gap-4">
        <span className="text-white text-4xl font-bold px-4 z-50">
          <Typewriter
            words={newYearMessage}
            loop={false}
            cursorStyle={'_'}
            cursorColor="grey"
            cursor
          />
        </span>
        <div className="z-50 text-white font-bold text-2xl pt-1">
          <Countdown
            date={Date.now() + timeleft()}
            onComplete={() => setNewYearMessage(['Selamat', 'Tahun', 'Baru', '2024!!!'])}
          />
        </div>
      </div>
    </>
  );
}

export default App;
