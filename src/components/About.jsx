import { Clock, Users, DollarSign } from 'lucide-react';

const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate__animated animate__fadeInLeft">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="h-48 bg-[#B5EAD7]/30 rounded-2xl p-6 backdrop-blur-sm flex flex-col items-center justify-center">
                    <h3 className="text-4xl font-bold text-neutral-800 font-['Playfair_Display'] text-center">Tarangini 2K25</h3>
                    <p className="mt-2 text-neutral-600 font-['Montserrat'] text-center">19th-20th April</p>
                  </div>
                  <div className="h-48 bg-[#BCC1BA]/30 rounded-2xl p-6 backdrop-blur-sm">
                    <h3 className="text-4xl font-bold text-neutral-800 font-['Playfair_Display']">Cultural Events</h3>
                    <p className="mt-2 text-neutral-600 font-['Montserrat']">Showcase your artistic talents through dance, music, and drama</p>
                  </div>
                </div>
                <div className="space-y-4 pt-12">
                  <div className="h-48 bg-[#AEC6CF]/30 rounded-2xl p-6 backdrop-blur-sm">
                    <h3 className="text-4xl font-bold text-neutral-800 font-['Playfair_Display']">Theme</h3>
                    <p className="mt-2 text-neutral-600 font-['Montserrat']">All States of India.</p>
                  </div>
                  <div className="h-48 bg-[#B5EAD7]/30 rounded-2xl p-6 backdrop-blur-sm">
                    <h3 className="text-4xl font-bold text-neutral-800 font-['Playfair_Display']">Adventure</h3>
                    <p className="mt-2 text-neutral-600 font-['Montserrat']">Show your skills in a thrilling competitions.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="animate__animated animate__fadeInRight">
            <h2 className="text-4xl lg:text-5xl font-bold text-neutral-800 mb-6 font-['Playfair_Display']">
              About The Fest
            </h2>
            <p className="text-lg text-neutral-600 mb-6 font-['Montserrat']">
              Tarangini is the annual culural festival that brings together talented students from across the college. Experience two days of enjoyment, creativity, and celebration.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#B5EAD7]/30 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-neutral-800" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-800 font-['Playfair_Display']">2 Days Of Events</h3>
                  <p className="text-neutral-600 font-['Montserrat']">Packed schedule of competitions and shows</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#BCC1BA]/30 flex items-center justify-center">
                  <Users className="h-6 w-6 text-neutral-800" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-800 font-['Playfair_Display']">15+ Exciting Events</h3>
                  <p className="text-neutral-600 font-['Montserrat']">All years are permitted</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#AEC6CF]/30 flex items-center justify-center">
                  <DollarSign className="h-6 w-6 text-neutral-800" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-800 font-['Playfair_Display']">Certifications For Winners</h3>
                  <p className="text-neutral-600 font-['Montserrat']">Exciting rewards for winners</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
