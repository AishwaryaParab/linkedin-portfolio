"use client";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-[#0077b5] to-[#006699]">
      <div className="container px-6 mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="mb-6 text-4xl font-bold text-white">
              Ready to Build Your LinkedIn Legacy?
            </h2>
            <p className="mb-8 text-xl text-white/90">
              Join me in creating content that matters. Let's make your
              expertise shine and build a community that values your insights.
            </p>
            <button className="bg-white text-[#0077b5] px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Begin Your Journey
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
