import { useState } from 'react';
import { Download } from 'lucide-react';

const Schedule = () => {
  const [activeTab, setActiveTab] = useState('day1');

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate__animated animate__fadeIn">
          <h2 className="text-4xl lg:text-5xl font-bold text-neutral-800 mb-6 font-['Playfair_Display']">Event Schedule</h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto font-['Montserrat']">Two days packed with exciting events and performances(Upcoming...)</p>
        </div>

        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4 mb-8" role="tablist">
            {['day1', 'day2'].map((day, index) => (
              <button
                key={day}
                className={`px-8 py-3 rounded-full font-bold font-['Montserrat'] transition-colors ${
                  activeTab === day
                    ? 'bg-[#B5EAD7] text-neutral-800'
                    : 'bg-neutral-200 text-neutral-600'
                }`}
                onClick={() => setActiveTab(day)}
              >
                Day {index + 1}
              </button>
            ))}
          </div>

          <div className={activeTab === 'day1' ? 'block' : 'hidden'}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#B5EAD7]/10 p-6 rounded-2xl animate__animated animate__fadeInLeft">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-bold text-[#B5EAD7] font-['Montserrat']">9:00 AM - 11:00 AM</span>
                  <span className="px-4 py-1 rounded-full bg-[#B5EAD7]/20 text-[#030301b0] text-sm font-['Montserrat']">Main Stage</span>
                </div>
                <h3 className="text-xl font-bold text-neutral-800 mb-2 font-['Playfair_Display']">Opening Ceremony</h3>
                <p className="text-neutral-600 font-['Montserrat']">Inauguration and welcome address</p>
              </div>

              <div className="bg-[#BCC1BA]/10 p-6 rounded-2xl animate__animated animate__fadeInRight">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-bold text-[#BCC1BA] font-['Montserrat']">11:30 AM - 2:30 PM</span>
                  <span className="px-4 py-1 rounded-full bg-[#BCC1BA]/20 text-[#BCC1BA] text-sm font-['Montserrat']">Tech Hub</span>
                </div>
                <h3 className="text-xl font-bold text-neutral-800 mb-2 font-['Playfair_Display']">Hackathon Begins</h3>
                <p className="text-neutral-600 font-['Montserrat']">24-hour coding competition kicks off</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button className="inline-flex items-center gap-2 bg-[#B5EAD7] text-neutral-800 px-8 py-3 rounded-full hover:bg-[#BCC1BA] transition-colors duration-300 font-['Montserrat'] font-bold">
            Download Full Schedule
            <Download className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
