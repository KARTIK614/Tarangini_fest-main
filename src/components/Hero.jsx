import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen bg-neutral-900 pt-20 overflow-hidden">
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-left animate__animated animate__fadeInLeft">
            <h1 className="text-6xl lg:text-7xl font-bold text-[#B5EAD7] mb-6 font-['Playfair_Display'] leading-tight">
             Tarangini <br/> 2K25
            </h1>
            <p className="text-xl text-[#BCC1BA] mb-8 font-['Montserrat'] max-w-lg">
              Experience the ultimate college festival with competitions, performances, and unforgettable moments.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#B5EAD7] text-neutral-900 px-8 py-4 rounded-full hover:bg-[#BCC1BA] transition-colors duration-300 font-['Montserrat'] font-bold flex items-center gap-2 animate__animated animate__pulse animate__infinite">
                Registrations Open
                <ArrowRight size={20} />
              </button>
              <button className="border-2 border-[#BCC1BA] text-[#BCC1BA] px-8 py-4 rounded-full hover:bg-[#BCC1BA] hover:text-neutral-900 transition-colors duration-300 font-['Montserrat'] font-bold">
                View Schedule
              </button>
            </div>
            <div className="mt-12 flex items-center gap-6">
              <div className="text-white">
                <h3 className="text-4xl font-bold font-['Playfair_Display']">15+</h3>
                <p className="text-sm opacity-80">Events</p>
              </div>
              <div className="h-12 w-px bg-white/20"></div>
              <div className="text-white">
                <h3 className="text-4xl font-bold font-['Playfair_Display']">50+</h3>
                <p className="text-sm opacity-80">Colleges</p>
              </div>
              <div className="h-12 w-px "></div>
              <div className="h-12 w-px bg-white/20"></div>
              <div className="text-white">
                <h3 className="text-4xl font-bold font-['Playfair_Display']">2 Days</h3>
                <p className="text-sm opacity-80">of Enjoyment</p>
              </div>
            </div>
          </div>
          <div className="relative animate__animated animate__fadeInRight">
            <div className="aspect-square rounded-full bg-gradient-to-br from-[#B5EAD7] via-[#BCC1BA] to-[#AEC6CF] opacity-20 blur-3xl absolute inset-0"></div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="h-48 bg-[#B5EAD7]/20 rounded-2xl backdrop-blur-sm"></div>
                  <div className="h-64 bg-[#BCC1BA]/20 rounded-2xl backdrop-blur-sm"></div>
                </div>
                <div className="space-y-4 pt-12">
                  <div className="h-64 bg-[#AEC6CF]/20 rounded-2xl backdrop-blur-sm"></div>
                  <div className="h-48 bg-[#B5EAD7]/20 rounded-2xl backdrop-blur-sm"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#B5EAD7] rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#BCC1BA] rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
      </div>
    </section>
  );
};

export default Hero;
