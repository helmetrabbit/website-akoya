import { useState } from "react";
import { AmbientBackground } from "./AmbientBackground";
import { Button } from "./Button";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Input } from "./Input";
import { Features } from "./Features"; 

export default function App() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add actual submission logic here
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 overflow-x-hidden">
      <AmbientBackground />
      <Navbar />
      <main className="container mx-auto px-4 py-16 space-y-32">
        <section className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Revolutionize Your Workflow
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Boost productivity, streamline processes, and achieve unprecedented efficiency with our innovative platform.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button>Get Started</Button>
            <Button className="bg-gray-700 hover:bg-gray-600">Learn More</Button>
          </div>
        </section>
        <Features />
        <section className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 text-center mb-8 max-w-2xl mx-auto">
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
              <Button type="submit">Get Started</Button>
            </div>
            {submitted && <p className="text-green-500 mt-4">Thank you for signing up!</p>}
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
}
