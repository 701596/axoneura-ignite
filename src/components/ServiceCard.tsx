"use client";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features?: string[];
  index?: number;
}

const ServiceCard = ({ icon: Icon, title, description, features, index = 0 }: ServiceCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
    viewport={{ once: true, margin: "-60px" }}
    whileHover={{ y: -6, transition: { duration: 0.3 } }}
    className="glass-card-strong p-6 sm:p-8 group transition-shadow duration-500 glow-border-hover"
  >
    {/* Icon */}
    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#378ADD]/20 via-[#534AB7]/20 to-[#C967E8]/20 flex items-center justify-center mb-5 group-hover:shadow-[0_0_20px_rgba(201,103,232,0.2)] transition-shadow duration-500">
      <Icon className="w-5 h-5 text-gradient-end" />
    </div>

    <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
    <p className="text-sm text-white/50 leading-relaxed">{description}</p>

    {features && (
      <ul className="mt-5 space-y-2.5">
        {features.map((feature) => (
          <li key={feature} className="text-sm text-white/40 flex items-start gap-2.5">
            <span className="w-1 h-1 rounded-full bg-gradient-end mt-2 shrink-0" />
            {feature}
          </li>
        ))}
      </ul>
    )}
  </motion.div>
);

export default ServiceCard;
