import { motion } from 'framer-motion';
import { Card } from "./Card.jsx";

const features = [
  { title: "Intuitive Design", description: "User-friendly interface that's easy to navigate." },
  { title: "Powerful Analytics", description: "Gain insights with our advanced analytics tools." },
  { title: "Secure & Reliable", description: "Your data is safe with our top-notch security measures." },
  { title: "24/7 Support", description: "Our support team is always ready to assist you." },
];

export const Features = () => (
  <section id="features">
    <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">Features</h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.05 }}
          className="card-glow p-6"
        >
          <Card>
            <h3 className="text-xl font-semibold mb-2 text-black">{feature.title}</h3>
            <p className="text-gray-700">{feature.description}</p>
          </Card>
        </motion.div>
      ))}
    </div>
  </section>
);
