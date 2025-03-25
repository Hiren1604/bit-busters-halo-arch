import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "The Glass Pavilion",
    category: "Residential",
    location: "Beverly Hills, CA",
    year: "2022",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    description: "A modern residence with open spaces and floor-to-ceiling glass walls that blur the line between indoor and outdoor living."
  },
  {
    id: 2,
    title: "Eco Urban Tower",
    category: "Commercial",
    location: "Seattle, WA",
    year: "2021",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    description: "A sustainable office building featuring renewable energy systems, living walls, and smart technology for optimal efficiency."
  },
  {
    id: 3,
    title: "Serenity Spa Retreat",
    category: "Hospitality",
    location: "Sedona, AZ",
    year: "2023",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
    description: "A luxury wellness center designed to harmonize with the natural landscape, using local materials and passive design strategies."
  },
  {
    id: 4,
    title: "Horizon House",
    category: "Residential",
    location: "Malibu, CA",
    year: "2022",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    description: "A cliffside residence with cantilevered elements that appear to float above the ocean, offering panoramic views and privacy."
  },
  {
    id: 5,
    title: "Nova Art Gallery",
    category: "Cultural",
    location: "Chicago, IL",
    year: "2021",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    description: "A contemporary art space that transforms throughout the day with dynamic lighting and movable exhibition walls."
  },
  {
    id: 6,
    title: "Terraced Garden Lofts",
    category: "Multi-Residential",
    location: "Portland, OR",
    year: "2023",
    image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    description: "Urban apartments featuring private garden terraces on each level, creating a vertical community of green living spaces."
  }
];

export default function ProjectsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Function to handle card hover
  const handleHover = (index: number) => {
    setActiveIndex(index);
  };

  // Navigation functions
  const handleNext = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="projects" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 bg-secondary rounded-full text-sm font-medium mb-2">
            Our Portfolio
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground">
            Explore our diverse portfolio of architectural projects that showcase our creativity,
            technical expertise, and commitment to excellence.
          </p>
        </div>
        
        <div 
          ref={containerRef}
          className="relative h-[500px] md:h-[650px] w-full overflow-hidden mx-auto"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="absolute top-0 left-0 w-full h-full flex justify-center items-center"
              initial={false}
              animate={{
                zIndex: activeIndex === index ? 10 : 0,
                x: `${(index - activeIndex) * 8}%`,
                scale: activeIndex === index ? 1 : 0.9 - Math.min(0.05 * Math.abs(index - activeIndex), 0.2),
                opacity: activeIndex === index ? 1 : 0.6 - Math.min(0.1 * Math.abs(index - activeIndex), 0.4),
                transition: { duration: 0.5, ease: "easeInOut" }
              }}
              whileHover={{ scale: activeIndex === index ? 1.02 : 0.95 }}
              onHoverStart={() => handleHover(index)}
            >
              <Link 
                to={`/projects/${project.id}`}
                className="w-[85%] max-w-[500px] h-full relative rounded-lg overflow-hidden shadow-xl cursor-pointer"
              >
                <div className="absolute inset-0 w-full h-full">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 opacity-100">
                    <div className="absolute bottom-0 left-0 p-6 text-white w-full">
                      <p className="text-sm font-medium text-white/80">{project.category}</p>
                      <h3 className="text-xl md:text-2xl font-bold">{project.title}</h3>
                      
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ 
                          height: activeIndex === index ? 'auto' : 0,
                          opacity: activeIndex === index ? 1 : 0
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="text-sm text-white/80 mt-2">{project.description}</p>
                        <p className="text-sm font-medium mt-2">{project.location} · {project.year}</p>
                        <motion.p 
                          className="inline-flex items-center text-white mt-4 text-sm"
                          whileHover={{ x: 5 }}
                        >
                          View Project <ArrowRight className="ml-1 h-4 w-4" />
                        </motion.p>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        
        {/* Navigation Buttons */}
        <div className="absolute top-1/2 left-0 right-0 flex justify-between px-4 md:px-8 transform -translate-y-1/2 z-20">
          <motion.button
            onClick={handlePrev}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full p-2 text-black shadow-lg transition-all"
          >
            <ChevronLeft className="h-8 w-8" />
          </motion.button>
          <motion.button
            onClick={handleNext}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full p-2 text-black shadow-lg transition-all"
          >
            <ChevronRight className="h-8 w-8" />
          </motion.button>
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            to="/projects" 
            className="px-6 py-3 bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-opacity inline-block"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}