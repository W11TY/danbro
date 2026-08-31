import { useEffect, useRef } from "react";

const FRAME_COUNT = 60;

export function ScrollAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const images: HTMLImageElement[] = [];
    let imagesLoaded = 0;

    // Set high-res canvas dimensions
    canvas.width = 1920;
    canvas.height = 1080;

    const render = (frameIndex: number) => {
      if (images[frameIndex]) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        
        const img = images[frameIndex];
        const hRatio = canvas.width / img.width;
        const vRatio = canvas.height / img.height;
        const ratio = Math.max(hRatio, vRatio);
        const centerShift_x = (canvas.width - img.width * ratio) / 2;
        const centerShift_y = (canvas.height - img.height * ratio) / 2;  

        context.drawImage(
          img, 
          0, 0, img.width, img.height,
          centerShift_x, centerShift_y, img.width * ratio, img.height * ratio
        );
      }
    };

    const preloadImages = () => {
      for (let i = 1; i <= FRAME_COUNT; i++) {
        const img = new Image();
        const indexStr = i.toString().padStart(3, "0");
        img.src = `/3d/ezgif-frame-${indexStr}.png`;
        img.onload = () => {
          imagesLoaded++;
          if (imagesLoaded === 1) {
            // Render first frame immediately once loaded if scroll is at top
            render(0);
            handleScroll();
          }
        };
        images.push(img);
      }
    };

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!containerRef.current) return;
          
          const rect = containerRef.current.getBoundingClientRect();
          // Scroll progress inside the container (0 to 1)
          const scrollProgress = -rect.top / (rect.height - window.innerHeight);
          
          let frameIndex = 0;
          if (scrollProgress >= 0 && scrollProgress <= 1) {
             frameIndex = Math.floor(scrollProgress * (FRAME_COUNT - 1));
          } else if (scrollProgress > 1) {
             frameIndex = FRAME_COUNT - 1;
          }
          
          render(frameIndex);
          ticking = false;
        });
        ticking = true;
      }
    };

    preloadImages();
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    // 300vh creates enough scrollable space to scrub the 60 frames smoothly
    <section ref={containerRef} className="relative h-[300vh] w-full bg-[#E5E5E5]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas 
          ref={canvasRef} 
          className="h-full w-full object-cover"
        />
      </div>
    </section>
  );
}
