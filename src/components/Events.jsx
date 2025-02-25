import { Music, Waypoints, Trophy, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';


const Events = () => {
  return (
    <section className="py-20 bg-neutral-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate__animated animate__fadeIn">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#B5EAD7] mb-6 font-['Playfair_Display']">Featured Events</h2>
          <p className="text-lg text-[#BCC1BA] max-w-2xl mx-auto font-['Montserrat']">Discover our exciting lineup of events and competitions</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Fashion Walk */}
          <div className="bg-neutral-800 rounded-2xl p-6 hover:transform hover:scale-105 transition-all duration-300 animate__animated animate__fadeInUp">
            <div className="h-48 bg-[#B5EAD7]/20 rounded-xl mb-6 flex items-center justify-center">
              <Music className="w-16 h-16 text-[#B5EAD7]" />
            </div>
            <h3 className="text-2xl font-bold text-[#B5EAD7] mb-3 font-['Playfair_Display']">Fashion Walk</h3>
            <p className="text-[#BCC1BA] mb-4 font-['Montserrat']">A cultural fashion walk where student groups showcase Indian states through attire and performance</p>
            <ul className="text-white space-y-2 mb-6 font-['Montserrat']">
              <li>• State Representation: Each group represents a unique Indian state with traditional attire and a short act.</li>
              <li>• Pre-Registration & Screening: Entry requires a valid college ID, group registration, and a 1-minute walk video.</li>
              <li>• Judgment Criteria: Creativity, confidence, theme representation, gestures, and stage presence matter.</li>
            </ul>
            <Link
              to="https://drive.google.com/file/d/1wGLlmc8yu68X909Rrl2GD4pSTcj8sge4/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#B5EAD7] text-neutral-900 py-3 rounded-xl hover:bg-[#BCC1BA] transition-colors duration-300 font-bold font-['Montserrat'] text-center block"
            >
              View Rules
            </Link>          </div>

          {/* MAze of Deception */}
          <div className="bg-neutral-800 rounded-2xl p-6 hover:transform hover:scale-105 transition-all duration-300 animate__animated animate__fadeInUp" style={{ animationDelay: '0.2s' }}>
            <div className="h-48 bg-[#BCC1BA]/20 rounded-xl mb-6 flex items-center justify-center">
              <Waypoints className="w-16 h-16 text-[#BCC1BA]" />
            </div>
            <h3 className="text-2xl font-bold text-[#BCC1BA] mb-3 font-['Playfair_Display']">Maze Of Deception</h3>
            <p className="text-[#BCC1BA] mb-4 font-['Montserrat']">A strategic team-based challenge where participants navigate a maze, solving puzzles and playing traditional Indian games.</p>
            <ul className="text-white space-y-2 mb-6 font-['Montserrat']">
              <li>• Team-Based Strategy: Five-member teams solve puzzles and play traditional games at five checkpoints.</li>
              <li>• Pre-Registration & Quiz Round: Only pre-registered teams with valid college IDs can participate, with a quiz determining the top 10 teams.</li>
              <li>• Timed Competition: Teams must complete all checkpoints within 15 minutes while competing 1v1 against another team.</li>
            </ul>
            <Link
              to="https://drive.google.com/file/d/19nPZiTQkrUqDfOIX2xnIgwJLrH9lNCeS/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#B5EAD7] text-neutral-900 py-3 rounded-xl hover:bg-[#BCC1BA] transition-colors duration-300 font-bold font-['Montserrat'] text-center block"
            >
              View Rules
            </Link>
          </div>

          {/* Treasure Hunt */}
          <div className="bg-neutral-800 rounded-2xl p-6 hover:transform hover:scale-105 transition-all duration-300 animate__animated animate__fadeInUp" style={{ animationDelay: '0.4s' }}>
            <div className="h-48 bg-[#AEC6CF]/20 rounded-xl mb-6 flex items-center justify-center">
              <Trophy className="w-16 h-16 text-[#AEC6CF]" />
            </div>
            <h3 className="text-2xl font-bold text-[#AEC6CF] mb-3 font-['Playfair_Display']">Treasure Hunt</h3>
            <p className="text-[#BCC1BA] mb-4 font-['Montserrat']">A thrilling team-based treasure hunt where participants follow clues to uncover the final prize.</p>
            <ul className="text-white space-y-2 mb-6 font-['Montserrat']">
              <li>• Team Event: Each team must have 4-5 members from any year or branch, with no substitutes allowed.</li>
              <li>• Strict Rules: No cheating, mobile usage, or misbehavior; violators face disqualification.</li>
              <li>• Victory Criteria: Teams must follow clues in order, report after each round, and the first to find the treasure wins.</li>
            </ul>
            <Link
              to="https://drive.google.com/file/d/1Wy2wE-GkzKz1xGAhKyUT6jelaDB8QFK8/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#B5EAD7] text-neutral-900 py-3 rounded-xl hover:bg-[#BCC1BA] transition-colors duration-300 font-bold font-['Montserrat'] text-center block"
            >
              View Rules
            </Link>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            to="/events"
            className="inline-flex items-center gap-2 bg-transparent border-2 border-[#B5EAD7] text-[#B5EAD7] px-8 py-3 rounded-full hover:bg-[#B5EAD7] hover:text-neutral-900 transition-colors duration-300 font-['Montserrat']"
          >
            View All Events
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Events;
