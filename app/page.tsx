import Discover from "@/components/main-page/discover";
import Hero from "@/components/main-page/hero";
import Search from "@/components/main-page/search";

export default function Home() {
  return (
    <div>
      <Hero />
      <Search />
      <Discover />
    </div>
  );
}
