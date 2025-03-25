
import { useEffect, useRef } from "react";

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current || !textContainerRef.current || !imageRef.current || !overlayRef.current) return;
      
      const scrollPosition = window.scrollY;
      const heroHeight = heroRef.current.offsetHeight;
      
      // Parallax effect for image (moves faster than text)
      imageRef.current.style.transform = `translateY(${scrollPosition * 0.4}px)`;
      
      // Parallax effect for text (stays more in place)
      textContainerRef.current.style.transform = `translateY(${scrollPosition * 0.1}px)`;
      
      // Opacity effect based on scroll
      const opacity = Math.max(1 - scrollPosition / (heroHeight * 0.5), 0);
      textContainerRef.current.style.opacity = opacity.toString();
      
      // Increase overlay darkness as user scrolls
      overlayRef.current.style.background = `rgba(0, 0, 0, ${0.2 + (scrollPosition / heroHeight) * 0.3})`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={heroRef} className="relative h-screen overflow-hidden">
      {/* Background image */}
      <div 
        ref={imageRef}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat w-[120%] h-[120%] -top-10 -left-10"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1486325212027-8081e485255e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
          transition: "transform 0.3s ease-out"
        }}
      />
      
      {/* Semi-transparent overlay */}
      <div ref={overlayRef} className="absolute inset-0 bg-black/20 transition-colors duration-300"></div>
      
      {/* Text overlay */}
      <div 
        ref={textContainerRef}
        className="relative h-full flex flex-col justify-center items-start text-white z-10 pt-16 px-6 md:px-12 lg:px-24"
        style={{ transition: "transform 0.3s ease-out, opacity 0.3s ease-out" }}
      >
        <div className="max-w-7xl">
          <h1 className="text-[4rem] md:text-[5.5rem] lg:text-[7rem] font-bold leading-none tracking-tighter uppercase">
            HALO
          </h1>
          <h1 className="text-[4rem] md:text-[5.5rem] lg:text-[7rem] font-bold leading-none tracking-tighter uppercase">
            Architect
          </h1>
          
          <div className="mt-8 max-w-xl">
            <p className="text-lg md:text-xl">
              Transforming spaces with sustainable, modern, and luxury architectural designs
            </p>
            
            <div className="mt-8 flex gap-4">
              <a 
                href="#projects" 
                className="px-8 py-3 bg-white text-black font-medium rounded-md hover:bg-opacity-90 transition-all transform hover:scale-105"
              >
                View Our Work
              </a>
              <a 
                href="/schedule" 
                className="px-8 py-3 bg-transparent border-2 border-white text-white font-medium rounded-md hover:bg-white/10 transition-all transform hover:scale-105"
              >
                Book a Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="text-white"
        >
          <path 
            d="M12 5V19M12 19L5 12M12 19L19 12" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}
