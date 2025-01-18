"use client";
import { useState } from "react";
import Header from "./components/header";
import Posts from "./components/posts";
import { posts } from "@/lib/portfolioPosts";

const Portfolio = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("All");

  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.client.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesIndustry =
      selectedIndustry === "All" || post.industry === selectedIndustry;
    return matchesSearch && matchesIndustry;
  });
  return (
    <main className="min-h-screen bg-[#f3f2ef] pb-20">
      <Header
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedIndustry={selectedIndustry}
        setSelectedIndustry={setSelectedIndustry}
      />

      <Posts filteredPosts={filteredPosts} />
    </main>
  );
};

export default Portfolio;
