
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Search } from "lucide-react";
import SearchModal from "./SearchModal";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const openSearch = () => {
    setIsSearchOpen(true);
  };
  
  const closeSearch = () => {
    setIsSearchOpen(false);
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Логотип */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl font-serif font-medium text-white">Silk & Dynasty</span>
          </Link>

          {/* Навигация для десктопа */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white/90 hover:text-white transition-colors">Home</Link>
            <Link to="/about" className="text-white/90 hover:text-white transition-colors">About</Link>
            <Link to="/dynasties" className="text-white/90 hover:text-white transition-colors">Dynasties</Link>
            <Link to="/symbols" className="text-white/90 hover:text-white transition-colors">Symbols</Link>
            <Link to="/guides" className="text-white/90 hover:text-white transition-colors">Guides</Link>
            <Link to="/gallery" className="text-white/90 hover:text-white transition-colors">Gallery</Link>
          </nav>

          {/* Действия */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              className="text-white/80 hover:text-white transition-colors"
              onClick={openSearch}
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <Button className="bg-gold hover:bg-gold/90 text-dark rounded-none">
              Join Community
            </Button>
          </div>

          {/* Кнопка мобильного меню */}
          <div className="md:hidden flex items-center space-x-4">
            <button 
              className="text-white/80 hover:text-white transition-colors"
              onClick={openSearch}
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button 
              className="text-white"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Мобильное меню */}
      {isMenuOpen && (
        <div className="md:hidden bg-dark fixed inset-0 z-50 pt-20 px-6 overflow-y-auto">
          <nav className="flex flex-col space-y-6 text-center">
            <Link to="/" className="text-xl text-white py-2" onClick={toggleMenu}>Home</Link>
            <Link to="/about" className="text-xl text-white py-2" onClick={toggleMenu}>About</Link>
            <Link to="/dynasties" className="text-xl text-white py-2" onClick={toggleMenu}>Dynasties</Link>
            <Link to="/symbols" className="text-xl text-white py-2" onClick={toggleMenu}>Symbols</Link>
            <Link to="/guides" className="text-xl text-white py-2" onClick={toggleMenu}>Guides</Link>
            <Link to="/gallery" className="text-xl text-white py-2" onClick={toggleMenu}>Gallery</Link>
            <div className="pt-6">
              <Button className="bg-gold hover:bg-gold/90 text-dark rounded-none w-full">
                Join Community
              </Button>
            </div>
          </nav>
        </div>
      )}
      
      {/* Модальное окно поиска */}
      <SearchModal isOpen={isSearchOpen} onClose={closeSearch} />
    </header>
  );
};

export default Navbar;
