import { Hero } from "@/components/content/hero";
import { Credentials } from "@/components/content/credentials";
import { Approach } from "@/components/content/approach";
import { Services } from "@/components/content/services";
import { WhyUs } from "@/components/content/why-us";
import { Industries } from "@/components/content/industries";
import { Cta } from "@/components/content/cta";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <Approach />
      <Services />
      <WhyUs />
      <Industries />
      <Credentials />
      <Cta />
    </main>
  );
}
