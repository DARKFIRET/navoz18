function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 sm:py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="text-lg sm:text-xl font-bold mb-3 md:mb-0">🌱 АгроНавоз</div>
          <div className="text-gray-400 text-sm">
            © 2024 АгроНавоз. Все права защищены.
          </div>
        </div>
        <div className="text-center text-gray-400 text-xs sm:text-sm mt-3 sm:mt-4">
          Качественные органические удобрения для здорового урожая
        </div>
      </div>
    </footer>
  );
}

export default Footer;