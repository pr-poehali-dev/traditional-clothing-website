
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, Check, ChevronRight } from "lucide-react";

const GuidePage = () => {
  const [activeStep, setActiveStep] = useState(0);
  const hanfuType = "ruqun"; // В реальном приложении это может быть параметр или состояние

  const handleNextStep = () => {
    if (activeStep < guideSteps[hanfuType].length - 1) {
      setActiveStep(activeStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1);
    }
  };

  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      
      {/* Hero секция */}
      <div className="relative h-[50vh] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1628529861456-df351c7dfe38')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-center text-white">
          <span className="text-gold font-medium mb-2">Learning Resources</span>
          <h1 className="text-4xl md:text-6xl font-serif font-medium mb-4">
            How to Wear Hanfu
          </h1>
          <p className="text-xl font-light max-w-xl mb-8">
            Master the art of traditional Chinese dress with our step-by-step guides.
          </p>
        </div>
      </div>
      
      {/* Типы ханьфу */}
      <section className="py-12 px-6 bg-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-serif font-medium mb-4">Select Hanfu Style</h2>
            <p className="text-dark/80 max-w-2xl mx-auto">
              Different hanfu styles require different dressing techniques. Choose a style to see specific instructions.
            </p>
          </div>
          
          <Tabs defaultValue="ruqun" className="w-full">
            <TabsList className="grid grid-cols-3 w-full max-w-xl mx-auto mb-8">
              <TabsTrigger value="ruqun">Ruqun</TabsTrigger>
              <TabsTrigger value="aoqun">Aoqun</TabsTrigger>
              <TabsTrigger value="panling">Panling</TabsTrigger>
            </TabsList>
            
            <TabsContent value="ruqun">
              <div className="flex flex-col md:flex-row gap-10">
                <div className="md:w-1/3">
                  <div className="bg-white shadow-sm">
                    <img 
                      src="https://images.unsplash.com/photo-1622400583791-061dfe48ebd9" 
                      alt="Ruqun Style Hanfu" 
                      className="w-full aspect-[3/4] object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-medium mb-2">Ruqun (襦裙)</h3>
                      <p className="text-dark/80 mb-4">
                        A traditional two-piece ensemble consisting of a ru (upper garment) and a qun (skirt). This style was popular throughout many dynasties, particularly during the Han and Tang periods.
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <span className="text-gold mr-2">●</span>
                          <span>Difficulty: Moderate</span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-gold mr-2">●</span>
                          <span>Components: 5-6 pieces</span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-gold mr-2">●</span>
                          <span>Time: ~15 minutes</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="md:w-2/3">
                  <div className="bg-white p-8 shadow-sm">
                    <h3 className="text-2xl font-serif mb-6">Ruqun Dressing Guide</h3>
                    
                    {/* Прогресс */}
                    <div className="mb-8">
                      <div className="flex justify-between mb-2">
                        <span>Progress</span>
                        <span>{activeStep + 1} of {guideSteps[hanfuType].length}</span>
                      </div>
                      <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gold transition-all duration-300" 
                          style={{ width: `${((activeStep + 1) / guideSteps[hanfuType].length) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    {/* Шаги */}
                    <div className="mb-8">
                      <div className="relative">
                        {guideSteps[hanfuType].map((step, index) => (
                          <div
                            key={index}
                            className={`${index === activeStep ? 'block' : 'hidden'}`}
                          >
                            <div className="flex flex-col md:flex-row gap-6">
                              <div className="md:w-1/2">
                                <img 
                                  src={step.image} 
                                  alt={`Step ${index + 1}`} 
                                  className="w-full aspect-[4/3] object-cover mb-4"
                                />
                              </div>
                              <div className="md:w-1/2">
                                <h4 className="text-xl font-medium mb-2">
                                  Step {index + 1}: {step.title}
                                </h4>
                                <p className="text-dark/80 mb-6">
                                  {step.description}
                                </p>
                                <div className="bg-light p-4 border-l-4 border-gold">
                                  <h5 className="font-medium mb-2">Tips:</h5>
                                  <ul className="space-y-2">
                                    {step.tips.map((tip, i) => (
                                      <li key={i} className="flex items-start">
                                        <ChevronRight className="h-4 w-4 text-gold mt-1 mr-2" />
                                        <span className="text-sm">{tip}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Навигация по шагам */}
                    <div className="flex justify-between">
                      <Button 
                        variant="outline" 
                        className="border-gold text-gold hover:bg-gold/5 rounded-none"
                        onClick={handlePrevStep}
                        disabled={activeStep === 0}
                      >
                        Previous Step
                      </Button>
                      
                      {activeStep < guideSteps[hanfuType].length - 1 ? (
                        <Button 
                          className="bg-gold hover:bg-gold/90 text-dark rounded-none"
                          onClick={handleNextStep}
                        >
                          Next Step <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      ) : (
                        <Button className="bg-gold hover:bg-gold/90 text-dark rounded-none">
                          Complete <Check className="ml-2 h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="aoqun">
              <div className="text-center py-12">
                <p className="text-dark/80 mb-6">Coming soon. Please check back later for this guide.</p>
                <Button variant="outline" className="border-gold text-gold hover:bg-gold/5 rounded-none">
                  Explore Ruqun Style Instead
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="panling">
              <div className="text-center py-12">
                <p className="text-dark/80 mb-6">Coming soon. Please check back later for this guide.</p>
                <Button variant="outline" className="border-gold text-gold hover:bg-gold/5 rounded-none">
                  Explore Ruqun Style Instead
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* Часто задаваемые вопросы */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-serif font-medium mb-4">Frequently Asked Questions</h2>
            <p className="text-dark/80 max-w-2xl mx-auto">
              Common questions about wearing and caring for traditional hanfu garments.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-dark/80">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
      
      {/* Видео ресурсы */}
      <section className="py-16 px-6 bg-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-serif font-medium mb-4">Video Resources</h2>
            <p className="text-dark/80 max-w-2xl mx-auto">
              Watch detailed demonstrations for additional guidance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {videos.map((video, index) => (
              <div key={index} className="bg-white shadow-sm">
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-gold/90 rounded-full p-4 cursor-pointer">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-medium mb-1">{video.title}</h3>
                  <p className="text-dark/70 text-sm">{video.duration}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button variant="outline" className="border-gold text-gold hover:bg-gold/5 rounded-none">
              View All Videos
            </Button>
          </div>
        </div>
      </section>
      
      {/* Дополнительные ресурсы */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-serif font-medium mb-4">Additional Resources</h2>
            <p className="text-dark/80 max-w-2xl mx-auto">
              Explore more guides and references for your hanfu journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link to="/symbols" className="block group">
              <div className="bg-light p-8 h-full transition-transform group-hover:translate-y-[-5px]">
                <h3 className="text-xl font-medium mb-2">Understanding Symbols & Patterns</h3>
                <p className="text-dark/80 mb-4">Learn about the symbolism behind traditional motifs and how they were used in different dynasties.</p>
                <span className="text-gold flex items-center">
                  Explore Symbolism <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </div>
            </Link>
            
            <Link to="/accessories" className="block group">
              <div className="bg-light p-8 h-full transition-transform group-hover:translate-y-[-5px]">
                <h3 className="text-xl font-medium mb-2">Hairstyles & Accessories Guide</h3>
                <p className="text-dark/80 mb-4">Discover traditional hairstyles and accessories that complete the hanfu ensemble.</p>
                <span className="text-gold flex items-center">
                  View Accessories <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

// Данные для страницы
const guideSteps = {
  ruqun: [
    {
      title: "Put on the Undergarments",
      description: "Begin with the zhongyi (中衣), a simple white or light-colored undergarment that serves as the base layer. It should fit comfortably with sleeves extending to your wrists.",
      image: "https://images.unsplash.com/photo-1585129819171-308acb36547c",
      tips: [
        "Make sure the undergarment is properly secured before moving to the next step.",
        "Traditional undergarments are typically made of light cotton or silk for comfort.",
        "The neckline should be slightly lower than your outer garments to remain hidden."
      ]
    },
    {
      title: "Put on the Skirt (Qun)",
      description: "The skirt is wrapped around your waist with the opening typically on the right side. Secure it with ties, ensuring it sits high on your waist, typically just below the bust line for traditional styles.",
      image: "https://images.unsplash.com/photo-1617480022239-2509222c679f",
      tips: [
        "The skirt should be pleated evenly around your body.",
        "Make sure the length reaches your ankles but doesn't touch the ground.",
        "For a Tang dynasty look, position the waistband higher, just below the bust."
      ]
    },
    {
      title: "Put on the Upper Garment (Ru)",
      description: "The ru (upper garment) goes over your undergarment. The right side should overlap the left (except in burial clothes, where the left overlaps the right), creating the characteristic y-shaped neckline.",
      image: "https://images.unsplash.com/photo-1622400583791-061dfe48ebd9",
      tips: [
        "Make sure the collar forms a clean Y-shape at the front.",
        "The length of the upper garment should reach mid-thigh or lower.",
        "Adjust the sleeves to ensure they hang properly."
      ]
    },
    {
      title: "Secure with a Belt or Sash",
      description: "Wrap a decorative belt or sash around your waist to secure the upper garment. This not only keeps everything in place but also adds an aesthetic touch to your hanfu.",
      image: "https://images.unsplash.com/photo-1585129819171-308acb36547c",
      tips: [
        "The belt should be tied at the front or slightly to the side.",
        "Don't tie it too tight - there should be some natural draping of the fabric.",
        "For women's hanfu, the belt often sits high on the waistline."
      ]
    },
    {
      title: "Add the Outer Robe (Optional)",
      description: "For formal occasions or cooler weather, an outer robe (pifeng or banbi) can be added over the basic ensemble. These often feature wider sleeves and more elaborate decorations.",
      image: "https://images.unsplash.com/photo-1512403179399-8c8e023a3d18",
      tips: [
        "The outer robe should complement the colors of your inner garments.",
        "Ensure the inner layers are visible at the collar and sleeves for a layered look.",
        "For summer, choose lighter fabrics; for winter, lined or padded robes are traditional."
      ]
    },
    {
      title: "Complete with Accessories",
      description: "Traditional hanfu is complemented by appropriate accessories such as hairpins, headwear, embroidered pouches, and jewelry. These finishing touches add authenticity and personal style to your outfit.",
      image: "https://images.unsplash.com/photo-1614786269829-d24616faf56d",
      tips: [
        "Hair ornaments should be secured well so they don't fall out during movement.",
        "Consider the dynasty and social status you're representing when choosing accessories.",
        "Less is often more - select a few quality pieces rather than overcrowding your outfit."
      ]
    }
  ],
  aoqun: [],
  panling: []
};

const faqs = [
  {
    question: "How do I determine the right size of hanfu for me?",
    answer: "Traditional hanfu typically comes in standard sizes that can be adjusted with belts and ties. When purchasing, focus on the shoulder width and sleeve length. The upper garment should allow comfortable arm movement, while the skirt length should reach your ankles. Many hanfu sellers provide size charts with measurements in centimeters. When in doubt, it's usually better to choose a slightly larger size as the garments are meant to be draped rather than fitted."
  },
  {
    question: "Can I wash my hanfu at home, or does it require special care?",
    answer: "The care required depends on the fabric and embellishments of your hanfu. Silk garments should be hand-washed with mild soap in cold water or dry cleaned. Cotton hanfu can often be machine-washed on a gentle cycle in a mesh laundry bag. Always check for specific care instructions from the manufacturer. Regardless of material, it's best to air dry hanfu by laying it flat or hanging to prevent shrinkage and maintain the garment's shape."
  },
  {
    question: "Is it acceptable to modify traditional hanfu designs for comfort or personal style?",
    answer: "While traditional hanfu has specific historical designs, many modern wearers make practical modifications for comfort and contemporary contexts. Common acceptable adaptations include adding hidden closures (snaps or hooks) for easier dressing, adjusting sleeve lengths, or incorporating modern fabrics. However, if your goal is historical accuracy, it's best to adhere to traditional construction methods and designs. The modern hanfu revival embraces both authentic reconstructions and adapted styles."
  },
  {
    question: "What's the difference between hanfu and other Asian traditional garments like kimono or hanbok?",
    answer: "While hanfu, kimono (Japanese), and hanbok (Korean) may share some historical connections, they have distinct characteristics. Hanfu typically features a cross-collar with right-over-left lapel, wide sleeves, and a flowing silhouette with emphasis on horizontal lines. Kimono has a straight-cut design with square sleeves and is secured with an obi belt. Hanbok features a high-waisted skirt (chima) and a short jacket (jeogori) with distinctive tie closures. Each garment reflects its culture's aesthetic sensibilities and historical development."
  },
  {
    question: "What type of footwear complements hanfu?",
    answer: "Traditional hanfu is typically paired with embroidered cloth shoes (xiuhua xie) or boots for men in certain contexts. These shoes often have a distinctive upturned toe and may feature decorative embroidery. For women, delicate silk shoes with cloud-shaped toes were common. In modern practice, simple black or embroidered cloth shoes are most accessible. Avoid modern footwear styles like sneakers or high heels if aiming for a traditional look. Some practitioners also opt for historical-inspired boots or sandals depending on the specific dynasty being represented."
  }
];

const videos = [
  {
    title: "Complete Ruqun Tutorial",
    thumbnail: "https://images.unsplash.com/photo-1628529861456-df351c7dfe38",
    duration: "18:24"
  },
  {
    title: "Hair Styling for Traditional Hanfu",
    thumbnail: "https://images.unsplash.com/photo-1614786269829-d24616faf56d",
    duration: "12:37"
  },
  {
    title: "Ming Dynasty Court Dress Tutorial",
    thumbnail: "https://images.unsplash.com/photo-1578632292113-46d3bf83046a",
    duration: "22:15"
  }
];

export default GuidePage;
