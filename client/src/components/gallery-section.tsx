import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Images } from "lucide-react";

const beforeAfterComparisons = [
  {
    title: "House Exterior Transformation",
    before: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    after: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
  },
  {
    title: "Driveway Restoration",
    before: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    after: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
  },
  {
    title: "Deck Renewal",
    before: "https://images.unsplash.com/photo-1516208813967-931ef60569ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    after: "https://images.unsplash.com/photo-1519947486511-46149fa0a254?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
  },
  {
    title: "Commercial Building",
    before: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    after: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
  }
];

export default function GallerySection() {
  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Dramatic Before & After Results</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See the incredible transformations we achieve with our professional pressure washing services. 
            Your property can look this amazing too!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {beforeAfterComparisons.map((comparison, index) => (
            <motion.div
              key={comparison.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="bg-gray-50">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{comparison.title}</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-semibold text-gray-600 mb-2">BEFORE</p>
                      <img 
                        src={comparison.before} 
                        alt={`${comparison.title} before pressure washing`} 
                        className="rounded-lg w-full h-48 object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-primary-blue mb-2">AFTER</p>
                      <img 
                        src={comparison.after} 
                        alt={`${comparison.title} after pressure washing`} 
                        className="rounded-lg w-full h-48 object-cover"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Button 
            size="lg"
            className="bg-primary-blue text-white font-bold hover:bg-primary-blue/90 transition-colors shadow-lg px-8 py-4"
          >
            <Images className="mr-2 h-5 w-5" />
            View Full Gallery
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
