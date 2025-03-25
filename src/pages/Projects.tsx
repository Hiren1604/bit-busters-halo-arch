
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, ChevronUp } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "The Glass Pavilion",
    category: "Residential",
    location: "Beverly Hills, CA",
    year: "2022",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    description: "A modern residence with open spaces and floor-to-ceiling glass walls that blur the line between indoor and outdoor living.",
    featured: true
  },
  {
    id: 2,
    title: "Eco Urban Tower",
    category: "Commercial",
    location: "Seattle, WA",
    year: "2021",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    description: "A sustainable office building featuring renewable energy systems, living walls, and smart technology for optimal efficiency.",
    featured: true
  },
  {
    id: 3,
    title: "Serenity Spa Retreat",
    category: "Hospitality",
    location: "Sedona, AZ",
    year: "2023",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
    description: "A luxury wellness center designed to harmonize with the natural landscape, using local materials and passive design strategies.",
    featured: true
  },
  {
    id: 4,
    title: "Horizon House",
    category: "Residential",
    location: "Malibu, CA",
    year: "2022",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    description: "A cliffside residence with cantilevered elements that appear to float above the ocean, offering panoramic views and privacy.",
    featured: true
  },
  {
    id: 5,
    title: "Nova Art Gallery",
    category: "Cultural",
    location: "Chicago, IL",
    year: "2021",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    description: "A contemporary art space that transforms throughout the day with dynamic lighting and movable exhibition walls.",
    featured: false
  },
  {
    id: 6,
    title: "Terraced Garden Lofts",
    category: "Multi-Residential",
    location: "Portland, OR",
    year: "2023",
    image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    description: "Urban apartments featuring private garden terraces on each level, creating a vertical community of green living spaces.",
    featured: false
  },
  {
    id: 7,
    title: "Waterfront Office Campus",
    category: "Commercial",
    location: "Boston, MA",
    year: "2020",
    image: "https://images.unsplash.com/photo-1577493340887-b7bfff550145?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    description: "A tech company headquarters with collaborative spaces, sustainable design, and panoramic harbor views.",
    featured: false
  },
  {
    id: 8,
    title: "Desert Oasis Villa",
    category: "Residential",
    location: "Palm Springs, CA",
    year: "2021",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    description: "A desert home designed to maximize thermal comfort through passive cooling and strategic orientation.",
    featured: false
  },
  {
    id: 9,
    title: "Urban Micro Apartments",
    category: "Multi-Residential",
    location: "New York, NY",
    year: "2022",
    image: "https://images.unsplash.com/photo-1515263487990-61b07816b324?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    description: "Innovative small-space living with transformable furniture and communal amenities to maximize urban comfort.",
    featured: false
  },
  {
    id: 10,
    title: "Mountain Lodge Retreat",
    category: "Hospitality",
    location: "Aspen, CO",
    year: "2020",
    image: "https://images.unsplash.com/photo-1542718610-a1d656d1884c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    description: "A luxury mountain resort that combines traditional alpine aesthetics with modern amenities and sustainability.",
    featured: false
  },
  {
    id: 11,
    title: "Coastal Restaurant Pavilion",
    category: "Hospitality",
    location: "Miami, FL",
    year: "2023",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    description: "An oceanfront dining destination with retractable walls that open fully to embrace sea breezes and views.",
    featured: false
  },
  {
    id: 12,
    title: "Minimalist Urban Residence",
    category: "Residential",
    location: "San Francisco, CA",
    year: "2022",
    image: "https://images.unsplash.com/photo-1503174971373-b1f69850bded?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1513&q=80",
    description: "A city home designed with clean lines, multifunctional spaces, and a rooftop garden with panoramic views.",
    featured: false
  }
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const categories = ["All", "Residential", "Commercial", "Hospitality", "Cultural", "Multi-Residential"];
  
  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-16">
        {/* Page Header */}
        <div className="bg-secondary/30 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Our Projects</h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Explore our portfolio of architectural work spanning residential, commercial, and cultural spaces.
            </p>
          </div>
        </div>
        
        {/* Project Filters */}
        <div className="py-8 bg-background border-b border-border sticky top-16 z-20 backdrop-blur-md bg-background/90">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeFilter === category 
                      ? "bg-primary text-primary-foreground" 
                      : "bg-secondary/50 hover:bg-secondary/80"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Projects Carousel */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col space-y-8">
              {filteredProjects.map((project, index) => {
                const isHovered = hoveredIndex === index;
                
                return (
                  <motion.div
                    key={project.id}
                    className="group relative overflow-hidden rounded-xl border border-border"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <Link to={`/projects/${project.id}`}>
                      <div className="grid grid-cols-1 md:grid-cols-5 overflow-hidden">
                        {/* Project Image */}
                        <motion.div 
                          className="md:col-span-2 aspect-video md:aspect-auto overflow-hidden relative"
                          animate={{
                            height: isHovered ? "auto" : "auto",
                          }}
                        >
                          <img 
                            src={project.image} 
                            alt={project.title} 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          {project.featured && (
                            <div className="absolute top-4 left-4">
                              <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                                Featured
                              </span>
                            </div>
                          )}
                        </motion.div>
                        
                        {/* Project Content */}
                        <motion.div 
                          className="md:col-span-3 p-6 md:p-8 flex flex-col justify-between bg-gradient-to-r from-background to-secondary/10"
                          animate={{
                            height: isHovered ? "auto" : "auto",
                          }}
                        >
                          <div>
                            <div className="flex justify-between items-center mb-3">
                              <p className="text-sm text-primary/70 font-medium">{project.category}</p>
                              <p className="text-sm text-muted-foreground">{project.year}</p>
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                            <p className="text-muted-foreground mb-6">{project.description}</p>
                            <p className="text-sm font-medium mb-8">{project.location}</p>
                            
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ 
                                height: isHovered ? 'auto' : 0,
                                opacity: isHovered ? 1 : 0
                              }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <p className="text-sm text-muted-foreground mb-4">
                                Click to view detailed timeline, team members, and the complete journey from concept to completion.
                              </p>
                            </motion.div>
                          </div>
                          
                          <motion.div 
                            className="flex items-center justify-between mt-4"
                            animate={{
                              y: isHovered ? 0 : 10,
                              opacity: isHovered ? 1 : 0.8
                            }}
                          >
                            <span className="inline-flex items-center text-primary gap-2 font-medium">
                              View Project <ArrowRight className="h-4 w-4" />
                            </span>
                            {isHovered ? (
                              <ChevronUp className="h-5 w-5 text-muted-foreground" />
                            ) : (
                              <ChevronDown className="h-5 w-5 text-muted-foreground" />
                            )}
                          </motion.div>
                        </motion.div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
              
              {filteredProjects.length === 0 && (
                <div className="text-center py-16">
                  <h3 className="text-xl font-bold mb-2">No projects found</h3>
                  <p className="text-muted-foreground">
                    Try selecting a different category filter.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
        
        {/* Contact CTA */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-heading font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-muted-foreground mb-8">
              Contact us today to discuss how we can bring your architectural vision to life.
            </p>
            <Link 
              to="/contact" 
              className="px-6 py-3 bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-opacity inline-block"
            >
              Get in Touch
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Projects;
