
import { useState, useEffect, useRef } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { X, Search, ArrowRight, History } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface SearchResult {
  id: string;
  title: string;
  description: string;
  url: string;
  category: string;
}

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchModal = ({ isOpen, onClose }: SearchModalProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  // Фокус на поле ввода при открытии
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  // Загрузка последних поисковых запросов
  useEffect(() => {
    const savedSearches = localStorage.getItem("recentSearches");
    if (savedSearches) {
      setRecentSearches(JSON.parse(savedSearches));
    }
  }, []);

  // Обработка изменения поискового запроса
  useEffect(() => {
    if (!searchQuery.trim()) {
      setResults([]);
      return;
    }

    setIsLoading(true);
    
    // Имитация поиска с задержкой
    const timer = setTimeout(() => {
      // В реальном приложении здесь был бы API запрос
      const filteredResults = mockSearchResults.filter(
        result => 
          result.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          result.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
      
      setResults(filteredResults);
      setIsLoading(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Обработка нажатия клавиш
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose();
    }
  };

  // Сохранение поискового запроса в историю
  const saveToRecentSearches = (query: string) => {
    if (!query.trim()) return;
    
    const updatedSearches = [
      query,
      ...recentSearches.filter(item => item !== query)
    ].slice(0, 5);
    
    setRecentSearches(updatedSearches);
    localStorage.setItem("recentSearches", JSON.stringify(updatedSearches));
  };

  // Переход по результату поиска
  const handleResultClick = (url: string, query: string) => {
    saveToRecentSearches(query);
    navigate(url);
    onClose();
  };

  // Использование сохраненного поискового запроса
  const handleRecentSearchClick = (query: string) => {
    setSearchQuery(query);
  };

  // Очистка истории поиска
  const clearRecentSearches = (e: React.MouseEvent) => {
    e.stopPropagation();
    setRecentSearches([]);
    localStorage.removeItem("recentSearches");
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent 
        className="max-w-3xl p-0 gap-0 border-none bg-white"
        onKeyDown={handleKeyDown}
      >
        <div className="p-4 border-b">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              ref={inputRef}
              type="text"
              placeholder="Search for dynasties, clothing styles, symbols..."
              className="pl-10 pr-10 py-6 text-lg border-none shadow-none focus-visible:ring-0"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                onClick={() => setSearchQuery("")}
              >
                <X className="h-5 w-5" />
              </button>
            )}
          </div>
        </div>

        <div className="max-h-[60vh] overflow-y-auto">
          {/* Недавние поиски */}
          {!searchQuery && recentSearches.length > 0 && (
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium text-gray-500">Recent Searches</h3>
                <button 
                  className="text-xs text-gray-500 hover:text-gray-800"
                  onClick={clearRecentSearches}
                >
                  Clear all
                </button>
              </div>
              <ul>
                {recentSearches.map((query, index) => (
                  <li 
                    key={index}
                    className="flex items-center py-2 px-2 hover:bg-light cursor-pointer"
                    onClick={() => handleRecentSearchClick(query)}
                  >
                    <History className="h-4 w-4 text-gray-400 mr-3" />
                    <span>{query}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Индикатор загрузки */}
          {isLoading && (
            <div className="p-8 text-center">
              <div className="w-6 h-6 border-2 border-gold border-t-transparent rounded-full animate-spin mx-auto"></div>
              <p className="text-gray-500 mt-2">Searching...</p>
            </div>
          )}

          {/* Результаты поиска */}
          {!isLoading && searchQuery && results.length > 0 && (
            <div className="divide-y">
              {results.map((result) => (
                <div 
                  key={result.id}
                  className="p-4 hover:bg-light cursor-pointer"
                  onClick={() => handleResultClick(result.url, searchQuery)}
                >
                  <div className="flex items-baseline justify-between mb-1">
                    <h3 className="font-medium">{result.title}</h3>
                    <span className="text-xs text-gold">{result.category}</span>
                  </div>
                  <p className="text-dark/70 text-sm mb-2">{result.description}</p>
                  <div className="text-gold text-sm flex items-center">
                    View details <ArrowRight className="ml-1 h-3 w-3" />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Нет результатов */}
          {!isLoading && searchQuery && results.length === 0 && (
            <div className="p-8 text-center">
              <p className="text-gray-500 mb-2">No results found for "{searchQuery}"</p>
              <p className="text-sm text-gray-400">Try checking your spelling or using different keywords</p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

// Моковые данные для демонстрации функционала
const mockSearchResults: SearchResult[] = [
  {
    id: "1",
    title: "Han Dynasty Clothing",
    description: "The Han dynasty established many of the foundational elements of traditional Chinese clothing, including the iconic cross-collar robe.",
    url: "/dynasty/1",
    category: "Dynasty"
  },
  {
    id: "2",
    title: "Tang Dynasty Fashion",
    description: "Known as China's golden age, Tang dynasty clothing featured vibrant colors, open necklines, and influences from the Silk Road.",
    url: "/dynasty/2",
    category: "Dynasty"
  },
  {
    id: "3",
    title: "How to Wear Ruqun",
    description: "Learn the proper way to put on and wear the traditional two-piece ruqun ensemble consisting of a top garment and skirt.",
    url: "/guides",
    category: "Guide"
  },
  {
    id: "4",
    title: "Dragon Symbolism",
    description: "The dragon is one of the most important symbols in Chinese culture, representing imperial power and strength.",
    url: "/symbols",
    category: "Symbol"
  },
  {
    id: "5",
    title: "Mandarin Squares (Rank Badges)",
    description: "Embroidered badges worn by civil and military officials in the Ming and Qing dynasties to indicate rank and status.",
    url: "/gallery?category=accessories",
    category: "Gallery"
  },
  {
    id: "6",
    title: "Ming Dynasty Court Dress",
    description: "The formal attire worn by officials and nobility during the Ming Dynasty, featuring strict regulations on colors and designs.",
    url: "/dynasty/3",
    category: "Dynasty"
  }
];

export default SearchModal;
