import { Menu, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Navbar = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Prevent body scrolling when mobile menu is open
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/events", label: "Events" },
    { to: "#schedule", label: "Schedule" },
    { to: "#registration", label: "Register" },
    { to: "#gallery", label: "Gallery" },
    { to: "#contact", label: "Contact" }
  ];

  const handleNavClick = (e, to) => {
    if (to.startsWith('#')) {
      e.preventDefault();
      
      // If we're not on the home page, navigate there first
      if (window.location.pathname !== '/') {
        navigate('/');
        // We need to wait for navigation to complete before scrolling
        setTimeout(() => {
          const element = document.querySelector(to);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        // We're already on the home page, just scroll
        const element = document.querySelector(to);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
      
      setIsMobileMenuOpen(false);
    } else {
      // Regular link navigation handled by Link component
      setIsMobileMenuOpen(false);
    }
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    navigate('/');
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-neutral-900/95 backdrop-blur-md shadow-md' : 'bg-neutral-900/90 backdrop-blur-sm'}`}>
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between w-full">
            <div className="flex-shrink-0">
              <Link
                to="/"
                onClick={handleLogoClick}
                className="text-xl md:text-2xl font-bold text-[#B5EAD7] font-['Playfair_Display']"
              >
                TARANGINI 2K25
              </Link>
            </div>
            <div className="flex items-center lg:hidden">
              <button
                className="text-white p-2 rounded-lg hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#B5EAD7] transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={(e) => handleNavClick(e, link.to)}
                  className="text-white hover:text-[#B5EAD7] transition-colors duration-300 font-['Montserrat']"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile menu overlay - separate from header */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
      
      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed top-0 right-0 w-64 h-full bg-neutral-900 shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-white/10">
          <Link 
            to="/" 
            onClick={handleLogoClick}
            className="text-xl font-bold text-[#B5EAD7] font-['Playfair_Display']"
          >
            TARANGINI 2K25
          </Link>
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-white p-1 rounded-lg hover:bg-white/10"
          >
            <X size={24} />
          </button>
        </div>
        <div className="py-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="block px-4 py-3 text-lg text-white hover:bg-white/10 hover:text-[#B5EAD7] transition-colors duration-300 font-['Montserrat']"
              onClick={(e) => handleNavClick(e, link.to)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
