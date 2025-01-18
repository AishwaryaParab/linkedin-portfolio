import CTA from "@/components/cta";
import Hero from "@/components/hero/page";
import Journey from "@/components/journey";
import WhyLinkedIn from "@/components/why-linkedin/page";
import Featured from "@/components/featured/page";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyLinkedIn />
      <Journey />
      <Featured />
      <CTA />
    </>
  );
}
