
import { useState } from "react";
import { Link } from "react-router-dom";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Team members data with IDs for routing
const teamMembers = [
  {
    id: "alexandra-chen",
    name: "Alexandra Chen",
    position: "Principal Architect & Founder",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
    bio: "With over 20 years of experience, Alexandra leads our team with passion and innovation."
  },
  {
    id: "marcus-williams",
    name: "Marcus Williams",
    position: "Senior Design Architect",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    bio: "Marcus specializes in sustainable design solutions for commercial spaces."
  },
  {
    id: "sophia-rodriguez",
    name: "Sophia Rodriguez",
    position: "Interior Design Director",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80",
    bio: "Sophia brings spaces to life with her keen eye for detail and luxury aesthetics."
  },
  {
    id: "david-nguyen",
    name: "David Nguyen",
    position: "Sustainability Expert",
    image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=699&q=80",
    bio: "David ensures all our projects meet the highest environmental standards."
  },
  {
    id: "olivia-park",
    name: "Olivia Park",
    position: "Project Manager",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    bio: "Olivia ensures projects stay on schedule and within budget without compromising design integrity."
  },
  {
    id: "raj-patel",
    name: "Raj Patel",
    position: "Urban Design Specialist",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    bio: "Raj combines architecture with urban planning to create cohesive city spaces."
  }
];

export default function TeamSection() {
  return (
    <section id="team" className="section-padding bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 bg-secondary rounded-full text-sm font-medium mb-2">
            Our Team
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Meet The Visionaries Behind HALO
          </h2>
          <p className="text-muted-foreground">
            A diverse team of talented architects and designers who bring together expertise, 
            creativity, and passion to every project.
          </p>
        </div>
        
        {/* Bento Grid Layout */}
        <div className="grid grid-cols-12 gap-4 md:gap-6">
          {teamMembers.map((member, index) => {
            // Create varied sizes for bento grid effect
            const isFeatured = index === 0 || index === 3; // First and fourth items are featured
            const colSpan = isFeatured 
              ? "col-span-12 sm:col-span-6 md:col-span-6" 
              : "col-span-6 sm:col-span-6 md:col-span-3";
            
            const rowSpan = isFeatured ? "row-span-2" : "row-span-1";
            
            return (
              <Link 
                to={`/team/${member.id}`} 
                key={index}
                className={`group ${colSpan} ${rowSpan}`}
              >
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <Card className="overflow-hidden border border-border hover:shadow-lg transition-all duration-300 h-full">
                      <CardContent className="p-0 relative h-full">
                        <div className={`${isFeatured ? 'aspect-square md:aspect-[4/5]' : 'aspect-square'} overflow-hidden h-full`}>
                          <img 
                            src={member.image} 
                            alt={member.name} 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                          <h3 className="text-white text-lg font-bold">{member.name}</h3>
                          <p className="text-white/80 text-sm">{member.position}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80 p-0 overflow-hidden border-border">
                    <div className="flex gap-4 p-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={member.image} alt={member.name} />
                        <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="text-base font-semibold">{member.name}</h4>
                        <p className="text-sm text-muted-foreground">{member.position}</p>
                      </div>
                    </div>
                    <div className="bg-muted p-4 border-t border-border">
                      <p className="text-sm">{member.bio}</p>
                      <p className="text-sm text-primary mt-2 font-medium">Click to view portfolio →</p>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </Link>
            );
          })}
        </div>
        
        <div className="mt-16 text-center">
          <Link 
            to="/about#team" 
            className="inline-flex items-center text-primary hover:text-primary/70 transition-colors font-medium"
          >
            <span>Learn more about our team</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 ml-1" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path 
                fillRule="evenodd" 
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" 
                clipRule="evenodd" 
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
