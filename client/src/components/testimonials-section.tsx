import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Star, User } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    location: "Homeowner, Springfield",
    rating: 5,
    text: "Jeanius Power Washing transformed our house! It looks brand new. The team was professional, punctual, and the results exceeded our expectations. Highly recommend!"
  },
  {
    name: "Mike Johnson",
    location: "Business Owner, Downtown",
    rating: 5,
    text: "Outstanding service! They cleaned our commercial property perfectly. The difference is amazing. Professional, reliable, and great value. We'll definitely use them again."
  },
  {
    name: "Lisa Chen",
    location: "Homeowner, Riverside",
    rating: 5,
    text: "My driveway and deck look incredible! The oil stains are completely gone. Fast, efficient, and reasonably priced. I'm so happy with the results!"
  }
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-r from-primary-blue to-light-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what satisfied customers say about our pressure washing services.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="bg-white bg-opacity-10 backdrop-blur-sm border-0 h-full">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 fill-current" size={20} />
                    ))}
                  </div>
                  <p className="text-lg mb-6 italic">"{testimonial.text}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-4">
                      <User className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-blue-200 text-sm">{testimonial.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center bg-white bg-opacity-10 backdrop-blur-sm px-8 py-4 rounded-lg">
            <div className="flex items-center mr-6">
              <Star className="text-yellow-400 fill-current mr-2" size={32} />
              <span className="text-2xl font-bold">4.9/5</span>
            </div>
            <div className="text-left">
              <p className="font-semibold">Average Rating</p>
              <p className="text-blue-200 text-sm">Based on 200+ Reviews</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
