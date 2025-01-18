"use client";

import { whyLinkedInCards } from "@/lib/utils";
import { motion } from "framer-motion";
import { Card } from "../ui/card";

const WhyLinkedIn = () => {
  return (
    <section className="px-4 py-20 bg-white">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-6 text-3xl font-bold text-gray-800 md:text-4xl">
            Why LinkedIn Matters Today
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-gray-600">
            LinkedIn has evolved from a job-seeking platform to the world&apos;s
            most powerful stage for personal branding. It&apos;s where ideas
            spread, careers are made and opportunities are born.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {whyLinkedInCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full p-6 transition-all hover:shadow-lg hover:-translate-y-1">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-[#0077b5] rounded-full flex items-center justify-center mb-4">
                    <card.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-gray-800">
                    {card.title}
                  </h3>
                  <p className="text-gray-600">{card.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyLinkedIn;
