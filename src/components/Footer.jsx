import { Facebook, Twitter, Instagram, MapPin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-neutral-900 pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="animate__animated animate__fadeInUp">
            <h3 className="text-2xl font-bold text-[#B5EAD7] mb-6 font-['Playfair_Display']">Tarangini 2K25</h3>
            <p className="text-white/80 mb-6 font-['Montserrat']">
              Join us for two days of excitement, creativity, and celebration at the biggest college festival of the year.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/80 hover:text-[#B5EAD7] transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-white/80 hover:text-[#B5EAD7] transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-white/80 hover:text-[#B5EAD7] transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="animate__animated animate__fadeInUp" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-xl font-bold text-[#BCC1BA] mb-6 font-['Playfair_Display']">Quick Links</h3>
            <ul className="space-y-4 font-['Montserrat']">
              <li><a href="/" className="text-white/80 hover:text-[#BCC1BA] transition-colors">Home</a></li>
              <li><a href="/about" className="text-white/80 hover:text-[#BCC1BA] transition-colors">About</a></li>
              <li><a href="/events" className="text-white/80 hover:text-[#BCC1BA] transition-colors">Events</a></li>
              <li><a href="/schedule" className="text-white/80 hover:text-[#BCC1BA] transition-colors">Schedule</a></li>
              <li><a href="/registration" className="text-white/80 hover:text-[#BCC1BA] transition-colors">Register</a></li>
            </ul>
          </div>

          <div className="animate__animated animate__fadeInUp" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-xl font-bold text-[#AEC6CF] mb-6 font-['Playfair_Display']">Events</h3>
            <ul className="space-y-4 font-['Montserrat']">
              <li><a href="https://drive.google.com/file/d/14M_yNKjazadpTQ1kmMIg3jEUPLxq5csy/view" className="text-white/80 hover:text-[#AEC6CF] transition-colors">Memory Vault</a></li>
              <li><a href="http://drive.google.com/file/d/19nPZiTQkrUqDfOIX2xnIgwJLrH9lNCeS/view" className="text-white/80 hover:text-[#AEC6CF] transition-colors">Maze Of Deception</a></li>
              <li><a href="https://drive.google.com/file/d/1Wy2wE-GkzKz1xGAhKyUT6jelaDB8QFK8/view?usp=drive_link" className="text-white/80 hover:text-[#AEC6CF] transition-colors">Treasure Hunt</a></li>
              <li><a href="https://drive.google.com/file/d/13qObi8f_F62mGkt1yzuX1qyVuOGhfxoX/view?usp=drive_link" className="text-white/80 hover:text-[#AEC6CF] transition-colors">Talent Show</a></li>
            </ul>
          </div>

          <div className="animate__animated animate__fadeInUp" style={{ animationDelay: '0.6s' }}>
            <h3 className="text-xl font-bold text-[#B5EAD7] mb-6 font-['Playfair_Display']">Contact Info</h3>
            <ul className="space-y-4 font-['Montserrat']">
              <li className="flex items-center space-x-3 text-white/80">
                <MapPin className="w-5 h-5" />
                <span>Government Engineering College, Ajmer</span>
              </li>
              <li className="flex items-center space-x-3 text-white/80">
                <Mail className="w-5 h-5" />
                <span>21cs39@ecajmer.ac.in</span>
              </li>
              <li className="flex items-center space-x-3 text-white/80">
                <Phone className="w-5 h-5" />
                <span>+91 9672903736: (Karan Singh Rathore)</span>
              </li>
              <li className="flex items-center space-x-3 text-white/80">
                <Phone className="w-5 h-5" />
                <span>+91 6378884889: (Jitendra Meena)</span>
              </li>
              <li className="flex items-center space-x-3 text-white/80">
                <Phone className="w-5 h-5" />
                <span>+91 8764365384: (Ashish Gonawat)</span>
              </li>
              <li className="flex items-center space-x-3 text-white/80">
                <Phone className="w-5 h-5" />
                <span>+91 8209025966: (Manish Saini)</span>
              </li>
              <li className="flex items-center space-x-3 text-white/80">
                <Phone className="w-5 h-5" />
                <span>+91 9871500947: (Harshpreet Singh)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm font-['Montserrat'] mb-4 md:mb-0">
              © 2025 Tarangini Fest.
            </p>
            <div className="flex space-x-6 font-['Montserrat']">
              <a href="/privacy" className="text-white/60 hover:text-[#B5EAD7] text-sm transition-colors">Privacy Policy</a>
              <a href="/terms" className="text-white/60 hover:text-[#B5EAD7] text-sm transition-colors">Terms & Conditions</a>
              <a href="/faq" className="text-white/60 hover:text-[#B5EAD7] text-sm transition-colors">FAQ</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
