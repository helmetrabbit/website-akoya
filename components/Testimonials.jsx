import { motion } from 'framer-motion';
import { Card } from './Card.jsx';

const testimonials = [
  {
    name: "Alex Johnson",
    role: "CEO, TechCorp",
    content: "This product has revolutionized our workflow. Highly recommended!",
    image: "/images/alex-johnson.jpg"
  },
  {
    name: "Sarah Lee",
    role: "Marketing Director, InnovateCo",
    content: "The analytics features are a game-changer for our marketing strategies.",
    image: "/images/sarah-lee.jpg"
  },
  {
    name: "Michael Chen",
    role: "CTO, FutureTech",
    content: "Impressed by the robust security measures. It's a trustworthy solution.",
    image: "/images/michael-chen.jpg"
  },
];

export const Testimonials = () => (
  <section id="testimonials">
    <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">Testimonials</h2>
    <div className="grid md:grid-cols-3 gap-8">
      {testimonials.map((testimonial, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.05 }}
        >
          <Card>
            <img src={testimonial.image} alt={testimonial.name} className="rounded-full w-16 h-16 mx-auto mb-4" />
            <p className="text-gray-300 mb-4">"{testimonial.content}"</p>
            <div>
              <p className="font-semibold">{testimonial.name}</p>
              <p className="text-sm text-gray-400">{testimonial.role}</p>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  </section>
);
