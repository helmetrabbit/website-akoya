export const Footer = () => (
  <footer className="bg-black mt-32">
    <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center">
      <p className="text-white text-sm">&copy; 2024 Akoya Labs. All rights reserved.</p>
      <div className="flex space-x-4 mt-4 md:mt-0">
        <a href="#" className="text-white hover:text-white transition-colors">
          Privacy Policy
        </a>
        <a href="#" className="text-white hover:text-white transition-colors">
          Terms of Service
        </a>
      </div>
    </div>
  </footer>
);
