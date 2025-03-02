import React, { useState } from 'react';
import { Music,Megaphone, Code,BookOpenCheck, Trophy, Aperture, CreditCard, Book, Mic, Camera, Brush, ChefHat, Gamepad, Brain, Target, Users, Rocket, Zap, Palette, Theater, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';


const EventsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const events = [
    {
      icon: <Music className="w-8 h-8" />,
      title: "Solo Singing",
      description: "Celebrate the spirit of valor and heritage with Gaurav Gatha – a tribute to cultural legends and heroic tales!",
      category: "Cultural",
      color: "rgba(203, 181, 234, 0.2)",
      textColor: "#CBB5EA",
      formLink: "https://drive.google.com/file/d/1HIo9oqG2yWCkas1wE4CMK5a57WGecq25/view?usp=drive_link"
    },
    {
      icon: <BookOpenCheck  className="w-8 h-8" />,
      title: "Gaurav Gatha",
      description: "Showcase your vocal talent in the Solo Singing Competition, sing your heart out with confidence, melody, and expression! 🎤🎶",
      category: "Cultural",
      color: "rgba(203, 181, 234, 0.2)",
      textColor: "#CBB5EA",
      formLink: "https://drive.google.com/file/d/1PzERvf9h1T7aDU5gbp_xpUqDHg9j9M7q/view?usp=drive_link"
    },
    {
      icon: <Megaphone  className="w-8 h-8" />,
      title: "Adminia",
      description: "Showcase your creativity with a twist! 🎭✨ Create and present original, humorous advertisements at Adminia – where innovation meets entertainment!",
      category: "Arts",
      color: "rgba(188, 193, 186, 0.2)",
      textColor: "#BCC1BA",
      formLink: "https://drive.google.com/file/d/1CBSaARiJ-t_u0l39eG__PoONpuGLIIPx/view?usp=sharing"
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Card Making",
      description: "🎨✨ Craft, Create, Compete—Showcase your artistry at Tarangini 2K25 Card Making Contest! 🖌️🎭",
      category: "Arts",
      color: "rgba(188, 193, 186, 0.2)",
      textColor: "#BCC1BA",
      formLink: "https://drive.google.com/file/d/1mBHgHlLsWqadVeiNG1dgHfT-6fj9x3nM/view?usp=drive_link"
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Talent Show",
      description: "🎭🎤 Showcase your talent, captivate the crowd—Tarangini 2K25 Talent Show awaits your magic! ✨🔥",
      category: "Arts",
      color: "rgba(174, 198, 207, 0.2)",
      textColor: "#AEC6CF",
      formLink: "https://drive.google.com/file/d/13qObi8f_F62mGkt1yzuX1qyVuOGhfxoX/view?usp=drive_link"
    },
    {
      icon: <Book className="w-8 h-8" />,
      title: "Maze of Deception",
      description: "Think. Solve. Conquer. 🌀 Maze of Deception – Only the smartest survive!",
      category: "Adventure",
      color: "rgba(203, 181, 234, 0.2)",
      textColor: "#CBB5EA",
      formLink: "https://drive.google.com/file/d/19nPZiTQkrUqDfOIX2xnIgwJLrH9lNCeS/view?usp=drive_link"
    },
    {
      icon: <Mic className="w-8 h-8" />,
      title: "Anchoring",
      description: "🎤 Own the stage with confidence and charisma—Tarangini 2K25 Anchoring Contest awaits you! ✨",
      category: "Cultural",
      color: "rgba(203, 181, 234, 0.2)",
      textColor: "#CBB5EA",
      formLink: "https://drive.google.com/file/d/1hOXmmngGl81wwizMFdzO8698Lczmk0n3/view?usp=drive_link"
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Photography contest",
      description: "📸 Capture the moment, unleash creativity—Tarangini 2K25 Photography Contest awaits your vision! 🌟",
      category: "Arts",
      color: "rgba(203, 181, 234, 0.2)",
      textColor: "#CBB5EA",
      formLink: "https://drive.google.com/file/d/1SDXxzOxiFvY75fj2WU-CtVvqMFeeu_ig/view?usp=drive_link"
    },
    {
      icon: <Brush className="w-8 h-8" />,
      title: "Act & Draw",
      description: "🎭🎨 Act, Draw, and Express—Tarangini 2K25 challenges your creativity like never before! ✨",
      category: "Arts",
      color: "rgba(188, 193, 186, 0.2)",
      textColor: "#BCC1BA",
      formLink: "https://drive.google.com/file/d/1Q0GuHh9mJVN3kk3DXfjtN8SVqbQaz4Ia/view?usp=drive_link"
    },
    {
      icon: <ChefHat className="w-8 h-8" />,
      title: "Mystry Box Cooking Challenge",
      description: "🍽️ Unbox, Cook, Conquer—Tarangini 2K25 Mystery Box Challenge tests your culinary creativity! 🔥👩‍🍳",
      category: "Cultural",
      color: "rgba(174, 198, 207, 0.2)",
      textColor: "#AEC6CF",
      formLink: "https://drive.google.com/file/d/140E7RoV1ZhLtclAo0ctdMibZraLCYRUY/view?usp=drive_link"
    },
    {
      icon: <Mic className="w-8 h-8" />,
      title: "Duet Singing",
      description: "🎶🎤 Two voices, one harmony—Sing your heart out at Tarangini 2K25 Duet Singing Competition! 🎼✨",
      category: "Cultural",
      color: "rgba(203, 181, 234, 0.2)",
      textColor: "#CBB5EA",
      formLink: "https://drive.google.com/file/d/1tVPMFeuw3i3zaFB1ZIcfQLJlVYjNvrGq/view?usp=drive_link"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Memory Vault",
      description: "🧠🔍 *Test your memory at Tarangini 2K25 Memory Vault—watch, recall, and conquer the challenge!* 🎥✍️",
      category: "Cultural",
      color: "rgba(203, 181, 234, 0.2)",
      textColor: "#CBB5EA",
      formLink: "https://drive.google.com/file/d/14M_yNKjazadpTQ1kmMIg3jEUPLxq5csy/view?usp=drive_link"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Treasure Hunt",
      description: "Decode. Discover. Dominate. 🏆 The ultimate Treasure Hunt awaits!",
      category: "Adventure",
      color: "rgba(188, 193, 186, 0.2)",
      textColor: "#BCC1BA",
      formLink: "https://drive.google.com/file/d/1Wy2wE-GkzKz1xGAhKyUT6jelaDB8QFK8/view?usp=drive_link"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Group Dance",
      description: "Groove. Shine. Conquer. 💃🕺 The stage is yours at Tarangini 2K25!",
      category: "Cultural",
      color: "rgba(174, 198, 207, 0.2)",
      textColor: "#AEC6CF",
      formLink: "https://drive.google.com/file/d/1JQtrisuGojLbggnLPUkgA7OGUzd4yj2e/view?usp=drive_link"
    },
    {
      icon: <Aperture className="w-8 h-8" />,
      title: "Rangoli Making",
      description: "🎨✨ *Unleash your creativity at Tarangini 2K25 Rangoli Competition—design, color, and impress with your artistic flair!* 🏵️🌸",
      category: "Cultural",
      color: "rgba(203, 181, 234, 0.2)",
      textColor: "#CBB5EA",
      formLink: "https://drive.google.com/file/d/1QbMU5ZC0e_KFYzZORh47MMcB-zY2D_yp/view?usp=drive_link"
    },
    {
      icon: <Theater className="w-8 h-8" />,
      title: "Solo Dance",
      description: "💃🔥 *Dance your heart out at Tarangini 2K25 Solo Dance Competition—grace, energy, and creativity take center stage!* 🎶✨",
      category: "Cultural",
      color: "rgba(203, 181, 234, 0.2)",
      textColor: "#CBB5EA",
      formLink: "https://drive.google.com/file/d/1j-uJPXuhpEOZ8ec-wcuMVBqC_A7lt8sS/view?usp=drive_link"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Face Painting",
      description: "🎭✨ *Unleash your creativity at Tarangini 2K25 Face Painting Competition—where art meets expression!* 🎨🎶",
      category: "Arts",
      color: "rgba(188, 193, 186, 0.2)",
      textColor: "#BCC1BA",
      formLink: "https://drive.google.com/file/d/1ejd2Mcmdl-_CYyrI6Cb6KlfDskdw4qBO/view?usp=drive_link"
    },
    {
      icon: <Theater className="w-8 h-8" />,
      title: "Fashion Walk",
      description: "Strut with Pride. Flaunt the Culture. 🌍✨ Tarangini 2K25 Fashion Show – Where Tradition Meets the Ramp",
      category: "Cultural",
      color: "rgba(174, 198, 207, 0.2)",
      textColor: "#AEC6CF",
      formLink: "https://drive.google.com/file/d/1DCy9NqHXUfNsEhNQelkHyEwRwLnGSZP9/view?usp=drive_link"
    }
  ];

  const categories = ['all', ...new Set(events.map(event => event.category))].sort();

  const filteredEvents = selectedCategory === 'all'
    ? events
    : events.filter(event => event.category === selectedCategory);

  return (
    <div className="min-h-screen bg-neutral-900 pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl font-bold text-[#CBB5EA] mb-6 font-['Playfair_Display']">
            Upcoming
          </h1>
          <p className="text-xl text-[#BCC1BA] max-w-3xl mx-auto font-['Montserrat']">
            Discover our diverse range of events spanning cultural, technical, sports, and literary domains
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-['Montserrat'] transition-all ${selectedCategory === category
                ? 'bg-[#CBB5EA] text-neutral-900'
                : 'bg-neutral-800 text-[#CBB5EA] hover:bg-neutral-700'
                }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredEvents.map((event, index) => (
            <div
              key={`${event.title}-${index}`}
              className="group relative backdrop-blur-sm rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 flex flex-col"
              style={{ backgroundColor: event.color }}
            >
              <div className="p-6 flex flex-col h-full">
                <div className="mb-4" style={{ color: event.textColor }}>
                  {event.icon}
                </div>
                <h3
                  className="text-xl font-bold mb-2 font-['Playfair_Display']"
                  style={{ color: event.textColor }}
                >
                  {event.title}
                </h3>
                <p className="text-white/80 mb-4 font-['Montserrat']">
                  {event.description}
                </p>
                <div className="flex flex-col gap-4 mt-auto pt-6">
                  <span
                    className="inline-block px-3 py-1 rounded-full text-sm font-['Montserrat']"
                    style={{
                      backgroundColor: `${event.textColor}20`,
                      color: event.textColor
                    }}
                  >
                    {event.category}
                  </span>
                  <a
                    href={event.formLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-3 rounded-lg text-sm font-['Montserrat'] text-center transition-all hover:opacity-90"
                    style={{
                      backgroundColor: event.textColor,
                      color: '#1a1a1a'
                    }}
                  >
                    View Rules
                  </a>
                </div>

              </div>

            </div>
          ))}

        </div>
      </div>
      
      <div className="flex justify-center mt-16">
      <Link
      //INSERT YOUR GOOGLE FORM LINK HERE
        to="https://forms.gle/gWPr8BY1r22fWoKJA"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-[#B5EAD7] text-neutral-800 px-8 py-3 rounded-full hover:bg-[#BCC1BA] transition-all duration-300 font-bold"
      >
        Register Now
        <ArrowRight className="h-5 w-5" />
      </Link>
    </div>
    </div>

  );
};

export default EventsPage;
