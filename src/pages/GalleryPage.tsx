
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, X, ArrowLeft, ArrowRight, Info } from "lucide-react";

interface GalleryItem {
  id: number;
  image: string;
  title: string;
  dynasty: string;
  period: string;
  category: string;
  description: string;
  tags: string[];
}

const GalleryPage = () => {
  const [items, setItems] = useState<GalleryItem[]>(galleryItems);
  const [filteredItems, setFilteredItems] = useState<GalleryItem[]>(galleryItems);
  const [searchTerm, setSearchTerm] = useState("");
  const [dynastyFilter, setDynastyFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Применяем фильтры
  useEffect(() => {
    let result = [...items];
    
    // Поиск по запросу
    if (searchTerm) {
      result = result.filter(item => 
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    
    // Фильтр по династии
    if (dynastyFilter !== "all") {
      result = result.filter(item => item.dynasty === dynastyFilter);
    }
    
    // Фильтр по категории
    if (categoryFilter !== "all") {
      result = result.filter(item => item.category === categoryFilter);
    }
    
    setFilteredItems(result);
  }, [searchTerm, dynastyFilter, categoryFilter, items]);

  // Функция для навигации по элементам в модальном окне
  const navigateItem = (direction: 'next' | 'prev') => {
    if (!selectedItem) return;
    
    const currentItemIndex = filteredItems.findIndex(item => item.id === selectedItem.id);
    
    if (direction === 'next' && currentItemIndex < filteredItems.length - 1) {
      setSelectedItem(filteredItems[currentItemIndex + 1]);
      setCurrentIndex(currentItemIndex + 1);
    } else if (direction === 'prev' && currentItemIndex > 0) {
      setSelectedItem(filteredItems[currentItemIndex - 1]);
      setCurrentIndex(currentItemIndex - 1);
    }
  };

  const resetFilters = () => {
    setSearchTerm("");
    setDynastyFilter("all");
    setCategoryFilter("all");
  };

  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      
      {/* Hero секция */}
      <div className="relative h-[50vh] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1622400583791-061dfe48ebd9')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-center text-white">
          <span className="text-gold font-medium mb-2">Visual Archive</span>
          <h1 className="text-4xl md:text-6xl font-serif font-medium mb-4">
            Gallery Collection
          </h1>
          <p className="text-xl font-light max-w-xl mb-8">
            Explore our curated collection of traditional Chinese clothing through historical periods and styles.
          </p>
        </div>
      </div>
      
      {/* Секция фильтров */}
      <section className="py-8 px-6 bg-light">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="relative w-full md:w-1/3">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input 
                type="text" 
                placeholder="Search by title, description, or tags..." 
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {searchTerm && (
                <button 
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  onClick={() => setSearchTerm("")}
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
            
            <div className="w-full md:w-1/4">
              <Select value={dynastyFilter} onValueChange={setDynastyFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Filter by Dynasty" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Dynasties</SelectItem>
                  <SelectItem value="Han">Han Dynasty</SelectItem>
                  <SelectItem value="Tang">Tang Dynasty</SelectItem>
                  <SelectItem value="Song">Song Dynasty</SelectItem>
                  <SelectItem value="Ming">Ming Dynasty</SelectItem>
                  <SelectItem value="Qing">Qing Dynasty</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="w-full md:w-1/4">
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Filter by Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="formal">Formal Wear</SelectItem>
                  <SelectItem value="everyday">Everyday Clothing</SelectItem>
                  <SelectItem value="ceremonial">Ceremonial Garments</SelectItem>
                  <SelectItem value="accessories">Accessories</SelectItem>
                  <SelectItem value="military">Military Attire</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <Button 
              variant="outline" 
              className="border-gold text-gold hover:bg-gold/5 rounded-none w-full md:w-auto"
              onClick={resetFilters}
            >
              Reset Filters
            </Button>
          </div>
        </div>
      </section>
      
      {/* Галерея */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Статистика результатов */}
          <div className="mb-8 flex justify-between items-center">
            <p className="text-dark/70">
              Showing {filteredItems.length} of {items.length} items
              {dynastyFilter !== "all" && ` • Dynasty: ${dynastyFilter}`}
              {categoryFilter !== "all" && ` • Category: ${categoryFilter}`}
              {searchTerm && ` • Search: "${searchTerm}"`}
            </p>
            
            <Tabs defaultValue="grid" className="w-auto">
              <TabsList className="grid grid-cols-2 w-[120px]">
                <TabsTrigger value="grid">Grid</TabsTrigger>
                <TabsTrigger value="list">List</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
          
          {filteredItems.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl font-medium mb-4">No items match your search</p>
              <p className="text-dark/70 mb-8">Try adjusting your filters or search terms</p>
              <Button 
                variant="outline" 
                className="border-gold text-gold hover:bg-gold/5 rounded-none"
                onClick={resetFilters}
              >
                Reset All Filters
              </Button>
            </div>
          ) : (
            <>
              <TabsContent value="grid" className="mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {filteredItems.map((item, index) => (
                    <Dialog key={item.id}>
                      <DialogTrigger asChild>
                        <div 
                          className="cursor-pointer group"
                          onClick={() => {
                            setSelectedItem(item);
                            setCurrentIndex(index);
                          }}
                        >
                          <div className="aspect-square overflow-hidden mb-3">
                            <img 
                              src={item.image} 
                              alt={item.title} 
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                          </div>
                          <h3 className="text-lg font-medium">{item.title}</h3>
                          <p className="text-gold text-sm">{item.dynasty} Dynasty, {item.period}</p>
                        </div>
                      </DialogTrigger>
                      
                      {selectedItem && selectedItem.id === item.id && (
                        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-white">
                          <div className="flex flex-col md:flex-row h-[80vh]">
                            <div className="md:w-2/3 relative bg-black flex items-center justify-center h-full">
                              <img 
                                src={selectedItem.image} 
                                alt={selectedItem.title} 
                                className="max-h-full max-w-full object-contain"
                              />
                              
                              {/* Навигационные кнопки */}
                              {currentIndex > 0 && (
                                <button 
                                  className="absolute left-4 p-2 bg-black/50 rounded-full text-white hover:bg-black/70"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    navigateItem('prev');
                                  }}
                                >
                                  <ArrowLeft className="h-6 w-6" />
                                </button>
                              )}
                              
                              {currentIndex < filteredItems.length - 1 && (
                                <button 
                                  className="absolute right-4 p-2 bg-black/50 rounded-full text-white hover:bg-black/70"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    navigateItem('next');
                                  }}
                                >
                                  <ArrowRight className="h-6 w-6" />
                                </button>
                              )}
                            </div>
                            
                            <div className="md:w-1/3 p-6 overflow-y-auto">
                              <h2 className="text-2xl font-serif font-medium mb-2">{selectedItem.title}</h2>
                              <p className="text-gold mb-4">{selectedItem.dynasty} Dynasty, {selectedItem.period}</p>
                              
                              <div className="mb-6">
                                <h3 className="text-sm font-medium text-gray-500 mb-1">Category</h3>
                                <p>{selectedItem.category}</p>
                              </div>
                              
                              <div className="mb-6">
                                <h3 className="text-sm font-medium text-gray-500 mb-1">Description</h3>
                                <p className="text-dark/80">{selectedItem.description}</p>
                              </div>
                              
                              <div className="mb-6">
                                <h3 className="text-sm font-medium text-gray-500 mb-1">Tags</h3>
                                <div className="flex flex-wrap gap-2 mt-1">
                                  {selectedItem.tags.map((tag, i) => (
                                    <span key={i} className="text-xs bg-light px-2 py-1 rounded-full">
                                      {tag}
                                    </span>
                                  ))}
                                </div>
                              </div>
                              
                              <div className="mt-auto pt-4 border-t border-gray-200">
                                <Button className="w-full bg-gold hover:bg-gold/90 text-dark rounded-none">
                                  Learn More About This Style
                                </Button>
                              </div>
                            </div>
                          </div>
                        </DialogContent>
                      )}
                    </Dialog>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="list" className="mt-0">
                <div className="space-y-4">
                  {filteredItems.map((item, index) => (
                    <Dialog key={item.id}>
                      <DialogTrigger asChild>
                        <div 
                          className="flex gap-6 items-center border-b border-gray-200 pb-4 cursor-pointer hover:bg-light p-4 transition-colors"
                          onClick={() => {
                            setSelectedItem(item);
                            setCurrentIndex(index);
                          }}
                        >
                          <div className="w-24 h-24 flex-shrink-0 overflow-hidden">
                            <img 
                              src={item.image} 
                              alt={item.title} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <h3 className="text-lg font-medium">{item.title}</h3>
                            <p className="text-gold text-sm">{item.dynasty} Dynasty, {item.period}</p>
                            <p className="text-dark/70 text-sm mt-1 line-clamp-2">{item.description}</p>
                          </div>
                          <div className="ml-auto">
                            <Info className="h-5 w-5 text-gold" />
                          </div>
                        </div>
                      </DialogTrigger>
                      
                      {/* Диалоговое окно такое же, как и для Grid view */}
                      {selectedItem && selectedItem.id === item.id && (
                        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-white">
                          <div className="flex flex-col md:flex-row h-[80vh]">
                            <div className="md:w-2/3 relative bg-black flex items-center justify-center h-full">
                              <img 
                                src={selectedItem.image} 
                                alt={selectedItem.title} 
                                className="max-h-full max-w-full object-contain"
                              />
                              
                              {/* Навигационные кнопки */}
                              {currentIndex > 0 && (
                                <button 
                                  className="absolute left-4 p-2 bg-black/50 rounded-full text-white hover:bg-black/70"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    navigateItem('prev');
                                  }}
                                >
                                  <ArrowLeft className="h-6 w-6" />
                                </button>
                              )}
                              
                              {currentIndex < filteredItems.length - 1 && (
                                <button 
                                  className="absolute right-4 p-2 bg-black/50 rounded-full text-white hover:bg-black/70"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    navigateItem('next');
                                  }}
                                >
                                  <ArrowRight className="h-6 w-6" />
                                </button>
                              )}
                            </div>
                            
                            <div className="md:w-1/3 p-6 overflow-y-auto">
                              <h2 className="text-2xl font-serif font-medium mb-2">{selectedItem.title}</h2>
                              <p className="text-gold mb-4">{selectedItem.dynasty} Dynasty, {selectedItem.period}</p>
                              
                              <div className="mb-6">
                                <h3 className="text-sm font-medium text-gray-500 mb-1">Category</h3>
                                <p>{selectedItem.category}</p>
                              </div>
                              
                              <div className="mb-6">
                                <h3 className="text-sm font-medium text-gray-500 mb-1">Description</h3>
                                <p className="text-dark/80">{selectedItem.description}</p>
                              </div>
                              
                              <div className="mb-6">
                                <h3 className="text-sm font-medium text-gray-500 mb-1">Tags</h3>
                                <div className="flex flex-wrap gap-2 mt-1">
                                  {selectedItem.tags.map((tag, i) => (
                                    <span key={i} className="text-xs bg-light px-2 py-1 rounded-full">
                                      {tag}
                                    </span>
                                  ))}
                                </div>
                              </div>
                              
                              <div className="mt-auto pt-4 border-t border-gray-200">
                                <Button className="w-full bg-gold hover:bg-gold/90 text-dark rounded-none">
                                  Learn More About This Style
                                </Button>
                              </div>
                            </div>
                          </div>
                        </DialogContent>
                      )}
                    </Dialog>
                  ))}
                </div>
              </TabsContent>
            </>
          )}
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

// Данные для галереи
const galleryItems: GalleryItem[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1622400583791-061dfe48ebd9",
    title: "Han Dynasty Cross-Collar Robe",
    dynasty: "Han",
    period: "206 BCE - 220 CE",
    category: "formal",
    description: "The cross-collar robe (shenyi) was a hallmark of Han dynasty clothing. This recreation showcases the characteristic Y-shaped neckline with the right side overlapping the left, symbolizing proper social order in Confucian thought. Made of natural silk with simple, flowing lines.",
    tags: ["shenyi", "cross-collar", "silk", "formal wear"]
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1589782051446-a24dedf5c234",
    title: "Tang Dynasty Court Lady's Ensemble",
    dynasty: "Tang",
    period: "618 - 907 CE",
    category: "formal",
    description: "This opulent recreation of a high-ranking Tang court lady's dress exemplifies the dynasty's cosmopolitan aesthetic. Note the high waistline positioned just below the bust, creating the iconic Tang silhouette. The ensemble features vibrant colors and intricate phoenix motifs, reflecting Tang China's prosperity and international influences.",
    tags: ["ruqun", "high-waisted", "court dress", "phoenix pattern"]
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1614786269829-d24616faf56d",
    title: "Song Dynasty Scholar's Robe",
    dynasty: "Song",
    period: "960 - 1279 CE",
    category: "everyday",
    description: "A typical scholar-official's daily wear during the Song Dynasty. This period marked a turn toward more restrained and practical clothing compared to the Tang. The robe features a subdued color palette and wider sleeves, reflecting Neo-Confucian values of the time that emphasized simplicity and scholarly pursuit.",
    tags: ["scholar", "literati", "everyday wear", "neo-confucian"]
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1511335320903-a9b3a4b6a492",
    title: "Ming Dynasty Official's Rank Badge",
    dynasty: "Ming",
    period: "1368 - 1644 CE",
    category: "accessories",
    description: "A detailed reproduction of a Ming dynasty 'mandarin square' (buzi), the embroidered badge that indicated an official's rank in the imperial bureaucracy. This particular design features a crane, designating a civil official of the first rank. These badges were affixed to the front and back of government officials' outer robes.",
    tags: ["mandarin square", "buzi", "rank badge", "crane", "civil official"]
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1598531370430-4b2bb0230cf5",
    title: "Qing Dynasty Dragon Robe",
    dynasty: "Qing",
    period: "1644 - 1912 CE",
    category: "ceremonial",
    description: "A magnificent reproduction of a Qing imperial dragon robe (longpao), reserved for the emperor and certain princes. This garment features five-clawed dragons—a symbol strictly reserved for the emperor—amid auspicious clouds and other symbols. The design follows strict protocols with specific dragon placements on the front, back, and shoulders.",
    tags: ["dragon robe", "longpao", "imperial", "five-clawed dragon"]
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1566277913947-29072079fc8c",
    title: "Han Dynasty Ceremonial Headdress",
    dynasty: "Han",
    period: "206 BCE - 220 CE",
    category: "accessories",
    description: "A ceremonial headdress worn by noblewomen during the Han dynasty. These elaborate headdresses featured intricate designs with jade and gold ornaments, representing status and wealth. This particular style shows the influence of earlier Warring States period aesthetics with its wing-like side ornaments.",
    tags: ["headdress", "noblewomen", "jade", "gold", "ornaments"]
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1555181937-efe4e074a301",
    title: "Tang Dynasty Hufu Riding Outfit",
    dynasty: "Tang",
    period: "618 - 907 CE",
    category: "everyday",
    description: "The hufu (barbarian clothing) was a foreign-inspired style that became extremely fashionable during the Tang dynasty. This recreation shows a woman's riding outfit with a short jacket and split-leg trousers, adopted from nomadic peoples of the northern steppes. The style reflects Tang China's cosmopolitan character and women's relative freedom.",
    tags: ["hufu", "riding outfit", "nomadic influence", "women's fashion"]
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
    title: "Song Dynasty Wedding Garment",
    dynasty: "Song",
    period: "960 - 1279 CE",
    category: "ceremonial",
    description: "A bridal ensemble from the Song dynasty featuring the characteristic fengguan (phoenix crown) headdress and elaborately embroidered red robe. Red was the traditional color for wedding attire, symbolizing joy and good fortune. Note the auspicious patterns including peonies, representing wealth and honor, and butterflies, representing love.",
    tags: ["wedding", "bridal", "fengguan", "phoenix crown", "red"]
  },
  {
    id: 9,
    image: "https://images.unsplash.com/photo-1517722014278-c256a91a6fba",
    title: "Ming Dynasty Military Commander's Armor",
    dynasty: "Ming",
    period: "1368 - 1644 CE",
    category: "military",
    description: "A replica of Ming dynasty military armor worn by high-ranking commanders. The armor consists of overlapping plates made of leather and metal, offering both protection and mobility. The distinctive design features prominent shoulder guards and chest plates with tiger motifs, symbolizing strength and courage in battle.",
    tags: ["armor", "military", "commander", "tiger motif", "leather plates"]
  },
  {
    id: 10,
    image: "https://images.unsplash.com/photo-1519345324562-4fc4e5009321",
    title: "Qing Dynasty Empress's Court Attire",
    dynasty: "Qing",
    period: "1644 - 1912 CE",
    category: "formal",
    description: "An exquisite reproduction of a Qing dynasty empress's formal court attire. The costume features the characteristic Manchu style with a long, straight-cut robe and platform shoes visible beneath. The robe is adorned with intricate embroidery featuring phoenixes (symbolizing the empress) and floral motifs in gold thread on vibrant yellow silk—a color reserved for the imperial family.",
    tags: ["empress", "court attire", "Manchu style", "phoenix embroidery", "imperial yellow"]
  },
  {
    id: 11,
    image: "https://images.unsplash.com/photo-1591779051696-1c3fa1469a79",
    title: "Han Dynasty Silk Shoes",
    dynasty: "Han",
    period: "206 BCE - 220 CE",
    category: "accessories",
    description: "Replicated Han dynasty silk shoes, based on archaeological finds. These shoes were typically made with embroidered silk uppers and leather or textile soles, often featuring turned-up toes. Different designs were worn based on status, with nobles wearing more elaborate patterns. These shoes reflect both practicality and aesthetic beauty characteristic of Han material culture.",
    tags: ["shoes", "footwear", "silk", "embroidery", "archaeological replica"]
  },
  {
    id: 12,
    image: "https://images.unsplash.com/photo-1544441893-675973e31985",
    title: "Tang Dynasty Dancer's Costume",
    dynasty: "Tang",
    period: "618 - 907 CE",
    category: "ceremonial",
    description: "A vibrant recreation of a costume worn by Tang court dancers performing in royal banquets. The costume features billowing 'water sleeves' (shuixiu) that could be manipulated to create dramatic visual effects during performances. The bright colors and Central Asian-influenced patterns reflect the cosmopolitan nature of Tang dynasty court entertainment.",
    tags: ["dancer", "performance", "water sleeves", "shuixiu", "court entertainment"]
  }
];

export default GalleryPage;
