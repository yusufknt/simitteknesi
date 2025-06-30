import { motion } from "framer-motion";
import React from "react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-accent-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Content */}
      <div className="relative z-10">
        <div className="text-primary-500 flex justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300">
          <div className="p-3 bg-primary-100 rounded-full">{icon}</div>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-4 text-center group-hover:text-primary-600 transition-colors duration-300">
          {title}
        </h3>

        <p className="text-gray-600 leading-relaxed text-center">
          {description}
        </p>
      </div>

      {/* Decorative Element */}
      <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent-100 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
    </motion.div>
  );
};

export default FeatureCard;
