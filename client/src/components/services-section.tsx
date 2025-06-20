import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { 
  Home, 
  Car, 
  Umbrella, 
  Building, 
  Fence, 
  Droplets,
  Check
} from "lucide-react";

const services = [
  {
    icon: Home,
    title: "House Washing",
    description: "Complete exterior house cleaning including siding, windows, gutters, and trim. Safe for all surfaces.",
    features: ["Siding & Exterior Walls", "Windows & Screens", "Gutters & Downspouts"]
  },
  {
    icon: Car,
    title: "Driveway Cleaning",
    description: "Remove oil stains, dirt, and grime from concrete, asphalt, and paver driveways.",
    features: ["Oil Stain Removal", "Concrete & Asphalt", "Paver Restoration"]
  },
  {
    icon: Umbrella,
    title: "Deck & Patio",
    description: "Restore wood decks, concrete patios, and outdoor living spaces to their original beauty.",
    features: ["Wood Deck Cleaning", "Concrete Patios", "Outdoor Furniture"]
  },
  {
    icon: Building,
    title: "Commercial Cleaning",
    description: "Professional exterior cleaning for businesses, storefronts, and commercial properties.",
    features: ["Storefront Cleaning", "Parking Lots", "Building Exteriors"]
  },
  {
    icon: Fence,
    title: "Fence Cleaning",
    description: "Remove dirt, mildew, and weathering from wood, vinyl, and metal fencing.",
    features: ["Wood Fences", "Vinyl & PVC", "Metal Fencing"]
  },
  {
    icon: Droplets,
    title: "Roof Cleaning",
    description: "Safe, low-pressure roof cleaning to remove algae, moss, and debris without damage.",
    features: ["Algae Removal", "Moss Treatment", "Gutter Cleaning"]
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Professional Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive pressure washing solutions for residential and commercial properties, 
            using state-of-the-art equipment and eco-friendly cleaning solutions.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary-blue rounded-lg flex items-center justify-center mb-6">
                    <service.icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="text-gray-600 space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <Check className="text-primary-blue mr-2 flex-shrink-0" size={16} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
