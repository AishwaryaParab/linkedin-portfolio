"use client";

import { motion } from "framer-motion";
import { Card } from "../ui/card";
import { LinkedinIcon, MessageSquare, Share2, ThumbsUp } from "lucide-react";
import { samplePosts } from "@/lib/utils";

const Featured = () => {
  return (
    <section className="px-4 py-20">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-3xl font-bold text-center text-gray-800 md:text-4xl"
        >
          Featured LinkedIn Posts
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2">
          {samplePosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="p-6 transition-shadow hover:shadow-lg">
                <div className="flex items-center mb-4">
                  <LinkedinIcon className="w-6 h-6 text-[#0077b5] mr-2" />
                  <span className="font-semibold text-gray-700">
                    {post.client}
                  </span>
                </div>
                <p className="mb-6 text-gray-600 whitespace-pre-line">
                  {post.content}
                </p>
                <div className="flex items-center gap-6 text-gray-500">
                  <div className="flex items-center gap-2">
                    <ThumbsUp className="w-5 h-5" />
                    <span>{post.engagement.likes}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageSquare className="w-5 h-5" />
                    <span>{post.engagement.comments}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Share2 className="w-5 h-5" />
                    <span>{post.engagement.shares}</span>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
