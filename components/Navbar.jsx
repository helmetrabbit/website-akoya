// import { useState } from "react";
import { Button } from "./Button.jsx";
// import { Menu, X } from "lucide-react";


export const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md">
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
        <Button className="md:inline-flex button-simple">Get Started</Button>

      </div>
    </header>
  );
};
