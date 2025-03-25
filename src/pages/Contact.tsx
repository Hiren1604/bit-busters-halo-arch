
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactSection from "../components/ContactSection";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-16">
        {/* Page Header */}
        <div className="bg-secondary/30 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Get in touch to discuss your project or schedule a consultation with our team.
            </p>
          </div>
        </div>
        
        <ContactSection />
        
        {/* Map Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold mb-4">Find Us</h2>
              <p className="text-muted-foreground">
                Visit our office to meet our team and discuss your project in person.
              </p>
            </div>
            
            <div className="bg-background rounded-lg overflow-hidden h-[400px] shadow-sm">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30594994064!2d-74.25986763304324!3d40.69714941680757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sca!4v1657199429648!5m2!1sen!2sca" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="HALO Architect Office Location"
              ></iframe>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
