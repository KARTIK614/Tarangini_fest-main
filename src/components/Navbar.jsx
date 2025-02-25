import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const navLinks = [
    { to: "/events", label: "Events" },
    { to: "#schedule", label: "Schedule" },
    { to: "#registration", label: "Register" },
    { to: "#gallery", label: "Gallery" },
    { to: "#contact", label: "Contact" }
  ];

  const handleNavClick = (e, to) => {
    if (to.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(to);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMobileMenuOpen(false);
      }
    }
  };

  return (
    <header className="fixed w-full z-50 bg-neutral-900/90 backdrop-blur-sm">
      <div className="relative">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" onClick={(e) => handleNavClick(e, '#home')} className="text-2xl font-bold text-[#B5EAD7] font-['Playfair_Display']">
              TARANGINI 2K25
            </Link>
            
            <button
              className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#B5EAD7] transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

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

        <div
          className={`lg:hidden absolute top-full left-0 right-0 bg-neutral-900/95 backdrop-blur-md transform transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
        >
          <div className="container mx-auto px-6 py-6">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-lg text-white hover:text-[#B5EAD7] transition-colors duration-300 font-['Montserrat'] py-2"
                  onClick={(e) => {
                    handleNavClick(e, link.to);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
