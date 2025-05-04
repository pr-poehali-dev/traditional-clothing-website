
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-white/80 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-serif text-white mb-4">Silk & Dynasty</h3>
            <p className="mb-4">Explore the Elegance of Chinese Tradition</p>
            <p className="text-sm">© 2025 Silk & Dynasty. All rights reserved.</p>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">Explore</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-gold transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-gold transition-colors">About</Link></li>
              <li><Link to="/dynasties" className="hover:text-gold transition-colors">Dynasties & Styles</Link></li>
              <li><Link to="/symbols" className="hover:text-gold transition-colors">Fabrics & Symbols</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">Learn</h4>
            <ul className="space-y-2">
              <li><Link to="/guides" className="hover:text-gold transition-colors">How to Wear Hanfu</Link></li>
              <li><Link to="/blog" className="hover:text-gold transition-colors">Culture Blog</Link></li>
              <li><Link to="/gallery" className="hover:text-gold transition-colors">Gallery</Link></li>
              <li><Link to="/resources" className="hover:text-gold transition-colors">Resources</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">Connect</h4>
            <ul className="space-y-2">
              <li><Link to="/contact" className="hover:text-gold transition-colors">Contact Us</Link></li>
              <li><a href="#" className="hover:text-gold transition-colors">Facebook</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">YouTube</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <Link to="/privacy" className="text-sm hover:text-gold transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-sm hover:text-gold transition-colors">Terms of Use</Link>
            <Link to="/cookies" className="text-sm hover:text-gold transition-colors">Cookie Policy</Link>
          </div>
          
          <div className="flex space-x-4">
            <button className="text-sm hover:text-gold transition-colors">EN</button>
            <button className="text-sm hover:text-gold transition-colors">中文</button>
            <button className="text-sm hover:text-gold transition-colors">Русский</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
