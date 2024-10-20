import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./Button.jsx";
import { Navbar } from "./Navbar.jsx";
import { Footer } from "./Footer.jsx";
import { Input } from "./Input.jsx";
import { Features } from "./Features.jsx";
import ShaderBackground from "./AmbientBackground.jsx"; // Importing from separate file

export default function App() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen text-gray-800">
      <ShaderBackground /> {/* Renders the background */}
      <Navbar />
      <main className="max-w-2xl mx-auto px-4 py-16 space-y-32">
        <motion.section
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="container-glass text-center"
        >
          <h1 className="text-2xl xs:text-4xl sm:text-5xl md:text-6xl font-bold text-feature mb-6 leading-tight">
            Revolutionize Your Workflow
          </h1>
          <p className="text-md xs:text-l sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
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
>
  <div className="card container-glass text-center">
    <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to Get Started?</h2>
    <p className="text-xl text-gray-600 text-center mb-8 max-w-2xl mx-auto">
      Join thousands of satisfied customers and transform your business today.
    </p>
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="flex flex-wrap items-center gap-4 w-full">
        <Input
          className="flex-grow w-full xs:w-auto"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Button className="w-full xs:w-auto button-simple" type="submit">
          Get Started
        </Button>
      </div>
      {submitted && <p className="text-green-500 mt-4">Thank you for signing up!</p>}
    </form>
  </div>
</motion.section>
      </main>
      <Footer />
    </div>
  );
}
