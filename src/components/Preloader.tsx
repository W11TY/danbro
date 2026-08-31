import { useState, useEffect } from 'react';

export const Preloader = () => {
  const [isReady, setIsReady] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    // Wait for minimum time to show animation, and ensure window is loaded
    const minTimePromise = new Promise(resolve => setTimeout(resolve, 2500));
    
    const loadPromise = new Promise(resolve => {
      if (document.readyState === 'complete') {
        resolve(null);
      } else {
        window.addEventListener('load', () => resolve(null));
      }
    });

    Promise.all([minTimePromise, loadPromise]).then(() => {
      setIsReady(true);
      // Remove from DOM after fade out transition (500ms)
      setTimeout(() => setShouldRender(false), 500);
    });
  }, []);

  if (!shouldRender) return null;

  return (
    <div 
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-[#d9d6d7] transition-opacity duration-500 ${
        isReady ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <video 
          src="/danbro/pour/loader.mp4" 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover animate-pulse"
        />
      </div>
    </div>
  );
};
