import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProjectModel from "../components/ProjectModel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, CalendarIcon, MapPin, Users, Clock, Building, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "The Glass Pavilion",
    category: "Residential",
    location: "Beverly Hills, CA",
    year: "2022",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    description: "A modern residence with open spaces and floor-to-ceiling glass walls that blur the line between indoor and outdoor living.",
    fullDescription: "This stunning residential project redefines modern luxury living with its innovative use of glass and open space. The Glass Pavilion features floor-to-ceiling windows throughout, creating a seamless connection between indoor and outdoor spaces. The minimalist design emphasizes clean lines and natural materials, with custom-designed furniture that complements the architectural elements. Sustainable features include solar panels, rainwater harvesting, and energy-efficient systems throughout.",
    timeline: [
      { month: "January", year: "2021", phase: "Concept Design", description: "Initial client consultations and conceptual design development" },
      { month: "March", year: "2021", phase: "Schematic Design", description: "Development of preliminary floor plans and elevation studies" },
      { month: "June", year: "2021", phase: "Design Development", description: "Refinement of designs and material selection" },
      { month: "August", year: "2021", phase: "Construction Documents", description: "Preparation of technical drawings and specifications" },
      { month: "October", year: "2021", phase: "Permitting", description: "Submission and approval of building permits" },
      { month: "December", year: "2021", phase: "Construction Start", description: "Groundbreaking and foundation work" },
      { month: "July", year: "2022", phase: "Construction Completion", description: "Final inspections and client handover" }
    ],
    team: [
      { id: "alexandra-chen", name: "Alexandra Chen", position: "Lead Architect", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80" },
      { id: "marcus-williams", name: "Marcus Williams", position: "Project Manager", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" },
      { id: "sophia-rodriguez", name: "Sophia Rodriguez", position: "Interior Designer", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80" }
    ],
    additionalImages: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    ]
  },
  {
    id: 2,
    title: "Eco Urban Tower",
    category: "Commercial",
    location: "Seattle, WA",
    year: "2021",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    description: "A sustainable office building featuring renewable energy systems, living walls, and smart technology for optimal efficiency.",
    fullDescription: "The Eco Urban Tower represents the future of sustainable commercial architecture. This 25-story office building incorporates cutting-edge green technology, including a facade of living walls that improve air quality and reduce energy consumption. The building generates 40% of its energy needs through integrated solar panels and wind turbines. Smart building systems optimize lighting, heating, and cooling based on occupancy and weather conditions.",
    timeline: [
      { month: "February", year: "2019", phase: "Concept Design", description: "Initial stakeholder meetings and sustainability goals definition" },
      { month: "May", year: "2019", phase: "Schematic Design", description: "Development of green building strategies and preliminary designs" },
      { month: "September", year: "2019", phase: "Design Development", description: "Integration of renewable energy systems and facade design" },
      { month: "January", year: "2020", phase: "Construction Documents", description: "Detailed technical specifications and engineering" },
      { month: "March", year: "2020", phase: "Permitting", description: "City approval and green building certification process" },
      { month: "June", year: "2020", phase: "Construction Start", description: "Site preparation and foundation work" },
      { month: "October", year: "2021", phase: "Construction Completion", description: "Final certifications and building commissioning" }
    ],
    team: [
      { id: "alexandra-chen", name: "Alexandra Chen", position: "Design Director", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80" },
      { id: "david-nguyen", name: "David Nguyen", position: "Sustainability Expert", image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=699&q=80" },
      { id: "olivia-park", name: "Olivia Park", position: "Project Manager", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" },
      { id: "raj-patel", name: "Raj Patel", position: "Urban Planner", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" }
    ],
    additionalImages: [
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1464146072230-91cabc968266?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
    ]
  },
];

const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState<typeof projects[0] | null>(null);
  const [activePhase, setActivePhase] = useState<number | null>(null);
  const [showModel, setShowModel] = useState(true);
  
  useEffect(() => {
    if (id) {
      const projectId = parseInt(id);
      const foundProject = projects.find(p => p.id === projectId);
      if (foundProject) {
        setProject(foundProject);
        
        if (foundProject.timeline && foundProject.timeline.length > 0) {
          setActivePhase(foundProject.timeline.length - 1);
        }
      }
    }
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <p>Project not found</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-16">
        {/* Hero Section */}
        <div className="relative h-[60vh]">
          <div className="absolute inset-0">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
          </div>
          <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">
            <div className="max-w-7xl mx-auto">
              <Link 
                to="/projects"
                className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors"
              >
                <ChevronLeft className="mr-1 h-4 w-4" />
                Back to Projects
              </Link>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4">
                {project.title}
              </h1>
              <div className="flex flex-wrap gap-4 mt-6">
                <div className="flex items-center text-white/80">
                  <Building className="h-4 w-4 mr-2" />
                  <span>{project.category}</span>
                </div>
                <div className="flex items-center text-white/80">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>{project.location}</span>
                </div>
                <div className="flex items-center text-white/80">
                  <CalendarIcon className="h-4 w-4 mr-2" />
                  <span>{project.year}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* 3D Model Section */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/10">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold">3D Model Preview</h2>
              <button 
                onClick={() => setShowModel(!showModel)}
                className="text-sm flex items-center gap-1 px-4 py-2 bg-primary/10 hover:bg-primary/20 rounded-md transition-colors"
              >
                {showModel ? "Hide Model" : "Show Model"}
              </button>
            </div>
            
            {showModel && (
              <div className="bg-background border border-border rounded-lg p-4 shadow-lg">
                <ProjectModel projectId={project.id} category={project.category} />
                <div className="mt-4 text-sm text-muted-foreground text-center">
                  Interact with the 3D model: click and drag to rotate, scroll to zoom in/out.
                </div>
              </div>
            )}
          </div>
        </section>
        
        {/* Project Overview */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold mb-6">Overview</h2>
                <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                  {project.fullDescription || project.description}
                </p>
                
                {/* Project Gallery */}
                {project.additionalImages && project.additionalImages.length > 0 && (
                  <div className="mt-12">
                    <h2 className="text-2xl font-bold mb-6">Gallery</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {project.additionalImages.map((image, index) => (
                        <motion.div 
                          key={index}
                          className="overflow-hidden rounded-lg"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                          <img 
                            src={image} 
                            alt={`${project.title} - Image ${index + 1}`} 
                            className="w-full h-auto object-cover aspect-[4/3] hover:scale-105 transition-transform duration-500"
                          />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              {/* Team Members */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Team Members</h2>
                <div className="space-y-4">
                  {project.team && project.team.map((member, index) => (
                    <Link to={`/team/${member.id}`} key={index}>
                      <Card className="hover:border-primary/50 transition-all hover:shadow-sm">
                        <CardContent className="p-4">
                          <div className="flex items-center gap-4">
                            <Avatar className="h-12 w-12">
                              <AvatarImage src={member.image} alt={member.name} />
                              <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div>
                              <h3 className="font-medium">{member.name}</h3>
                              <p className="text-sm text-muted-foreground">{member.position}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>

                {/* Project Next Steps */}
                <div className="mt-12">
                  <h2 className="text-2xl font-bold mb-6">Interested?</h2>
                  <p className="text-muted-foreground mb-6">
                    Schedule a consultation with our team to discuss how we can bring your vision to life.
                  </p>
                  <Link 
                    to="/schedule" 
                    className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-opacity"
                  >
                    Book a Consultation <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Project Timeline */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/10">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold mb-12 text-center">Project Timeline</h2>
            
            <div className="relative">
              {/* Timeline Bar */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-border"></div>
              
              {/* Timeline Events */}
              <div className="space-y-24 relative">
                {project.timeline && project.timeline.map((phase, index) => (
                  <motion.div 
                    key={index} 
                    className={`relative ${index % 2 === 0 ? 'text-right mr-[calc(50%+1.5rem)]' : 'ml-[calc(50%+1.5rem)]'}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    onMouseEnter={() => setActivePhase(index)}
                  >
                    {/* Timeline Dot */}
                    <div 
                      className={`absolute top-0 left-[calc(${index % 2 === 0 ? '100% + 1.5rem' : '-3rem'})] w-6 h-6 rounded-full border-4 ${activePhase === index ? 'border-primary bg-primary/20' : 'border-secondary bg-background'} transform translate-x-[-50%] transition-all duration-300`}
                    ></div>
                    
                    {/* Date Tag */}
                    <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-2 ${activePhase === index ? 'bg-primary text-primary-foreground' : 'bg-secondary/50'}`}>
                      {phase.month} {phase.year}
                    </div>
                    
                    {/* Phase Title */}
                    <h3 className="text-xl font-bold">{phase.phase}</h3>
                    
                    {/* Phase Description */}
                    <p className="text-muted-foreground mt-2 max-w-md">
                      {phase.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Related Projects */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Related Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {projects
                .filter(p => p.id !== project.id && p.category === project.category)
                .slice(0, 3)
                .map((relatedProject) => (
                  <Link to={`/projects/${relatedProject.id}`} key={relatedProject.id}>
                    <div className="group overflow-hidden rounded-lg border border-border hover:border-primary/50 transition-all">
                      <div className="aspect-[3/2] overflow-hidden">
                        <img 
                          src={relatedProject.image} 
                          alt={relatedProject.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold">{relatedProject.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{relatedProject.category}</p>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProjectDetail;
