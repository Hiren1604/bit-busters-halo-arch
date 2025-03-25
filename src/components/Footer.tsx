
import { Mail, Phone, MapPin, Instagram, Twitter, Linkedin, Facebook } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold font-heading tracking-wider">
              HALO<span className="text-primary opacity-70">ARCHITECT</span>
            </h2>
            <p className="text-muted-foreground">
              Creating sustainable, modern, and luxury architectural designs that transform spaces and lives.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-primary/80 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-primary/80 transition-colors">About</Link></li>
              <li><Link to="/projects" className="hover:text-primary/80 transition-colors">Projects</Link></li>
              <li><Link to="/services" className="hover:text-primary/80 transition-colors">Services</Link></li>
              <li><Link to="/contact" className="hover:text-primary/80 transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <MapPin size={16} />
                <span>123 Design Street, Architecture City</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:info@haloarchitect.com" className="hover:text-primary/80 transition-colors">
                  info@haloarchitect.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:+1234567890" className="hover:text-primary/80 transition-colors">
                  +123 456 7890
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-border hover:bg-secondary/50 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-border hover:bg-secondary/50 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={16} />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-border hover:bg-secondary/50 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-border hover:bg-secondary/50 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
            </div>
            
            <div className="mt-8">
              <h3 className="text-lg font-medium mb-4">Newsletter</h3>
              <form className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-3 py-2 bg-secondary/30 border border-border rounded-md flex-grow"
                  required
                />
                <button 
                  type="submit"
                  className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-opacity"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} HALO Architect. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="/privacy" className="hover:text-primary/80 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary/80 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
