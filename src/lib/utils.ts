import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import {
  Rocket,
  Globe,
  Users,
  Sparkles,
  Briefcase,
  Award,
  Target,
} from "lucide-react";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const whyLinkedInCards = [
  {
    icon: Globe,
    title: "Global Stage for Your Ideas",
    description:
      "LinkedIn isn't just a resume anymore. It's your personal stage to share your unique perspective with a global audience of professionals who are eager to learn and connect.",
  },
  {
    icon: Sparkles,
    title: "Build Your Personal Brand",
    description:
      "Whether you're an artist, entrepreneur, or professional, LinkedIn is where thought leaders are born. Your expertise deserves to be shared with the world.",
  },
  {
    icon: Users,
    title: "Community of Creators",
    description:
      "Join a thriving community of creators who support each other. Your ideas can inspire thousands and lead to unexpected opportunities and collaborations.",
  },
  {
    icon: Rocket,
    title: "Career-Defining Opportunities",
    description:
      "When you share your journey authentically, the right opportunities find you. Turn your LinkedIn presence into a magnet for dream projects and partnerships.",
  },
];

export const milestones = [
  {
    title: "Dream Job Secured",
    description: "Got reached out and secured a job without applying",
    icon: Briefcase,
  },
  {
    title: "Industry Recognition",
    description: "Respected voice in software engineering",
    icon: Award,
  },
  {
    title: "Community Built",
    description: "Loyal audience that trusts my content",
    icon: Users,
  },
  {
    title: "Speaking Opportunities",
    description: "Regular invitations for talks and speeches",
    icon: Target,
  },
];

export const achievements = [
  {
    number: "4000+",
    label: "Followers",
    description: "Growing community of engaged professionals",
  },
  {
    number: "5000+",
    label: "Impressions",
    description: "Average organic reach per post",
  },
  {
    number: "100%",
    label: "Authenticity",
    description: "Real stories, real impact",
  },
  {
    number: "∞",
    label: "Possibilities",
    description: "Unlimited growth potential",
  },
];

export const samplePosts = [
  {
    id: 1,
    client: "Tech Startup CEO",
    content: `🚀 Breaking News: We've just closed our Series A funding round at $10M! 
  
  Grateful for the trust our investors have placed in our vision to revolutionize the future of work.
  
  Key learnings from our journey:
  1. Build for your users, not investors
  2. Culture eats strategy for breakfast
  3. Resilience is your best friend
  
  What's next? We're hiring! DM me if you want to be part of something special.
  
  #StartupLife #TechInnovation #Leadership`,
    engagement: { likes: 1542, comments: 89, shares: 234 },
  },
  {
    id: 2,
    client: "Marketing Director",
    content: `💡 The ONE marketing strategy that transformed our ROI by 300%:
  
  Content that converts.
  
  Here's the framework we used:
  • Identify pain points
  • Create valuable solutions
  • Engage authentically
  • Measure & iterate
  
  Simple but effective.
  
  Want to learn more? Drop a "YES" in the comments!
  
  #MarketingTips #DigitalMarketing #Growth`,
    engagement: { likes: 2103, comments: 156, shares: 412 },
  },
];

export interface Engagement {
  likes: number;
  comments: number;
  shares: number;
}

export interface PortfolioPost {
  id: number;
  client: string;
  industry: string;
  content: string;
  engagement: Engagement;
}

export const portfolioPosts = [
  {
    id: 1,
    client: "Tech Startup CEO",
    industry: "Technology",
    content: `🚀 Breaking News: We've just closed our Series A funding round at $10M! 
  
  Grateful for the trust our investors have placed in our vision to revolutionize the future of work.
  
  Key learnings from our journey:
  1. Build for your users, not investors
  2. Culture eats strategy for breakfast
  3. Resilience is your best friend
  
  What's next? We're hiring! DM me if you want to be part of something special.
  
  #StartupLife #TechInnovation #Leadership`,
    engagement: { likes: 1542, comments: 89, shares: 234 },
  },
  {
    id: 2,
    client: "Marketing Director",
    industry: "Marketing",
    content: `💡 The ONE marketing strategy that transformed our ROI by 300%:
  
  Content that converts.
  
  Here's the framework we used:
  • Identify pain points
  • Create valuable solutions
  • Engage authentically
  • Measure & iterate
  
  Simple but effective.
  
  Want to learn more? Drop a "YES" in the comments!
  
  #MarketingTips #DigitalMarketing #Growth`,
    engagement: { likes: 2103, comments: 156, shares: 412 },
  },
  {
    id: 3,
    client: "Product Designer",
    industry: "Design",
    content: `🎨 Design isn't just about making things pretty.
  
  After 10 years in the industry, here's what I've learned:
  
  1. Design solves problems
  2. Users don't read, they scan
  3. Simplicity > Complexity
  4. Data drives decisions
  5. Empathy is everything
  
  Thread 🧵 on how to apply these principles...
  
  #DesignThinking #UX #ProductDesign`,
    engagement: { likes: 3240, comments: 178, shares: 523 },
  },
  {
    id: 4,
    client: "Sales Executive",
    industry: "Sales",
    content: `🎯 Hit 200% of my sales quota this quarter.
  
  The secret?
  Stop selling. Start solving.
  
  3 mindset shifts that changed everything:
  1. Focus on pain points, not features
  2. Listen more than you talk
  3. Follow up with value, not pressure
  
  Who wants my sales playbook? 👇
  
  #SalesSuccess #B2B #BusinessGrowth`,
    engagement: { likes: 1876, comments: 245, shares: 167 },
  },
];
