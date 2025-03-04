import { useState } from 'react';
import { Download } from 'lucide-react';

const Schedule = () => {
  const [activeTab, setActiveTab] = useState('day1');

  const day1Events = [
    {
      time: '12:30-1:30 pm',
      title: 'Card and Poster Making',
      venue: 'NB 23',
      color: 'bg-[#B5EAD7]/10',
      textColor: 'text-neutral-800'
    },
    {
      time: '1:45-3:15 pm',
      title: 'Thermocol Cutout Challenge',
      venue: 'NB 23',
      color: 'bg-[#BCC1BA]/10',
      textColor: 'text-neutral-800'
    },
    {
      time: '1:45-2:45 pm',
      title: 'Memory Vault',
      venue: 'NB 24',
      color: 'bg-[#AEC6CF]/10',
      textColor: 'text-neutral-800'
    },
    {
      time: '3-4 pm',
      title: 'Photography',
      venue: 'Main Building Porch',
      color: 'bg-[#FFD1DC]/10',
      textColor: 'text-neutral-800'
    },
    {
      time: '4-5 pm',
      title: 'Rangoli',
      venue: 'Main Building Porch, First floor corridor',
      color: 'bg-[#B5EAD7]/10',
      textColor: 'text-neutral-800'
    },
    {
      time: '5:30-6:30 pm',
      title: 'Face Painting',
      venue: 'NB 23',
      color: 'bg-[#BCC1BA]/10',
      textColor: 'text-neutral-800'
    },
    {
      time: '5:30 onwards',
      title: 'Singing',
      venue: 'Stage',
      color: 'bg-[#AEC6CF]/10',
      textColor: 'text-neutral-800'
    },
    {
      time: '5:30 onwards',
      title: 'Gaurav Gatha',
      venue: 'Stage',
      color: 'bg-[#FFD1DC]/10',
      textColor: 'text-neutral-800'
    },
    {
      time: '5:30 onwards',
      title: 'Group Dance',
      venue: 'Stage',
      color: 'bg-[#B5EAD7]/10',
      textColor: 'text-neutral-800'
    }
  ];

  const day2Events = [
    {
      time: '1:30-3:30 pm',
      title: 'Treasure Hunt',
      venue: 'College Campus',
      color: 'bg-[#B5EAD7]/10',
      textColor: 'text-neutral-800'
    },
    {
      time: '3:30-4:30 pm',
      title: 'Mystery Box Cooking Challenge',
      venue: 'NB 24',
      color: 'bg-[#BCC1BA]/10',
      textColor: 'text-neutral-800'
    },
    {
      time: '3:30-4:30 pm',
      title: 'Act and Draw',
      venue: 'NB 23',
      color: 'bg-[#AEC6CF]/10',
      textColor: 'text-neutral-800'
    },
    {
      time: '4:30-5:30 pm',
      title: 'Maze of Deception',
      venue: 'Civil Block Parking',
      color: 'bg-[#FFD1DC]/10',
      textColor: 'text-neutral-800'
    },
    {
      time: '5:30 onwards',
      title: 'Solo Dance',
      venue: 'Stage',
      color: 'bg-[#B5EAD7]/10',
      textColor: 'text-neutral-800'
    },
    {
      time: '5:30 onwards',
      title: 'Adminia',
      venue: 'Stage',
      color: 'bg-[#BCC1BA]/10',
      textColor: 'text-neutral-800'
    },
    {
      time: '5:30 onwards',
      title: 'Fashion Show',
      venue: 'Stage',
      color: 'bg-[#AEC6CF]/10',
      textColor: 'text-neutral-800'
    },
    {
      time: '5:30 onwards',
      title: 'Duet Singing',
      venue: 'Stage',
      color: 'bg-[#FFD1DC]/10',
      textColor: 'text-neutral-800'
    }
  ];

  return (
    <section id="schedule" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate__animated animate__fadeIn">
          <h2 className="text-4xl lg:text-5xl font-bold text-neutral-800 mb-6 font-['Playfair_Display']">Event Schedule</h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto font-['Montserrat']">Two days packed with exciting events and performances</p>
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

          <div className="grid md:grid-cols-3 gap-6">
            {(activeTab === 'day1' ? day1Events : day2Events).map((event, index) => (
              <div
                key={index}
                className={`group relative ${event.color} p-6 rounded-2xl animate__animated animate__fadeIn transition-colors duration-300 hover:bg-neutral-800`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-bold text-neutral-800 font-['Montserrat'] group-hover:text-white transition-colors duration-300">
                    {event.time}
                  </span>
                  <span className="px-4 py-1 rounded-full bg-neutral-200 text-neutral-600 group-hover:bg-neutral-700 group-hover:text-neutral-200 text-sm font-['Montserrat'] transition-colors duration-300">
                    {event.venue}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-neutral-800 mb-2 font-['Playfair_Display'] group-hover:text-white transition-colors duration-300">
                  {event.title}
                </h3>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <a
            href="https://drive.google.com/file/d/1sWzXEHOPn8xTQ8ssplAKkxgzB8zw6Ned/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#B5EAD7] text-neutral-800 px-8 py-3 rounded-full hover:bg-[#BCC1BA] transition-colors duration-300 font-['Montserrat'] font-bold"
          >
            Download Full Schedule
            <Download className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Schedule;