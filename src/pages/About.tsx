
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TeamSection from "../components/TeamSection";
import PhilosophySection from "../components/PhilosophySection";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-16">
        {/* Page Header */}
        <div className="bg-secondary/30 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">About HALO Architect</h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Learn about our story, our team, and the principles that guide our architectural practice.
            </p>
          </div>
        </div>
        
        {/* About Content */}
        <section className="section-padding">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-heading font-bold mb-6">Our Story</h2>
                <p className="text-muted-foreground mb-4">
                  Founded in 2010 by Alexandra Chen, HALO Architect began as a small studio with a big vision:
                  to create architectural spaces that harmonize beauty, functionality, and sustainability.
                </p>
                <p className="text-muted-foreground mb-4">
                  Over the years, we've grown into a diverse team of architects, designers, and visionaries who
                  share a passion for creating spaces that positively impact people's lives and the environment.
                </p>
                <p className="text-muted-foreground">
                  Today, HALO Architect is recognized for our innovative approach to sustainable luxury design,
                  with projects spanning residential homes, commercial spaces, and cultural institutions across the country.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="overflow-hidden rounded-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1631892888131-8a1bafd298ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" 
                    alt="HALO office" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="overflow-hidden rounded-lg mt-8">
                  <img 
                    src="https://images.unsplash.com/photo-1517502884422-41eaead166d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80" 
                    alt="HALO team" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <PhilosophySection />
        <TeamSection />
        
        {/* Awards Section */}
        <section className="section-padding bg-secondary/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-block px-3 py-1 bg-secondary rounded-full text-sm font-medium mb-2">
                Recognition
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Awards & Accolades</h2>
              <p className="text-muted-foreground">
                We're honored to have our work recognized by prestigious industry organizations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-background p-8 rounded-lg border border-border text-center">
                <div className="text-4xl font-bold mb-2">2023</div>
                <h3 className="text-xl font-bold mb-2">Sustainable Design Excellence</h3>
                <p className="text-muted-foreground">American Institute of Architects</p>
              </div>
              
              <div className="bg-background p-8 rounded-lg border border-border text-center">
                <div className="text-4xl font-bold mb-2">2022</div>
                <h3 className="text-xl font-bold mb-2">Best Commercial Project</h3>
                <p className="text-muted-foreground">Architectural Digest Awards</p>
              </div>
              
              <div className="bg-background p-8 rounded-lg border border-border text-center">
                <div className="text-4xl font-bold mb-2">2021</div>
                <h3 className="text-xl font-bold mb-2">Innovation in Residential Design</h3>
                <p className="text-muted-foreground">Design Excellence Awards</p>
              </div>
              
              <div className="bg-background p-8 rounded-lg border border-border text-center">
                <div className="text-4xl font-bold mb-2">2020</div>
                <h3 className="text-xl font-bold mb-2">Emerging Firm of the Year</h3>
                <p className="text-muted-foreground">Architectural Review</p>
              </div>
              
              <div className="bg-background p-8 rounded-lg border border-border text-center">
                <div className="text-4xl font-bold mb-2">2019</div>
                <h3 className="text-xl font-bold mb-2">Urban Renewal Excellence</h3>
                <p className="text-muted-foreground">City Design Commission</p>
              </div>
              
              <div className="bg-background p-8 rounded-lg border border-border text-center">
                <div className="text-4xl font-bold mb-2">2018</div>
                <h3 className="text-xl font-bold mb-2">Green Building Leadership</h3>
                <p className="text-muted-foreground">Environmental Design Council</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
