import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "./ThemeProvider";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isHeroSection, setIsHeroSection] = useState(true);
  const { theme, setTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    // Check if currently on the home page (hero section)
    setIsHeroSection(location.pathname === '/');

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location]);

  const toggleMenu = () => setIsOpen(!isOpen);
  
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  // Determine text and icon colors based on hero section and scroll state
  const textColor = isHeroSection && !scrolled 
    ? "text-white" 
    : "text-foreground";
  
  const linkColor = isHeroSection && !scrolled 
    ? "hover:text-white/80" 
    : "hover:text-primary/80";

  const themeButtonColor = isHeroSection && !scrolled 
    ? "hover:bg-white/20" 
    : "hover:bg-secondary/50";

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled || !isHeroSection 
          ? "bg-background/80 backdrop-blur-md shadow-sm" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link 
              to="/" 
              className={`text-2xl font-bold font-heading tracking-wider ${textColor}`}
            >
              HALO<span className={`opacity-70 ${textColor === 'text-white' ? '' : 'text-primary'}`}>Architect</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors ${textColor} ${linkColor}`}
              >
                {link.name}
              </Link>
            ))}
            <button 
              onClick={toggleTheme} 
              className={`p-2 rounded-full transition-colors ${themeButtonColor}`}
              aria-label="Toggle theme"
            >
              {theme === "light" ? 
                <Moon 
                  size={18} 
                  className={isHeroSection && !scrolled ? 'text-white' : ''} 
                /> : 
                <Sun 
                  size={18} 
                  className={isHeroSection && !scrolled ? 'text-white' : ''} 
                />
              }
            </button>
          </div>
          
          <div className="flex md:hidden items-center space-x-4">
            <button 
              onClick={toggleTheme} 
              className={`p-2 rounded-full transition-colors ${themeButtonColor}`}
              aria-label="Toggle theme"
            >
              {theme === "light" ? 
                <Moon 
                  size={18} 
                  className={isHeroSection && !scrolled ? 'text-white' : ''} 
                /> : 
                <Sun 
                  size={18} 
                  className={isHeroSection && !scrolled ? 'text-white' : ''} 
                />
              }
            </button>
            <button
              onClick={toggleMenu}
              className={`p-2 rounded-md transition-colors ${themeButtonColor}`}
              aria-label="Toggle menu"
            >
              {isOpen ? 
                <X 
                  size={20} 
                  className={isHeroSection && !scrolled ? 'text-white' : ''} 
                /> : 
                <Menu 
                  size={20} 
                  className={isHeroSection && !scrolled ? 'text-white' : ''} 
                />
              }
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden glass border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors 
                  ${textColor} hover:bg-secondary/50`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}