import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="home" className="pt-20 bg-gradient-to-br from-primary-blue to-light-blue text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Transform Your Property with{" "}
              <span className="text-accent-blue">Professional</span>{" "}
              Power Washing
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Restore your home's beauty and increase its value with our expert pressure washing services. 
              We deliver exceptional results that make your property shine like new.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                onClick={scrollToContact}
                size="lg"
                className="bg-white text-primary-blue font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg px-8 py-4"
              >
                Get Free Estimate
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-white text-white font-bold text-lg hover:bg-white hover:text-primary-blue transition-colors px-8 py-4"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-8">
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <div className="text-3xl font-bold">500+</div>
                <div className="text-blue-200">Projects Done</div>
              </motion.div>
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <div className="text-3xl font-bold">5 Star</div>
                <div className="text-blue-200">Rating</div>
              </motion.div>
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <div className="text-3xl font-bold">10+</div>
                <div className="text-blue-200">Years Experience</div>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Professional pressure washing service" 
              className="rounded-2xl shadow-2xl w-full"
            />
            <motion.div 
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl text-gray-800"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <div className="flex items-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>
              <p className="font-semibold">"Amazing results! Looks brand new!"</p>
              <p className="text-sm text-gray-600">- Sarah M.</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
