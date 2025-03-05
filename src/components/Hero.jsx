import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-neutral-900 pt-16 overflow-hidden relative">
      {/* Background gradients */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-[#B5EAD7] rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-[#BCC1BA] rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 py-8 md:py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left side content */}
          <div className="text-left">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#B5EAD7] mb-4 md:mb-6 font-['Playfair_Display'] leading-tight">
              Tarangini <br/> 2K25
            </h1>
            <p className="text-lg md:text-xl text-[#BCC1BA] mb-6 md:mb-8 font-['Montserrat'] max-w-lg">
              Experience the ultimate college festival with competitions, performances, and unforgettable moments.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link
                to="/events"
                className="bg-[#B5EAD7] text-neutral-900 px-6 py-3 md:px-8 md:py-4 rounded-full hover:bg-[#BCC1BA] transition-colors duration-300 font-['Montserrat'] font-bold flex items-center gap-2 animate-pulse"
              >
                Registrations Open
                <ArrowRight size={20} />
              </Link>
              <a
                href="https://drive.google.com/file/d/1sWzXEHOPn8xTQ8ssplAKkxgzB8zw6Ned/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-[#BCC1BA] text-[#BCC1BA] px-6 py-3 md:px-8 md:py-4 rounded-full hover:bg-[#BCC1BA] hover:text-neutral-900 transition-colors duration-300 font-['Montserrat'] font-bold">
                View Schedule
              </a>
            </div>
            
            {/* Stats section */}
            <div className="mt-8 md:mt-12 flex flex-wrap items-center gap-4 md:gap-6">
              <div className="text-white">
                <h3 className="text-3xl md:text-4xl font-bold font-['Playfair_Display']">15+</h3>
                <p className="text-xs md:text-sm opacity-80">Events</p>
              </div>
              <div className="h-12 w-px bg-white/20 hidden sm:block"></div>
              <div className="text-white">
                <h3 className="text-3xl md:text-4xl font-bold font-['Playfair_Display']">100+</h3>
                <p className="text-xs md:text-sm opacity-80">Participants</p>
              </div>
              <div className="h-12 w-px bg-white/20 hidden sm:block"></div>
              <div className="text-white">
                <h3 className="text-3xl md:text-4xl font-bold font-['Playfair_Display']">2 Days</h3>
                <p className="text-xs md:text-sm opacity-80">of Enjoyment</p>
              </div>
            </div>
          </div>
          
          {/* Right side visual elements */}
          <div className="relative mt-8 lg:mt-0">
            <div className="aspect-square rounded-full bg-gradient-to-br from-[#B5EAD7] via-[#BCC1BA] to-[#AEC6CF] opacity-20 blur-3xl absolute inset-0"></div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="h-36 md:h-48 bg-[#B5EAD7]/20 rounded-2xl backdrop-blur-sm"></div>
                  <div className="h-48 md:h-64 bg-[#BCC1BA]/20 rounded-2xl backdrop-blur-sm"></div>
                </div>
                <div className="space-y-4 pt-8 md:pt-12">
                  <div className="h-48 md:h-64 bg-[#AEC6CF]/20 rounded-2xl backdrop-blur-sm"></div>
                  <div className="h-36 md:h-48 bg-[#B5EAD7]/20 rounded-2xl backdrop-blur-sm"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
