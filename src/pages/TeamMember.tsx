
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

// This will be our team member data
const teamMembersData = [
  {
    id: "alexandra-chen",
    name: "Alexandra Chen",
    position: "Principal Architect & Founder",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
    bio: "With over 20 years of experience, Alexandra leads our team with passion and innovation.",
    expertise: ["Sustainable Design", "Urban Planning", "Residential Architecture"],
    education: "Master of Architecture, Harvard University",
    projects: [
      {
        name: "Eco Living Complex",
        description: "A revolutionary sustainable housing development that reduced energy consumption by 75%.",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        year: 2021
      },
      {
        name: "Urban Renewal Center",
        description: "Transforming an abandoned warehouse into a thriving community center with green space.",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        year: 2019
      },
    ]
  },
  {
    id: "marcus-williams",
    name: "Marcus Williams",
    position: "Senior Design Architect",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    bio: "Marcus specializes in sustainable design solutions for commercial spaces.",
    expertise: ["Commercial Design", "Sustainable Architecture", "Interior Integration"],
    education: "Master of Architecture, MIT",
    projects: [
      {
        name: "Horizon Office Tower",
        description: "A LEED Platinum certified office building that maximizes natural light and minimizes energy use.",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        year: 2020
      },
      {
        name: "Riverfront Retail Complex",
        description: "An innovative shopping experience that integrates with the natural environment.",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        year: 2018
      },
    ]
  },
  {
    id: "sophia-rodriguez",
    name: "Sophia Rodriguez",
    position: "Interior Design Director",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80",
    bio: "Sophia brings spaces to life with her keen eye for detail and luxury aesthetics.",
    expertise: ["Luxury Interiors", "Biophilic Design", "Material Selection"],
    education: "Bachelor of Fine Arts, Interior Design, Parsons School of Design",
    projects: [
      {
        name: "Azure Penthouse",
        description: "A bespoke luxury interior design merging comfort with opulence for a Manhattan penthouse.",
        image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        year: 2022
      },
      {
        name: "Harmony Spa Retreat",
        description: "A wellness-focused interior design for a luxury spa, featuring natural materials and soothing aesthetics.",
        image: "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        year: 2021
      },
    ]
  },
  {
    id: "david-nguyen",
    name: "David Nguyen",
    position: "Sustainability Expert",
    image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=699&q=80",
    bio: "David ensures all our projects meet the highest environmental standards.",
    expertise: ["Environmental Certification", "Sustainable Materials", "Energy Efficiency"],
    education: "PhD in Environmental Engineering, Stanford University",
    projects: [
      {
        name: "Green Haven Residential Complex",
        description: "A net-zero energy residential development featuring solar integration and rainwater harvesting.",
        image: "https://images.unsplash.com/photo-1623298317883-6b70254eeca9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        year: 2023
      },
      {
        name: "Sustainable School Campus",
        description: "An educational facility designed to achieve LEED Platinum certification and serve as a learning tool for students.",
        image: "https://images.unsplash.com/photo-1599687266724-dfa3c4ff81b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        year: 2020
      },
    ]
  },
  {
    id: "olivia-park",
    name: "Olivia Park",
    position: "Project Manager",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    bio: "Olivia ensures projects stay on schedule and within budget without compromising design integrity.",
    expertise: ["Project Management", "Client Relations", "Budget Optimization"],
    education: "MBA, University of Pennsylvania",
    projects: [
      {
        name: "Coastal Museum Extension",
        description: "A complex museum expansion completed ahead of schedule and under budget.",
        image: "https://images.unsplash.com/photo-1574958269340-fa927503f3dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
        year: 2022
      },
      {
        name: "Urban Mixed-Use Development",
        description: "A 5-acre development featuring residential, commercial, and green spaces.",
        image: "https://images.unsplash.com/photo-1577415124269-fc1140a69e91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        year: 2021
      },
    ]
  },
  {
    id: "raj-patel",
    name: "Raj Patel",
    position: "Urban Design Specialist",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    bio: "Raj combines architecture with urban planning to create cohesive city spaces.",
    expertise: ["Urban Planning", "Public Spaces", "Community Integration"],
    education: "Master of Urban Planning, Columbia University",
    projects: [
      {
        name: "Riverside Promenade",
        description: "A revitalized waterfront that reconnects the city with its river through public spaces and pedestrian paths.",
        image: "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        year: 2023
      },
      {
        name: "Cultural District Masterplan",
        description: "A comprehensive urban plan integrating arts, education, and community spaces in a historic district.",
        image: "https://images.unsplash.com/photo-1519999482648-25049ddd37b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1226&q=80",
        year: 2019
      },
    ]
  },
];

const TeamMember = () => {
  const { id } = useParams();
  const [member, setMember] = useState<any>(null);

  useEffect(() => {
    // Find the member based on the URL parameter
    const foundMember = teamMembersData.find(m => m.id === id);
    setMember(foundMember);
    
    // Scroll to top when the page loads
    window.scrollTo(0, 0);
  }, [id]);

  if (!member) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Team member not found</h2>
          <Button asChild>
            <Link to="/about">Back to Team</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-16">
        {/* Header */}
        <section className="bg-secondary/30 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <Button variant="outline" asChild className="mb-6">
                <Link to="/about#team">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Team
                </Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="aspect-square max-w-md mx-auto md:mx-0 overflow-hidden rounded-2xl">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div>
                <h1 className="text-4xl md:text-5xl font-heading font-bold mb-2">{member.name}</h1>
                <p className="text-xl text-primary/70 mb-6">{member.position}</p>
                <p className="text-lg text-muted-foreground mb-6">{member.bio}</p>
                
                <div className="mb-6">
                  <h3 className="text-lg font-bold mb-2">Education</h3>
                  <p>{member.education}</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold mb-2">Areas of Expertise</h3>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill: string, index: number) => (
                      <span 
                        key={index} 
                        className="px-3 py-1 bg-secondary rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Projects Section */}
        <section className="section-padding">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12 text-center">
              Featured Projects
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {member.projects.map((project: any, index: number) => (
                <div key={index} className="group overflow-hidden border border-border rounded-lg bg-background hover:shadow-lg transition-all duration-300">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-xl font-bold">{project.name}</h3>
                      <span className="text-muted-foreground">{project.year}</span>
                    </div>
                    <p className="text-muted-foreground">{project.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default TeamMember;
