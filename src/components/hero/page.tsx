"use client";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <main className="min-h-screen bg-[#f3f2ef]">
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-[#0077b5] to-[#00a0dc] text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container flex flex-col items-center gap-12 px-4 mx-auto md:flex-row"
        >
          <div className="md:w-1/2">
            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-6 text-4xl font-bold md:text-6xl"
            >
              Crafting LinkedIn Stories That Convert
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-8 text-xl"
            >
              I help professionals and businesses build powerful personal brands
              through compelling LinkedIn content.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Link href="/portfolio">
                <Button
                  size="lg"
                  className="bg-white text-[#0077b5] hover:bg-gray-100"
                >
                  View My Work
                </Button>
              </Link>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="flex items-center justify-center md:w-1/2"
          >
            <img
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Professional headshot"
              className="object-cover w-64 h-64 rounded-full shadow-2xl md:w-96 md:h-96"
            />
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
};

export default Hero;
