
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle2, Users, BookOpen, Globe, ArrowRight } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      
      {/* Hero секция */}
      <div className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1610893504923-271edf145d83')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-center text-white">
          <span className="text-gold font-medium mb-2">About Us</span>
          <h1 className="text-4xl md:text-6xl font-serif font-medium mb-4">
            The Story Behind Silk & Dynasty
          </h1>
          <p className="text-xl font-light max-w-xl mb-8">
            Preserving and celebrating the rich history of traditional Chinese clothing through the ages.
          </p>
        </div>
      </div>
      
      {/* О проекте - основная информация */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-16">
            <div className="md:w-1/2">
              <span className="text-gold font-medium">Our Mission</span>
              <h2 className="text-3xl md:text-4xl font-serif font-medium mt-2 mb-6">
                Bridging Past & Present Through Textile Heritage
              </h2>
              <p className="text-dark/80 mb-6 leading-relaxed">
                Founded in 2022, Silk & Dynasty began as a passion project among a group of historians, designers, and cultural enthusiasts who recognized the need to document and preserve knowledge about traditional Chinese clothing.
              </p>
              <p className="text-dark/80 mb-6 leading-relaxed">
                What started as a small collection of research papers and photographs has grown into a comprehensive digital archive and educational platform. Our mission is to make the rich history of Chinese textile arts accessible to everyone—from serious researchers to casual enthusiasts.
              </p>
              <p className="text-dark/80 mb-6 leading-relaxed">
                Through meticulous research, collaboration with museums and private collectors, and partnerships with contemporary craftspeople, we strive to create the most accurate and engaging resource on traditional Chinese clothing available online.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="h-full relative rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1565831470627-89c9d15696a0" 
                  alt="Team members examining historic textiles" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 p-6 text-white">
                  <p className="text-sm font-light">Our team conducting research at the National Silk Museum, Hangzhou</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Наши ценности */}
      <section className="py-20 px-6 bg-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-gold font-medium">Our Values</span>
            <h2 className="text-3xl md:text-4xl font-serif font-medium mt-2 mb-4">
              Guiding Principles
            </h2>
            <p className="text-dark/80 max-w-2xl mx-auto">
              These core values inform everything we do, from research methodologies to content presentation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
            {values.map((value) => (
              <div key={value.id} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                    {value.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">{value.title}</h3>
                  <p className="text-dark/80 leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Наша команда */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-gold font-medium">Our Team</span>
            <h2 className="text-3xl md:text-4xl font-serif font-medium mt-2 mb-4">
              The People Behind Silk & Dynasty
            </h2>
            <p className="text-dark/80 max-w-2xl mx-auto">
              Our diverse team brings together expertise in Chinese history, textile conservation, design, and digital media.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {team.map((member) => (
              <div key={member.id} className="group">
                <div className="overflow-hidden mb-4">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full aspect-[3/4] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-medium">{member.name}</h3>
                <p className="text-gold mb-2">{member.role}</p>
                <p className="text-dark/80 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Button variant="outline" className="border-gold text-gold hover:bg-gold/5 rounded-none">
              Meet Our Extended Team
            </Button>
          </div>
        </div>
      </section>
      
      {/* Исследовательская методология */}
      <section className="py-20 px-6 bg-light">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <span className="text-gold font-medium">Our Methodology</span>
              <h2 className="text-3xl md:text-4xl font-serif font-medium mt-2 mb-6">
                How We Conduct Our Research
              </h2>
              <p className="text-dark/80 mb-6 leading-relaxed">
                Our commitment to accuracy and authenticity shapes our research approach. We combine traditional academic methods with innovative digital techniques to create a comprehensive picture of historical Chinese clothing.
              </p>
              <ul className="space-y-4">
                {methods.map((method) => (
                  <li key={method.id} className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-gold mt-1 mr-3" />
                    <div>
                      <h3 className="font-medium">{method.title}</h3>
                      <p className="text-dark/80 text-sm">{method.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white p-8 shadow-sm">
                <h3 className="text-xl font-medium mb-4">Our Sources</h3>
                <p className="text-dark/80 mb-6">
                  We draw from a wide range of sources to ensure our information is accurate, comprehensive, and contextually rich:
                </p>
                <ul className="space-y-4">
                  {sources.map((source) => (
                    <li key={source.id} className="border-b border-gray-200 pb-4">
                      <h4 className="font-medium">{source.title}</h4>
                      <p className="text-dark/80 text-sm">{source.description}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Сотрудничество */}
      <section className="py-20 px-6 bg-dark text-white">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-gold font-medium">Collaborate</span>
          <h2 className="text-3xl md:text-4xl font-serif font-medium mt-2 mb-4">
            Join Our Mission
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-10">
            We're always looking for collaborators, contributors, and partners who share our passion for Chinese textile heritage.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Button className="bg-gold hover:bg-gold/90 text-dark rounded-none">
              Become a Contributor <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" className="border-white/20 hover:bg-white/5 rounded-none">
              Support Our Work
            </Button>
            <Button variant="outline" className="border-white/20 hover:bg-white/5 rounded-none">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

// Данные для страницы
const values = [
  {
    id: 1,
    title: "Historical Accuracy",
    description: "We prioritize factual correctness and context, ensuring all information is thoroughly researched and verified against multiple academic sources.",
    icon: <BookOpen className="h-6 w-6" />
  },
  {
    id: 2,
    title: "Cultural Respect",
    description: "We approach our subject with deep respect for Chinese cultural heritage, avoiding appropriation and ensuring proper attribution and context.",
    icon: <Globe className="h-6 w-6" />
  },
  {
    id: 3,
    title: "Accessibility",
    description: "We believe knowledge should be accessible to all, presenting complex historical information in engaging, understandable ways for diverse audiences.",
    icon: <Users className="h-6 w-6" />
  },
  {
    id: 4,
    title: "Collaborative Spirit",
    description: "We value partnerships with museums, scholars, artisans, and enthusiasts, recognizing that the best insights come from diverse perspectives.",
    icon: <CheckCircle2 className="h-6 w-6" />
  }
];

const team = [
  {
    id: 1,
    name: "Dr. Lin Mei",
    role: "Founder & Historical Director",
    bio: "With a Ph.D. in East Asian History and 15 years of experience in textile conservation, Lin leads our research methodology and academic partnerships.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956"
  },
  {
    id: 2,
    name: "Zhang Wei",
    role: "Creative Director",
    bio: "A traditional Chinese clothing designer with a background in museum curation, Wei oversees our visual direction and educational exhibits.",
    image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d"
  },
  {
    id: 3,
    name: "Sarah Chen",
    role: "Digital Content Manager",
    bio: "Combining expertise in digital media with a passion for Chinese cultural history, Sarah develops our online presence and educational resources.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
  }
];

const methods = [
  {
    id: 1,
    title: "Primary Source Analysis",
    description: "We examine historical texts, artifacts, paintings, and archaeological findings to understand clothing styles, construction techniques, and cultural context."
  },
  {
    id: 2,
    title: "Cross-Disciplinary Approach",
    description: "We integrate insights from history, anthropology, art history, and textile science for a comprehensive understanding of historical garments."
  },
  {
    id: 3,
    title: "Practical Reconstruction",
    description: "We work with master artisans to recreate historical garments, testing theories and documenting traditional techniques that might otherwise be lost."
  },
  {
    id: 4,
    title: "Digital Documentation",
    description: "We use 3D modeling, high-resolution photography, and detailed illustrations to document historical garments and make them accessible online."
  }
];

const sources = [
  {
    id: 1,
    title: "Historical Records & Literature",
    description: "Dynasty histories, poetry, essays, and novels that mention clothing practices and textile production."
  },
  {
    id: 2,
    title: "Visual References",
    description: "Paintings, tomb murals, sculpture, and other artistic representations of clothing from different periods."
  },
  {
    id: 3,
    title: "Archaeological Findings",
    description: "Preserved garments, textile fragments, and related artifacts recovered from archaeological sites."
  },
  {
    id: 4,
    title: "Museum Collections",
    description: "Studying extant historical garments and textiles preserved in museums worldwide."
  },
  {
    id: 5,
    title: "Technical Manuals",
    description: "Historical documents describing weaving, dyeing, and embroidery techniques used in traditional textile production."
  }
];

export default AboutPage;
