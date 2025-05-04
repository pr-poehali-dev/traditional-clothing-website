
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Circle } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      
      {/* Hero секция */}
      <div className="relative h-[90vh] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1599707367072-cd6ada2bc375')] bg-cover bg-center">
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-center text-white">
          <span className="text-gold font-medium mb-2">Silk & Dynasty</span>
          <h1 className="text-5xl md:text-7xl font-serif font-medium mb-4">
            Explore the Elegance of <br />
            Chinese Tradition
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-xl mb-8">
            Learn the history behind every fold of silk, every stitch of embroidery, and the cultural legacy of dynasties.
          </p>
          <div>
            <Button className="bg-gold hover:bg-gold/90 text-dark rounded-none text-base px-8 py-6">
              Start Exploring <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* О проекте */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <span className="text-gold font-medium">About the Project</span>
              <h2 className="text-3xl md:text-4xl font-serif font-medium mt-2 mb-6">
                Preserving Heritage Through Elegant Threads
              </h2>
              <p className="text-dark/80 mb-4">
                Our mission is to popularize Chinese culture through traditional clothing, 
                presenting its rich history and deep symbolism to the world. We aim to bridge 
                the past with the present, showing how ancient styles remain relevant and inspiring.
              </p>
              <p className="text-dark/80 mb-6">
                Behind Silk & Dynasty stands a dedicated team of historians, designers, and 
                cultural enthusiasts who believe in the importance of preserving and celebrating 
                this aspect of Chinese heritage.
              </p>
              <Button variant="outline" className="border-gold text-gold hover:bg-gold/5 rounded-none">
                Learn More About Us
              </Button>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1585129819171-308acb36547c" 
                  alt="Traditional embroidery" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-64 overflow-hidden mt-8">
                <img 
                  src="https://images.unsplash.com/photo-1599828586134-af2d93667996" 
                  alt="Person in traditional hanfu" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Эпохи и стили */}
      <section className="py-20 px-6 bg-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-gold font-medium">Dynasties & Styles</span>
            <h2 className="text-3xl md:text-4xl font-serif font-medium mt-2 mb-4">
              Explore Clothing Through History
            </h2>
            <p className="text-dark/80 max-w-2xl mx-auto">
              Journey through China's imperial eras and discover how clothing evolved, 
              reflecting each dynasty's unique cultural values and aesthetic sensibilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {dynasties.map((dynasty) => (
              <div key={dynasty.id} className="group relative overflow-hidden cursor-pointer">
                <div className="h-96 overflow-hidden">
                  <img 
                    src={dynasty.image} 
                    alt={dynasty.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 text-white">
                  <h3 className="text-2xl font-serif mb-2">{dynasty.name}</h3>
                  <p className="text-white/80 mb-4">{dynasty.period}</p>
                  <div className="overflow-hidden h-0 group-hover:h-auto transition-all duration-300">
                    <p className="mb-4">{dynasty.description}</p>
                    <Link to={`/dynasty/${dynasty.id}`}>
                      <Button className="bg-gold hover:bg-gold/90 text-dark rounded-none text-sm">
                        Explore Dynasty
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" className="border-gold text-gold hover:bg-gold/5 rounded-none">
              View All Dynasties
            </Button>
          </div>
        </div>
      </section>

      {/* Материалы и символика */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-gold font-medium">Fabrics & Symbols</span>
            <h2 className="text-3xl md:text-4xl font-serif font-medium mt-2 mb-4">
              The Language of Cloth
            </h2>
            <p className="text-dark/80 max-w-2xl mx-auto">
              Discover the rich symbolism embedded in traditional Chinese garments,
              from auspicious patterns to the meaning behind every color and textile.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {symbols.map((symbol) => (
              <div key={symbol.id} className="bg-light p-6 hover:shadow-md transition-shadow">
                <div className="text-gold text-3xl mb-4">
                  {symbol.emoji}
                </div>
                <h3 className="text-xl font-medium mb-2">{symbol.name}</h3>
                <p className="text-dark/80 text-sm">{symbol.meaning}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" className="border-gold text-gold hover:bg-gold/5 rounded-none">
              Explore All Symbols
            </Button>
          </div>
        </div>
      </section>

      {/* Как носить ханфу */}
      <section className="py-20 px-6 bg-light">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <span className="text-gold font-medium">How to Wear Hanfu</span>
              <h2 className="text-3xl md:text-4xl font-serif font-medium mt-2 mb-6">
                Master the Art of Traditional Dress
              </h2>
              <p className="text-dark/80 mb-4">
                Whether you're new to hanfu or looking to perfect your style, our guides
                provide step-by-step instructions for properly wearing traditional Chinese clothing.
              </p>
              
              <ul className="space-y-4 mb-8">
                {guides.map((guide) => (
                  <li key={guide.id} className="flex items-start">
                    <Circle className="h-4 w-4 text-gold mt-1 mr-3 fill-current" />
                    <div>
                      <h3 className="font-medium">{guide.title}</h3>
                      <p className="text-dark/80 text-sm">{guide.description}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <Button className="bg-gold hover:bg-gold/90 text-dark rounded-none">
                View All Guides
              </Button>
            </div>
            <div className="md:w-1/2">
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1628529861456-df351c7dfe38" 
                  alt="Person wearing Hanfu" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-gold/90 rounded-full p-5 cursor-pointer">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Галерея */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-gold font-medium">Gallery</span>
            <h2 className="text-3xl md:text-4xl font-serif font-medium mt-2 mb-4">
              Inspiration from the Community
            </h2>
            <p className="text-dark/80 max-w-2xl mx-auto">
              Browse photos from enthusiasts around the world who share their love
              for traditional Chinese clothing.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {gallery.map((item) => (
              <div key={item.id} className="relative overflow-hidden group cursor-pointer h-64">
                <img 
                  src={item.image} 
                  alt={item.caption} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                  <p className="text-white text-center text-sm">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" className="border-gold text-gold hover:bg-gold/5 rounded-none">
              View Full Gallery
            </Button>
          </div>
        </div>
      </section>

      {/* Контакты */}
      <section className="py-20 px-6 bg-dark text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-gold font-medium">Join & Contact</span>
            <h2 className="text-3xl md:text-4xl font-serif font-medium mt-2 mb-4">
              Become Part of Our Community
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Connect with fellow enthusiasts, contribute your knowledge, or simply reach out with questions.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <h3 className="text-xl font-medium mb-4">How to Get Involved</h3>
              <p className="text-white/80 mb-6">
                We welcome contributors, partners, and volunteers who share our passion
                for preserving and promoting traditional Chinese clothing.
              </p>
              <div className="flex space-x-4">
                <Button className="bg-gold hover:bg-gold/90 text-dark rounded-none">
                  Become a Contributor
                </Button>
                <Button variant="outline" className="border-white/20 hover:bg-white/5 rounded-none">
                  Partner With Us
                </Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <h3 className="text-xl font-medium mb-4">Follow Our Journey</h3>
              <p className="text-white/80 mb-6">
                Stay updated with our latest articles, events, and community highlights
                by following us on social media.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="p-3 border border-white/20 rounded-full hover:bg-white/5">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 4.864v.001a10.041 10.041 0 01-2.883.791 5.031 5.031 0 002.2-2.767 9.987 9.987 0 01-3.192 1.222 5.012 5.012 0 00-8.539 4.566A14.217 14.217 0 014.084 3.54a4.978 4.978 0 001.554 6.675 4.977 4.977 0 01-2.27-.627v.064a5.014 5.014 0 004.021 4.917 5.01 5.01 0 01-2.264.085 5.02 5.02 0 004.683 3.482 10.066 10.066 0 01-6.229 2.149c-.404 0-.804-.023-1.195-.069a14.184 14.184 0 007.689 2.252c9.227 0 14.273-7.646 14.273-14.274 0-.216-.004-.432-.014-.647a10.231 10.231 0 002.516-2.598l.002-.003z" />
                  </svg>
                </a>
                <a href="#" className="p-3 border border-white/20 rounded-full hover:bg-white/5">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a href="#" className="p-3 border border-white/20 rounded-full hover:bg-white/5">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21.98 7.448a2.91 2.91 0 00-2.053-2.057C18.306 5 12 5 12 5s-6.307 0-7.928.39A2.91 2.91 0 002.02 7.447c-.39 1.623-.39 5.012-.39 5.012s0 3.388.39 5.01a2.91 2.91 0 002.053 2.058C5.693 19.91 12 19.91 12 19.91s6.307 0 7.928-.39a2.91 2.91 0 002.052-2.058c.39-1.622.39-5.01.39-5.01s.001-3.39-.39-5.012zm-11.732 8.089V9.382l5.3 3.076-5.3 3.079z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

// Данные для разделов сайта
const dynasties = [
  {
    id: 1,
    name: "Han Dynasty",
    period: "206 BCE - 220 CE",
    description: "The Han dynasty established many of the foundational elements of traditional Chinese clothing, including the iconic cross-collar robe.",
    image: "https://images.unsplash.com/photo-1620503374956-c942862f0372"
  },
  {
    id: 2,
    name: "Tang Dynasty",
    period: "618 - 907 CE",
    description: "Known as China's golden age, Tang dynasty clothing featured vibrant colors, open necklines, and influences from the Silk Road.",
    image: "https://images.unsplash.com/photo-1511889486728-4da0dfa8d818"
  },
  {
    id: 3,
    name: "Ming Dynasty",
    period: "1368 - 1644 CE",
    description: "Ming clothing is characterized by its formality and strict adherence to social hierarchy, with distinct styles for different social classes.",
    image: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2"
  }
];

const symbols = [
  {
    id: 1,
    name: "Dragon",
    meaning: "Symbol of imperial power, strength, and good fortune. Reserved for emperors in many dynasties.",
    emoji: "🐉"
  },
  {
    id: 2,
    name: "Phoenix",
    meaning: "Representing rebirth, virtue, and grace. Associated with empresses and high-ranking women.",
    emoji: "🦅"
  },
  {
    id: 3,
    name: "Peony",
    meaning: "The 'king of flowers' symbolizing wealth, honor, and high social status.",
    emoji: "🌸"
  },
  {
    id: 4,
    name: "Cloud Pattern",
    meaning: "Representing celestial realms and immortality, clouds connect human and divine worlds.",
    emoji: "☁️"
  }
];

const guides = [
  {
    id: 1,
    title: "Basic Hanfu Structure",
    description: "Learn the essential components that make up traditional hanfu garments."
  },
  {
    id: 2,
    title: "Tying Techniques",
    description: "Master different methods for securing your hanfu with traditional knots and ties."
  },
  {
    id: 3,
    title: "Seasonal Adaptations",
    description: "Discover how to adjust your hanfu for different weather conditions throughout the year."
  }
];

const gallery = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1622400583791-061dfe48ebd9",
    caption: "Spring Festival Hanfu by Mei Lin"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1593829111182-8a2a6b362155",
    caption: "Tang-inspired ensemble at West Lake"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1617480022239-2509222c679f",
    caption: "Modern Qixiong Ruqun adaptation"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11",
    caption: "Silk embroidery detail from Ming dynasty replica"
  }
];

export default Index;
