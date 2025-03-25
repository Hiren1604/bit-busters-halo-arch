
import { useState, useEffect, useRef } from "react";

// Animated counter component
const AnimatedCounter = ({ endValue, label }: { endValue: number, label: string }) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const increment = endValue / 30; // Divide by number of steps
          const timer = setInterval(() => {
            start += increment;
            if (start >= endValue) {
              setCount(endValue);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 30);
          
          return () => clearInterval(timer);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
      }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [endValue, hasAnimated]);

  return (
    <div className="text-center" ref={counterRef}>
      <h3 className="text-3xl font-bold">{count}{endValue === 12 ? '+' : '+'}</h3>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  );
};

export default function AboutSection() {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block px-3 py-1 bg-secondary/50 rounded-full text-sm font-medium mb-2">
              Our Story
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold">
              Transforming Spaces With Vision & Purpose
            </h2>
            <p className="text-muted-foreground">
              Founded in 2010, HALO Architect has established itself as a leader in sustainable and
              luxury architectural designs. We believe that great architecture goes beyond aesthetics;
              it shapes how people experience spaces and interact with their environment.
            </p>
            <p className="text-muted-foreground">
              Our team of visionary architects and designers are dedicated to creating spaces that are
              not only visually stunning but also functional, sustainable, and tailored to our clients' needs.
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6">
              <AnimatedCounter endValue={12} label="Years Experience" />
              <AnimatedCounter endValue={150} label="Projects Completed" />
              <AnimatedCounter endValue={18} label="Expert Architects" />
              <AnimatedCounter endValue={42} label="Design Awards" />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="overflow-hidden rounded-lg h-60">
                <img 
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                  alt="Modern residential building" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="overflow-hidden rounded-lg h-40">
                <img 
                  src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1175&q=80" 
                  alt="Interior design" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="space-y-4 pt-10">
              <div className="overflow-hidden rounded-lg h-40">
                <img 
                  src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80" 
                  alt="Architectural detail" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="overflow-hidden rounded-lg h-60">
                <img 
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                  alt="Modern building" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
