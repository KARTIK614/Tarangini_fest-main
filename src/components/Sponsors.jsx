import { ArrowRight } from 'lucide-react';

const Sponsors = () => {
  return (
    <section className="py-20 bg-neutral-900 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate__animated animate__fadeIn">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#B5EAD7] mb-6 font-['Playfair_Display']">Our Event Organisers</h2>
          <p className="text-lg text-[#BCC1BA] max-w-2xl mx-auto font-['Montserrat']">Who Embarks the journey of the Tarangini 2K25.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-16">
          {[
            "Karan Singh Rathore",
            "Jitendra Meena",
            "Ashish Gonawat",
            "Harshpreet Singh",
            "Manish Saini"
          ].map((organizer, index) => (
            <div
              key={index}
              className="bg-neutral-800 p-8 rounded-2xl flex items-center justify-center hover:transform hover:scale-105 transition-all duration-300 animate__animated animate__fadeInUp"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="h-20 w-full flex items-center justify-center">
                <div className={`text-${index % 2 === 0 ? '[#B5EAD7]' : '[#BCC1BA]'} text-2xl font-bold font-['Montserrat']`}>
                  {organizer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-[#BCC1BA] mb-4 font-['Playfair_Display']">Become a Volunteer in Tarangini 2K25</h3>
            <p className="text-white/80 max-w-2xl mx-auto mb-8 font-['Montserrat']">
              Registrations are closed for now, we'll open them for opcoming events.
            </p>
          </div>

          <button className="inline-flex items-center gap-2 bg-[#B5EAD7] text-neutral-900 px-8 py-3 rounded-full hover:bg-[#BCC1BA] transition-colors duration-300 font-['Montserrat'] font-bold animate__animated animate__pulse animate__infinite">
            Register Yourself For Tarangini.
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>

        {/* Decorative elements */
          <link
            to=""
          ></link>
        }
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#B5EAD7] rounded-full filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#BCC1BA] rounded-full filter blur-3xl opacity-10"></div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
