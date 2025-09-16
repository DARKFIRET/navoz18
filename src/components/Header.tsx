import { Button } from "./ui/button";
import { Link, useLocation } from "react-router-dom";
import Logo from '@/assets/images/logo.svg?react'

function Header() {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Link to="/" className="text-xl sm:text-2xl font-bold text-green-700 flex-row flex items-center gap-2 items">
              <Logo /> АгроНавоз
            </Link>
          </div>
          <nav className="hidden md:flex space-x-6">
            <Link 
              to="/" 
              className={`${isActive('/') ? 'text-green-700 font-semibold' : 'text-gray-600 hover:text-green-700'}`}
            >
              Главная
            </Link>
            <Link 
              to="/about" 
              className={`${isActive('/about') ? 'text-green-700 font-semibold' : 'text-gray-600 hover:text-green-700'}`}
            >
              О нас
            </Link>
            <Link 
              to="/contacts" 
              className={`${isActive('/contacts') ? 'text-green-700 font-semibold' : 'text-gray-600 hover:text-green-700'}`}
            >
              Контакты
            </Link>
          </nav>
        </div>
        
        {/* Mobile Navigation */}
        <nav className="md:hidden mt-3 pt-3 border-t flex justify-center space-x-6">
          <Link 
            to="/" 
            className={`text-sm ${isActive('/') ? 'text-green-700 font-semibold' : 'text-gray-600 hover:text-green-700'}`}
          >
            Главная
          </Link>
          <Link 
            to="/about" 
            className={`text-sm ${isActive('/about') ? 'text-green-700 font-semibold' : 'text-gray-600 hover:text-green-700'}`}
          >
            О нас
          </Link>
          <Link 
            to="/contacts" 
            className={`text-sm ${isActive('/contacts') ? 'text-green-700 font-semibold' : 'text-gray-600 hover:text-green-700'}`}
          >
            Контакты
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;