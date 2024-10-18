import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./Button.jsx";
import { Navbar } from "./Navbar.jsx";
import { Footer } from "./Footer.jsx";
import { Input } from "./Input.jsx";
import { Features } from "./Features.jsx";

export default function App() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen text-gray-800">
      <Navbar />
      <main className="container mx-auto px-4 py-16 space-y-32">
        <motion.section
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="container-glass text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-feature mb-6 leading-tight">
            Revolutionize Your Workflow
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Boost productivity, streamline processes, and achieve unprecedented efficiency with our innovative platform.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="button-simple">Get Started</Button>
            <Button className="button-simple bg-gray-100">Learn More</Button>
          </div>
        </motion.section>
        <Features />
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="container-glass text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 text-center mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers and transform your business today.
          </p>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex gap-4">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button className="button-simple" type="submit">Get Started</Button>
            </div>
            {submitted && <p className="text-green-500 mt-4">Thank you for signing up!</p>}
          </form>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
}
