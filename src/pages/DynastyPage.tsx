
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, ArrowRight } from "lucide-react";
import ClothingCard from "@/components/ClothingCard";

interface DynastyData {
  id: number;
  name: string;
  period: string;
  description: string;
  image: string;
  fullDescription: string;
  characteristics: Array<{
    id: number;
    title: string;
    description: string;
  }>;
  keyElements: Array<{
    id: number;
    name: string;
    description: string;
    image: string;
  }>;
  gallery: Array<{
    id: number;
    image: string;
    caption: string;
  }>;
}

const DynastyPage = () => {
  const { id } = useParams();
  const [dynasty, setDynasty] = useState<DynastyData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // В реальном проекте здесь был бы запрос к API
    // Симулируем получение данных
    setTimeout(() => {
      const foundDynasty = dynastiesData.find(d => d.id.toString() === id);
      setDynasty(foundDynasty || null);
      setLoading(false);
    }, 300);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-gold border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!dynasty) {
    return (
      <div className="min-h-screen bg-cream flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center flex-col p-6">
          <h1 className="text-3xl font-serif mb-4">Династия не найдена</h1>
          <p className="mb-8 text-gray-600">К сожалению, информация о запрошенной династии отсутствует.</p>
          <Link to="/">
            <Button className="bg-gold hover:bg-gold/90 text-dark rounded-none">
              Вернуться на главную
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      
      {/* Hero секция */}
      <div className="relative h-[70vh] overflow-hidden">
        <div className={`absolute inset-0 bg-[url('${dynasty.image}')] bg-cover bg-center`}>
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-end pb-20 text-white">
          <span className="text-gold font-medium mb-2">Dynasties & Styles</span>
          <h1 className="text-5xl md:text-7xl font-serif font-medium mb-4">
            {dynasty.name}
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-xl mb-2">
            {dynasty.period}
          </p>
        </div>
      </div>
      
      {/* Основное содержание */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row gap-12 mb-16">
          <div className="md:w-2/3">
            <h2 className="text-3xl font-serif mb-6">Historical Context</h2>
            <p className="text-dark/80 mb-6 leading-relaxed">
              {dynasty.fullDescription}
            </p>
            
            <h3 className="text-2xl font-serif mb-4 mt-10">Clothing Characteristics</h3>
            <div className="space-y-6 mb-8">
              {dynasty.characteristics.map((char) => (
                <div key={char.id}>
                  <h4 className="text-xl font-medium mb-2">{char.title}</h4>
                  <p className="text-dark/80">{char.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="md:w-1/3 bg-light p-6">
            <h3 className="text-xl font-serif mb-4">Quick Facts</h3>
            <ul className="space-y-4">
              <li>
                <span className="font-medium">Period:</span> {dynasty.period}
              </li>
              <li>
                <span className="font-medium">Capital:</span> {dynasty.id === 1 ? "Chang'an (modern Xi'an)" : 
                                                             dynasty.id === 2 ? "Chang'an (modern Xi'an)" : 
                                                             "Nanjing, later Beijing"}
              </li>
              <li>
                <span className="font-medium">Notable emperors:</span> {dynasty.id === 1 ? "Emperor Wu, Emperor Guangwu" : 
                                                                      dynasty.id === 2 ? "Emperor Taizong, Empress Wu Zetian" : 
                                                                      "Emperor Hongwu, Emperor Yongle"}
              </li>
              <li>
                <span className="font-medium">Cultural highlights:</span> {dynasty.id === 1 ? "Silk Road expansion, Confucianism adoption" : 
                                                                         dynasty.id === 2 ? "Poetry, arts, religious tolerance" : 
                                                                         "Porcelain production, literature, naval exploration"}
              </li>
            </ul>
            
            <div className="mt-8">
              <Button variant="outline" className="w-full border-gold text-gold hover:bg-gold/5 rounded-none">
                Download Dynasty Overview
              </Button>
            </div>
          </div>
        </div>
        
        {/* Ключевые элементы одежды */}
        <div className="mb-16">
          <h2 className="text-3xl font-serif mb-10 text-center">Key Clothing Elements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {dynasty.keyElements.map((element) => (
              <ClothingCard 
                key={element.id}
                title={element.name}
                description={element.description}
                image={element.image}
              />
            ))}
          </div>
        </div>
        
        {/* Галерея */}
        <div className="mb-16">
          <h2 className="text-3xl font-serif mb-6 text-center">Visual Gallery</h2>
          <Tabs defaultValue="illustrations" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8 max-w-md mx-auto">
              <TabsTrigger value="illustrations">Illustrations</TabsTrigger>
              <TabsTrigger value="photos">Modern Recreations</TabsTrigger>
            </TabsList>
            
            <TabsContent value="illustrations">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {dynasty.gallery.slice(0, 4).map((item) => (
                  <div key={item.id} className="relative overflow-hidden group h-64 cursor-pointer">
                    <img 
                      src={item.image} 
                      alt={item.caption} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                      <p className="text-white text-center">{item.caption}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="photos">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {dynasty.gallery.slice(4, 8).map((item) => (
                  <div key={item.id} className="relative overflow-hidden group h-64 cursor-pointer">
                    <img 
                      src={item.image} 
                      alt={item.caption} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                      <p className="text-white text-center">{item.caption}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
        
        {/* Навигация между династиями */}
        <div className="border-t border-gold/20 pt-10">
          <div className="flex justify-between">
            <Link to={`/dynasty/${dynasty.id > 1 ? dynasty.id - 1 : dynastiesData.length}`}>
              <Button variant="outline" className="border-gold text-gold hover:bg-gold/5 rounded-none">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Previous Dynasty
              </Button>
            </Link>
            <Link to={`/dynasty/${dynasty.id < dynastiesData.length ? dynasty.id + 1 : 1}`}>
              <Button variant="outline" className="border-gold text-gold hover:bg-gold/5 rounded-none">
                Next Dynasty
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

// Данные для страниц династий
const dynastiesData: DynastyData[] = [
  {
    id: 1,
    name: "Han Dynasty",
    period: "206 BCE - 220 CE",
    description: "The Han dynasty established many of the foundational elements of traditional Chinese clothing, including the iconic cross-collar robe.",
    image: "https://images.unsplash.com/photo-1620503374956-c942862f0372",
    fullDescription: "The Han Dynasty was one of the most influential periods in Chinese history, marking the golden age of the Chinese civilization. Following the brief but impactful Qin Dynasty, Han rulers adopted a less legalistic approach, embracing Confucian ideals that would shape Chinese society for millennia. During this 400-year period, China expanded its territories significantly, developed the Silk Road trade routes, and saw advancements in arts, science, and technology.\n\nHan dynasty clothing established the foundational elements of traditional Chinese dress that would influence styles for centuries to come. The period saw the formalization of distinctive clothing systems based on social status, with specific guidelines for colors, fabrics, and designs that could be worn by different classes.",
    characteristics: [
      {
        id: 1,
        title: "Cross-collar Robes (Shenyi)",
        description: "The iconic 'shenyi' or 'deep robe' became standardized during the Han dynasty. This one-piece garment wrapped the body with a distinctive y-shaped neckline, with the right side overlapping the left. The cross-collar design symbolized proper social order and moral correctness in Confucian thought."
      },
      {
        id: 2,
        title: "Wide Sleeves and Flowing Silhouettes",
        description: "Han clothing featured generous proportions with wide sleeves and a loose, flowing appearance. The voluminous design not only provided comfort in various weather conditions but also conveyed a sense of dignity and composure, important virtues in Han society."
      },
      {
        id: 3,
        title: "Cloth Belts and Sashes",
        description: "Garments were typically secured with fabric belts or sashes at the waist, often featuring decorative ends that hung down the front. These accessories became important fashion elements, with variations in length, color, and ornamentation signifying different social standings."
      }
    ],
    keyElements: [
      {
        id: 1,
        name: "Ruqun (Top and Skirt)",
        description: "A two-piece ensemble particularly popular among women, consisting of a yi (top garment) and a chang (skirt). The top typically extended below the waist and was paired with a high-waisted skirt.",
        image: "https://images.unsplash.com/photo-1621363366967-12452d0c5d18"
      },
      {
        id: 2,
        name: "Pao (Robe)",
        description: "A long, loose-fitting full-length robe commonly worn by men. It featured side slits for ease of movement and was fastened with a belt at the waist.",
        image: "https://images.unsplash.com/photo-1531925470851-1b5896b67dcd"
      },
      {
        id: 3,
        name: "Bixi (Formal Garments)",
        description: "Ceremonial attire worn by officials and nobles during important rituals and court functions, featuring elaborate embroidery and specific colors denoting rank.",
        image: "https://images.unsplash.com/photo-1566277913947-29072079fc8c"
      }
    ],
    gallery: [
      {
        id: 1,
        image: "https://images.unsplash.com/photo-1602528495711-414e9b13d096",
        caption: "Historical illustration of Han court dress"
      },
      {
        id: 2,
        image: "https://images.unsplash.com/photo-1579783928621-7a13d66a62d1",
        caption: "Detail of Han-era silk textile with cloud pattern"
      },
      {
        id: 3,
        image: "https://images.unsplash.com/photo-1587287089348-2931189aa3fd",
        caption: "Jade ornament typically worn with formal Han clothing"
      },
      {
        id: 4,
        image: "https://images.unsplash.com/photo-1557456170-0cf4f4d0d362",
        caption: "Han Dynasty silk embroidery technique sample"
      },
      {
        id: 5,
        image: "https://images.unsplash.com/photo-1612095432802-7034471ce945",
        caption: "Modern recreation of female Han Dynasty attire"
      },
      {
        id: 6,
        image: "https://images.unsplash.com/photo-1603912699214-92627f304eb6",
        caption: "Han-inspired ceremonial dress worn at cultural festival"
      },
      {
        id: 7,
        image: "https://images.unsplash.com/photo-1551122087-f992180f5134",
        caption: "Contemporary adaptation of a male Han scholar's outfit"
      },
      {
        id: 8,
        image: "https://images.unsplash.com/photo-1565831470627-89c9d15696a0",
        caption: "Authentic reproduction of Han military commander uniform"
      }
    ]
  },
  {
    id: 2,
    name: "Tang Dynasty",
    period: "618 - 907 CE",
    description: "Known as China's golden age, Tang dynasty clothing featured vibrant colors, open necklines, and influences from the Silk Road.",
    image: "https://images.unsplash.com/photo-1511889486728-4da0dfa8d818",
    fullDescription: "The Tang Dynasty is widely regarded as a high point in Chinese civilization, a golden age characterized by territorial expansion, economic prosperity, and remarkable cultural achievements. Under Tang rule, China became the most advanced civilization in the world, with a capital city, Chang'an, that was the largest and most cosmopolitan urban center of its time. The dynasty's openness to foreign influence through the Silk Road created an environment of unprecedented cultural exchange and innovation.\n\nTang dynasty fashion reflected this cosmopolitan character, representing perhaps the most diverse and globally influenced period in Chinese clothing history. Tang garments were known for their bold colors, luxurious materials, and innovative designs that incorporated elements from Central Asia, Persia, and beyond.",
    characteristics: [
      {
        id: 1,
        title: "High-Waisted Fashion and Open Necklines",
        description: "Tang women's clothing often featured high-waisted dresses and open, round necklines that were more revealing than previous or subsequent dynasties. This style was particularly popular during the early and middle Tang period, reflecting the dynasty's relatively liberal social attitudes."
      },
      {
        id: 2,
        title: "Bold Colors and Patterns",
        description: "Tang clothing embraced vibrant, saturated colors including bright reds, purples, and greens. Garments frequently featured bold patterns with large floral motifs, elaborate birds, and geometric designs, showcasing the technical mastery of Tang textile artists."
      },
      {
        id: 3,
        title: "Foreign-Influenced Elements",
        description: "The cosmopolitan nature of Tang China meant that clothing incorporated elements from the Silk Road cultures, including Persian-inspired patterns, Sogdian sleeve designs, and Turkish-style robes and boots. These foreign elements were adapted and transformed into distinctly Tang Chinese styles."
      }
    ],
    keyElements: [
      {
        id: 1,
        name: "Banbi (Half-Arm Jacket)",
        description: "A short-sleeved jacket worn over longer robes, often made in contrasting colors and luxurious materials. This layered look became iconic of Tang fashion sensibilities.",
        image: "https://images.unsplash.com/photo-1555181937-efe4e074a301"
      },
      {
        id: 2,
        name: "Hufu (Barbarian Clothing)",
        description: "Foreign-inspired garments that became fashionable among the Tang elite, particularly riding outfits with split leggings that were practical for horseback riding, a pastime adopted from northern nomadic peoples.",
        image: "https://images.unsplash.com/photo-1517722014278-c256a91a6fba"
      },
      {
        id: 3,
        name: "Ruqun with High Waist",
        description: "The Tang innovation on the traditional top and skirt ensemble featured an extremely high waistline positioned just below the bust, creating the iconic Tang silhouette depicted in many figurines and paintings.",
        image: "https://images.unsplash.com/photo-1544441893-675973e31985"
      }
    ],
    gallery: [
      {
        id: 1,
        image: "https://images.unsplash.com/photo-1598531370430-4b2bb0230cf5",
        caption: "Tang court lady figurine showing the characteristic high-waisted style"
      },
      {
        id: 2,
        image: "https://images.unsplash.com/photo-1577655195486-5174896434de",
        caption: "Detail of Tang dynasty brocade with phoenix pattern"
      },
      {
        id: 3,
        image: "https://images.unsplash.com/photo-1519345224203-736c2dac9ccf",
        caption: "Wall painting showing Tang musicians in colorful garments"
      },
      {
        id: 4,
        image: "https://images.unsplash.com/photo-1567623191163-f81aad9dbe2e",
        caption: "Tang dynasty gold hairpin with floral design"
      },
      {
        id: 5,
        image: "https://images.unsplash.com/photo-1516175663209-ac2459a5652b",
        caption: "Modern recreation of a Tang princess's formal attire"
      },
      {
        id: 6,
        image: "https://images.unsplash.com/photo-1543292786-0b4768bba51c",
        caption: "Tang-inspired ensemble worn during cultural performance"
      },
      {
        id: 7,
        image: "https://images.unsplash.com/photo-1552645265-2c5a43f0dcf1",
        caption: "Contemporary take on Tang dynasty male official's uniform"
      },
      {
        id: 8,
        image: "https://images.unsplash.com/photo-1518309570415-9126d56a1abe",
        caption: "Authentic reproduction of Tang female riding outfit (hufu)"
      }
    ]
  },
  {
    id: 3,
    name: "Ming Dynasty",
    period: "1368 - 1644 CE",
    description: "Ming clothing is characterized by its formality and strict adherence to social hierarchy, with distinct styles for different social classes.",
    image: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2",
    fullDescription: "The Ming Dynasty marked a return to native Chinese rule after the Mongol-led Yuan Dynasty. Ming rulers sought to restore Chinese cultural values and traditions, implementing policies that reinforced Confucian social hierarchies and orthodox values. The early Ming was a period of impressive accomplishments—naval expeditions reached as far as Africa, the Forbidden City was constructed, and the economy flourished with expanded international trade.\n\nMing dynasty clothing reflected this conservative restoration of traditional Chinese values, with a strong emphasis on propriety, formality, and clearly visible social distinctions. Compared to the relatively liberal fashions of the Tang, Ming garments were generally more modest and structured, with strict regulations governing who could wear certain colors, materials, and designs.",
    characteristics: [
      {
        id: 1,
        title: "Formality and Structural Designs",
        description: "Ming garments were characterized by their structured appearance and formal aesthetic. Clothing designs emphasized straight lines and geometric precision, with fewer of the flowing, organic silhouettes seen in earlier dynasties."
      },
      {
        id: 2,
        title: "Detailed Rank Badges (Mandarin Squares)",
        description: "Perhaps the most distinctive feature of Ming official dress was the introduction of embroidered 'mandarin squares' (buzi) – badge-like ornaments attached to the front and back of government officials' outer garments. These squares featured specific animals denoting the wearer's exact rank within the civil or military hierarchy."
      },
      {
        id: 3,
        title: "Emphasis on Modesty",
        description: "Ming fashion emphasized modesty and coverage, particularly for women. Necklines were typically high and close-fitting, sleeves were less voluminous than in previous eras, and women's garments concealed the body shape more thoroughly than in the Tang or Song dynasties."
      }
    ],
    keyElements: [
      {
        id: 1,
        name: "Official's Robes (Mangfu)",
        description: "Formal robes worn by government officials, featuring the mandarin squares at chest and back, with specific colors and designs denoting rank. These robes had distinct round collars and horse-hoof shaped cuffs.",
        image: "https://images.unsplash.com/photo-1558637845-c8b7ead71a3e"
      },
      {
        id: 2,
        name: "Ming-style Hanfu",
        description: "The civilian dress that evolved from traditional hanfu with cross-collars, but with more structured designs and often in darker, more subdued colors than earlier dynasties had favored.",
        image: "https://images.unsplash.com/photo-1577655195572-3e4ae9fa1245"
      },
      {
        id: 3,
        name: "Dragon Robes",
        description: "Imperial garments featuring complete dragon motifs with five claws (restricted to the emperor and certain princes), positioned in specific arrangements on the robe. These were covered with auspicious symbols and executed in the finest silk embroidery.",
        image: "https://images.unsplash.com/photo-1558888401-3cc1de77652d"
      }
    ],
    gallery: [
      {
        id: 1,
        image: "https://images.unsplash.com/photo-1552645265-2c5a43f0dcf1",
        caption: "Illustration of Ming official court dress with rank badge"
      },
      {
        id: 2,
        image: "https://images.unsplash.com/photo-1579696553614-77659ac30be6",
        caption: "Detail of Ming dynasty embroidery showing imperial dragon"
      },
      {
        id: 3,
        image: "https://images.unsplash.com/photo-1532293129-45f56388f767",
        caption: "Ming porcelain figurine depicting scholar in traditional dress"
      },
      {
        id: 4,
        image: "https://images.unsplash.com/photo-1548888363-8637dae3a110",
        caption: "Ming dynasty hat with distinct wing-like extensions for officials"
      },
      {
        id: 5,
        image: "https://images.unsplash.com/photo-1602528495751-0c576697f558",
        caption: "Modern recreation of Ming empress formal attire"
      },
      {
        id: 6,
        image: "https://images.unsplash.com/photo-1593016605825-8c19758161d8",
        caption: "Ming-inspired wedding garments with traditional embroidery"
      },
      {
        id: 7,
        image: "https://images.unsplash.com/photo-1576207605821-2308c3fbe478",
        caption: "Contemporary adaptation of Ming scholar's robe"
      },
      {
        id: 8,
        image: "https://images.unsplash.com/photo-1602528493660-d316a3c93d3e",
        caption: "Authentic reproduction of Ming official's court ensemble"
      }
    ]
  }
];

export default DynastyPage;
