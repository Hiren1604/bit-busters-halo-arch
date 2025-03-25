
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

// Featured architects to display on contact page
const featuredArchitects = [
  {
    id: "alexandra-chen",
    name: "Alexandra Chen",
    position: "Principal Architect & Founder",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
  },
  {
    id: "marcus-williams",
    name: "Marcus Williams",
    position: "Senior Design Architect",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: "sophia-rodriguez",
    name: "Sophia Rodriguez",
    position: "Interior Design Director",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80",
  }
];

export default function ContactSection() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    projectType: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Form submission logic would go here
    
    toast({
      title: "Message Sent",
      description: "We've received your message and will get back to you shortly."
    });
    
    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      projectType: "",
      message: ""
    });
  };

  const handleScheduleWithArchitect = (id: string) => {
    navigate(`/schedule/${id}`);
  };

  const handleFindMoreArchitects = () => {
    navigate("/schedule");
  };

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="inline-block px-3 py-1 bg-secondary rounded-full text-sm font-medium mb-2">
              Get in Touch
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Let's Discuss Your Project
            </h2>
            <p className="text-muted-foreground mb-8">
              Whether you're ready to start your project or just have some questions,
              we're here to help. Fill out the form, and we'll get back to you shortly.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="mt-1 mr-4 p-3 bg-secondary/50 rounded-full text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold mb-1">Our Location</h3>
                  <p className="text-muted-foreground">123 Design Street, Architecture City, AC 12345</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1 mr-4 p-3 bg-secondary/50 rounded-full text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold mb-1">Email</h3>
                  <p className="text-muted-foreground">info@haloarchitect.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1 mr-4 p-3 bg-secondary/50 rounded-full text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold mb-1">Phone</h3>
                  <p className="text-muted-foreground">+123 456 7890</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1 mr-4 p-3 bg-secondary/50 rounded-full text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold mb-1">Working Hours</h3>
                  <p className="text-muted-foreground">Monday-Friday: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
            
            {/* Available Architects */}
            <div className="mt-12">
              <h3 className="text-xl font-bold mb-4">Available Architects</h3>
              <p className="text-muted-foreground mb-6">
                Schedule a personal consultation with one of our expert architects.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                {featuredArchitects.map((architect) => (
                  <Card key={architect.id} className="overflow-hidden hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex flex-col items-center text-center space-y-3">
                        <Avatar className="h-16 w-16 mb-2">
                          <AvatarImage src={architect.image} alt={architect.name} />
                          <AvatarFallback>{architect.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-medium text-base">{architect.name}</h4>
                          <p className="text-sm text-muted-foreground">{architect.position}</p>
                        </div>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="w-full mt-2"
                          onClick={() => handleScheduleWithArchitect(architect.id)}
                        >
                          Schedule
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <Button 
                variant="secondary" 
                className="w-full"
                onClick={handleFindMoreArchitects}
              >
                Find More Architects
              </Button>
            </div>
          </div>
          
          <div>
            <form onSubmit={handleSubmit} className="bg-background p-8 rounded-lg border border-border shadow-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium mb-2">First Name</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-secondary/20 rounded-md border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium mb-2">Last Name</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-secondary/20 rounded-md border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-secondary/20 rounded-md border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone</label>
                <input 
                  type="tel" 
                  id="phone" 
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-secondary/20 rounded-md border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="projectType" className="block text-sm font-medium mb-2">Project Type</label>
                <select 
                  id="projectType" 
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-secondary/20 rounded-md border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors"
                  required
                >
                  <option value="">Select a project type</option>
                  <option value="residential">Residential</option>
                  <option value="commercial">Commercial</option>
                  <option value="interior">Interior Design</option>
                  <option value="renovation">Renovation</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-secondary/20 rounded-md border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors"
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full px-6 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:opacity-90 transition-opacity"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
