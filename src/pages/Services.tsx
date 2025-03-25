
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServicesSection from "../components/ServicesSection";
import FAQSection from "../components/FAQSection";

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-16">
        {/* Page Header */}
        <div className="bg-secondary/30 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Our Services</h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Comprehensive architectural solutions tailored to your unique needs and vision.
            </p>
          </div>
        </div>
        
        <ServicesSection />
        
        {/* Process Section */}
        <section className="section-padding">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-block px-3 py-1 bg-secondary rounded-full text-sm font-medium mb-2">
                Our Process
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                How We Work
              </h2>
              <p className="text-muted-foreground">
                Our collaborative, client-centered approach ensures your project is executed flawlessly from concept to completion.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="relative">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">
                  1
                </div>
                <div className="bg-background p-8 pt-12 rounded-lg border border-border h-full">
                  <h3 className="text-xl font-bold mb-3">Discovery</h3>
                  <p className="text-muted-foreground">
                    We begin by understanding your vision, requirements, and constraints through in-depth consultation.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">
                  2
                </div>
                <div className="bg-background p-8 pt-12 rounded-lg border border-border h-full">
                  <h3 className="text-xl font-bold mb-3">Concept Design</h3>
                  <p className="text-muted-foreground">
                    We develop preliminary designs and 3D visualizations to bring your ideas to life and refine the direction.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">
                  3
                </div>
                <div className="bg-background p-8 pt-12 rounded-lg border border-border h-full">
                  <h3 className="text-xl font-bold mb-3">Design Development</h3>
                  <p className="text-muted-foreground">
                    We refine the approved concept with detailed plans, material selections, and technical specifications.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">
                  4
                </div>
                <div className="bg-background p-8 pt-12 rounded-lg border border-border h-full">
                  <h3 className="text-xl font-bold mb-3">Implementation</h3>
                  <p className="text-muted-foreground">
                    We oversee the construction process, ensuring that every detail is executed according to plan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Pricing Packages */}
        <section className="section-padding bg-secondary/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-block px-3 py-1 bg-secondary rounded-full text-sm font-medium mb-2">
                Pricing
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Service Packages
              </h2>
              <p className="text-muted-foreground">
                Flexible service options to suit different project needs and budgets.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-background rounded-lg border border-border overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
                <div className="border-b border-border p-8">
                  <h3 className="text-xl font-bold mb-2">Consultation</h3>
                  <p className="text-3xl font-bold">
                    $150
                    <span className="text-sm text-muted-foreground font-normal">/hour</span>
                  </p>
                </div>
                <div className="p-8">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2 text-primary">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Initial site assessment</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2 text-primary">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Conceptual feedback</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2 text-primary">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Design recommendations</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2 text-primary">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Budget guidance</span>
                    </li>
                  </ul>
                  <div className="mt-8">
                    <a href="/contact" className="block w-full py-3 text-center border border-primary rounded-md text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                      Book Consultation
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="bg-background rounded-lg border-2 border-primary overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg relative">
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 text-sm font-medium">
                  Popular
                </div>
                <div className="border-b border-border p-8">
                  <h3 className="text-xl font-bold mb-2">Standard Project</h3>
                  <p className="text-3xl font-bold">
                    Custom
                    <span className="text-sm text-muted-foreground font-normal"> quote</span>
                  </p>
                </div>
                <div className="p-8">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2 text-primary">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Full concept design</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2 text-primary">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Detailed plans and elevations</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2 text-primary">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>3D visualization</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2 text-primary">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Material selection</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2 text-primary">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Permit application assistance</span>
                    </li>
                  </ul>
                  <div className="mt-8">
                    <a href="/contact" className="block w-full py-3 text-center bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-opacity">
                      Request Quote
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="bg-background rounded-lg border border-border overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
                <div className="border-b border-border p-8">
                  <h3 className="text-xl font-bold mb-2">Comprehensive</h3>
                  <p className="text-3xl font-bold">
                    Custom
                    <span className="text-sm text-muted-foreground font-normal"> quote</span>
                  </p>
                </div>
                <div className="p-8">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2 text-primary">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Everything in Standard</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2 text-primary">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Full project management</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2 text-primary">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Interior design services</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2 text-primary">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Landscape design</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2 text-primary">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Construction administration</span>
                    </li>
                  </ul>
                  <div className="mt-8">
                    <a href="/contact" className="block w-full py-3 text-center border border-primary rounded-md text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                      Request Quote
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 text-center text-muted-foreground">
              <p>
                All packages can be customized to suit your specific project requirements.
                <br />
                Contact us for a detailed proposal tailored to your needs.
              </p>
            </div>
          </div>
        </section>
        
        <FAQSection />
        
        {/* Contact CTA */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-heading font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-muted-foreground mb-8">
              Contact us today to discuss how we can bring your architectural vision to life.
            </p>
            <a 
              href="/contact" 
              className="px-6 py-3 bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-opacity inline-block"
            >
              Get in Touch
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;
