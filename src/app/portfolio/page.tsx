"use client";
import { useState } from "react";
import Header from "./components/header";
import { portfolioPosts } from "@/lib/utils";
import Posts from "./components/posts";

const Portfolio = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("All");

  const filteredPosts = portfolioPosts.filter((post) => {
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
