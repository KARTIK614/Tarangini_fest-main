import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Contact form submitted');
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="animate__animated animate__fadeInLeft">
            <h2 className="text-4xl lg:text-5xl font-bold text-neutral-800 mb-6 font-['Playfair_Display']">Get in Touch</h2>
            <p className="text-lg text-neutral-600 mb-8 font-['Montserrat']">Have questions about the fest? We're here to help!</p>
            
            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#B5EAD7]/20 flex items-center justify-center">
                  <Mail className="h-6 w-6 text-[#B5EAD7]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-800 font-['Playfair_Display']">Email Us</h3>
                  <p className="text-neutral-600 font-['Montserrat']">21cs39@ecajmer.ac.in</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#BCC1BA]/20 flex items-center justify-center">
                  <Phone className="h-6 w-6 text-[#BCC1BA]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-800 font-['Playfair_Display']">Call Us</h3>
                  <p className="text-neutral-600 font-['Montserrat']">+91 9672903736: (Karan Singh Rathore)</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#AEC6CF]/20 flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-[#AEC6CF]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-800 font-['Playfair_Display']">Location</h3>
                  <p className="text-neutral-600 font-['Montserrat']">Government Engineering College, Ajmer, Rajasthan</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-neutral-50 p-8 rounded-2xl shadow-lg animate__animated animate__fadeInRight overflow-hidden">
            {/* Replace the URL below with your actual Cloudinary image URL */}
            <img 
              src="https://res.cloudinary.com/di5h1gnx5/image/upload/v1740634515/file_txw2yr.png" 
              alt="Contact us" 
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
