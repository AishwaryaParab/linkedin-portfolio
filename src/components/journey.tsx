"use client";

import { achievements, milestones } from "@/lib/utils";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

const Journey = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-gray-900">
            My LinkedIn Journey
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-gray-600">
            With over 4000 followers and 5000+ organic impressions per post,
            I&apos;ve experienced firsthand the transformative power of
            LinkedIn.
          </p>
          <div className="w-24 h-1 bg-[#0077b5] mx-auto mt-4"></div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-8 mb-20 md:grid-cols-4">
          {achievements.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6 transition-all bg-white shadow-lg rounded-2xl hover:shadow-xl"
              >
                <h3 className="text-4xl font-bold text-[#0077b5] mb-2">
                  {stat.number}
                </h3>
                <p className="mb-2 text-xl font-semibold text-gray-800">
                  {stat.label}
                </p>
                <p className="text-sm text-gray-600">{stat.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Animated vertical line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 1.5 }}
            className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-[#0077b5] opacity-30"
            style={{ top: 0, bottom: 0 }}
          />

          <div className="relative space-y-24">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative flex items-center"
              >
                {/* Left content */}
                <div
                  className={`w-5/12 ${
                    index % 2 === 0 ? "text-right pr-8" : "opacity-0"
                  }`}
                >
                  <h3 className="mb-2 text-2xl font-bold text-gray-800">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>

                {/* Center icon */}
                <div className="relative flex justify-center w-2/12">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                    className="w-12 h-12 bg-[#0077b5] rounded-full flex items-center justify-center z-10"
                  >
                    <milestone.icon className="w-6 h-6 text-white" />
                  </motion.div>
                </div>

                {/* Right content */}
                <div
                  className={`w-5/12 ${
                    index % 2 === 1 ? "text-left pl-8" : "opacity-0"
                  }`}
                >
                  <h3 className="mb-2 text-2xl font-bold text-gray-800">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="max-w-3xl mx-auto mb-8 text-xl text-gray-600">
            Now, I want to help others experience this incredible journey.
            Whether you&apos;re an artist, entrepreneur, or professional, your
            unique story deserves to be heard. Let&apos;s collaborate to make
            your art reach a wider audience and create lasting impact in your
            industry.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Button
              size="lg"
              className="bg-[#0077b5] text-white hover:bg-[#006097]"
            >
              Start Your Success Story
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Journey;
