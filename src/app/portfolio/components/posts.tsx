import { Card } from "@/components/ui/card";
import { PortfolioPost } from "@/lib/utils";
import { motion } from "framer-motion";
import { LinkedinIcon, MessageSquare, Share2, ThumbsUp } from "lucide-react";

interface PostsProps {
  filteredPosts: PortfolioPost[];
}

const Posts = ({ filteredPosts }: PostsProps) => {
  return (
    <div className="container px-4 mx-auto mt-12">
      <div className="grid gap-8 md:grid-cols-2">
        {filteredPosts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="p-6 transition-all bg-white hover:shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <LinkedinIcon className="w-6 h-6 text-[#0077b5] mr-2" />
                  <span className="font-semibold text-gray-700">
                    {post.client}
                  </span>
                </div>
                <span className="text-sm px-3 py-1 bg-[#0077b5]/10 text-[#0077b5] rounded-full">
                  {post.industry}
                </span>
              </div>
              <p className="mb-6 text-gray-600 whitespace-pre-line">
                {post.content}
              </p>
              <div className="flex items-center gap-6 text-gray-500">
                <div className="flex items-center gap-2">
                  <ThumbsUp className="w-5 h-5" />
                  <span>{post.engagement.likes.toLocaleString()}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5" />
                  <span>{post.engagement.comments.toLocaleString()}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Share2 className="w-5 h-5" />
                  <span>{post.engagement.shares.toLocaleString()}</span>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="py-20 text-center"
        >
          <p className="text-xl text-gray-500">
            No posts found matching your criteria.
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default Posts;
