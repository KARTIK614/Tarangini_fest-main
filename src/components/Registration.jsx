import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Registration = () => {
  const [formData, setFormData] = useState({
    name: '',
    college: '',
    email: '',
    phone: '',
    events: [],
    notes: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section className="py-20 bg-neutral-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate__animated animate__fadeIn">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#B5EAD7] mb-6 font-['Playfair_Display']">Register Now</h2>
          <p className="text-lg text-[#BCC1BA] max-w-2xl mx-auto font-['Montserrat']">You can do the registrations via events section. This section is not needed yet as of now.</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-neutral-800 p-8 rounded-2xl shadow-xl">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="animate__animated animate__fadeInLeft">
                <label className="block text-[#B5EAD7] mb-2 font-['Montserrat']">Full Name *</label>
                <input 
                  type="text" 
                  required 
                  className="w-full bg-neutral-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#B5EAD7] font-['Montserrat']" 
                  placeholder="Enter your full name"
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>

              <div className="animate__animated animate__fadeInRight">
                <label className="block text-[#B5EAD7] mb-2 font-['Montserrat']">College/University *</label>
                <input 
                  type="text" 
                  required 
                  className="w-full bg-neutral-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#B5EAD7] font-['Montserrat']" 
                  placeholder="Enter your institution name"
                  onChange={(e) => setFormData({...formData, college: e.target.value})}
                />
              </div>

              <div className="animate__animated animate__fadeInLeft">
                <label className="block text-[#B5EAD7] mb-2 font-['Montserrat']">Email Address *</label>
                <input 
                  type="email" 
                  required 
                  className="w-full bg-neutral-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#B5EAD7] font-['Montserrat']" 
                  placeholder="Enter your email"
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>

              <div className="animate__animated animate__fadeInRight">
                <label className="block text-[#B5EAD7] mb-2 font-['Montserrat']">Phone Number *</label>
                <input 
                  type="tel" 
                  required 
                  className="w-full bg-neutral-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#B5EAD7] font-['Montserrat']" 
                  placeholder="Enter your phone number"
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>

              <div className="md:col-span-2 animate__animated animate__fadeInUp">
                <label className="block text-[#B5EAD7] mb-2 font-['Montserrat']">Select Events *</label>
                <div className="grid md:grid-cols-3 gap-4">
                  {['Cultural Events', 'Technical Events', 'Sports Events'].map((event) => (
                    <label key={event} className="flex items-center space-x-3 bg-neutral-700 p-4 rounded-lg cursor-pointer hover:bg-neutral-600 transition-colors">
                      <input 
                        type="checkbox" 
                        className="form-checkbox h-5 w-5 text-[#B5EAD7]"
                        onChange={(e) => {
                          const events = [...formData.events];
                          if (e.target.checked) {
                            events.push(event);
                          } else {
                            const index = events.indexOf(event);
                            if (index > -1) events.splice(index, 1);
                          }
                          setFormData({...formData, events});
                        }}
                      />
                      <span className="text-white font-['Montserrat']">{event}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="md:col-span-2 animate__animated animate__fadeInUp">
                <label className="block text-[#B5EAD7] mb-2 font-['Montserrat']">Additional Notes</label>
                <textarea 
                  className="w-full bg-neutral-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#B5EAD7] h-32 font-['Montserrat']" 
                  placeholder="Any specific requirements or questions?"
                  onChange={(e) => setFormData({...formData, notes: e.target.value})}
                ></textarea>
              </div>
            </div>

            <div className="mt-8 text-center">
              <button 
                type="submit" 
                className="bg-[#B5EAD7] text-neutral-900 px-12 py-4 rounded-full hover:bg-[#BCC1BA] transition-colors duration-300 font-bold font-['Montserrat'] inline-flex items-center gap-2 animate__animated animate__pulse animate__infinite"
              >
                Register Now
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Registration;
