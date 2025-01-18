import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Search } from "lucide-react";
import Link from "next/link";

interface HeaderProps {
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
  selectedIndustry: string;
  setSelectedIndustry: (searchTerm: string) => void;
}

const Header = ({
  searchTerm,
  setSearchTerm,
  selectedIndustry,
  setSelectedIndustry,
}: HeaderProps) => {
  const industries = [
    "All",
    "Technology",
    "Marketing",
    "Event",
    "Personal Story",
  ];
  return (
    <div className="bg-white shadow-sm">
      <div className="container px-4 py-8 mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <Link href="/">
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-[#0077b5]/10"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
          <h1 className="text-3xl font-bold text-gray-800">My Portfolio</h1>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col items-center gap-4 md:flex-row">
          <div className="relative flex-1">
            <Search className="absolute w-4 h-4 text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
            <Input
              placeholder="Search posts..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex w-full gap-2 pb-2 overflow-x-auto md:pb-0 md:w-auto">
            {industries.map((industry) => (
              <Button
                key={industry}
                variant={selectedIndustry === industry ? "default" : "outline"}
                className={
                  selectedIndustry === industry ? "bg-[#0077b5] text-white" : ""
                }
                onClick={() => setSelectedIndustry(industry)}
              >
                {industry}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
