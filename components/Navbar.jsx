import { useState } from "react";
import { Button } from "./Button.jsx";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <a className="text-2xl font-bold text-black" href="/">
          Akoya Labs
        </a>
        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          <a className="text-black hover:text-white transition-colors" href="#features">
            Features
          </a>
          <a className="text-black hover:text-white transition-colors" href="#testimonials">
            Testimonials
          </a>
          <a className="text-black hover:text-white transition-colors" href="#pricing">
            Pricing
          </a>
        </nav>
        <Button className="hidden md:inline-flex">Get Started</Button>
        <button
          className="md:hidden text-gray-300 hover:text-white transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 backdrop-blur-sm">
          <div className="fixed inset-y-0 right-0 w-full max-w-sm p-6 shadow-lg">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute right-4 top-4 text-gray-400 hover:text-white transition-colors"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
            <nav className="mt-8 flex flex-col space-y-4">
              <a className="text-lg font-medium text-gray-200 hover:text-white transition-colors" href="#features">
                Features
              </a>
              <a className="text-lg font-medium text-gray-200 hover:text-white transition-colors" href="#testimonials">
                Testimonials
              </a>
              <a className="text-lg font-medium text-gray-200 hover:text-white transition-colors" href="#pricing">
                Pricing
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};
