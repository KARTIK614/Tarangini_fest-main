import { ArrowRight } from 'lucide-react';

const Gallery = () => {
  const galleryItems = [
    {
      title: "Freashers",
      description: "Panna Dhay Event",
      image: "https://res.cloudinary.com/di5h1gnx5/image/upload/v1740676368/WhatsApp_Image_2025-02-27_at_11.45.07_515ee2eb_kz7q62.png"
    },
    {
      title: "Freashers",
      description: "Fashion Show",
      image: "https://res.cloudinary.com/di5h1gnx5/image/upload/v1740676555/WhatsApp_Image_2025-02-27_at_10.27.54_c53bc8d8_swmbav.jpg"
    },
    {
      title: "Freashers",
      description: "Cultural Dance Performance",
      image: "https://res.cloudinary.com/di5h1gnx5/image/upload/v1740633437/first_image_y0hlpp.jpg"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate__animated animate__fadeIn">
          <h2 className="text-4xl lg:text-5xl font-bold text-neutral-800 mb-6 font-['Playfair_Display']">Event Gallery</h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto font-['Montserrat']">Glimpses of our previous fest celebrations.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl aspect-square animate__animated animate__fadeInUp"
              style={{ 
                animationDelay: `${index * 0.2}s`,
                backgroundImage: `url(${item.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 opacity-0 group-hover:opacity-100"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-bold mb-2 font-['Playfair_Display']">{item.title}</h3>
                <p className="text-sm font-['Montserrat']">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 bg-[#B5EAD7] text-neutral-800 px-8 py-3 rounded-full hover:bg-[#BCC1BA] transition-colors duration-300 font-['Montserrat'] font-bold">
            View Full Gallery
            <ArrowRight className="h-5 w-5" />
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default Gallery;
