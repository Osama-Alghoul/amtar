import SectionTitle from "../common/sectionTitle";
import { DiscoverCard } from "./discoverCard";

export default function Discover() {
  const mockData = [
    {
      title: " Rock Capital - روك كابيتال",
      type: "طور عقاري - شقق",
      price: "14,339,814",
      image: "/main-page/discover/P1.png",
      logo: "/main-page/discover/Discover1.svg",
    },
    {
      title: " Rock Capital - روك كابيتال",
      type: "وسيط عقاري - تاون هاوس",
      price: "14,339,814",
      image: "/main-page/discover/P2.png",
      logo: "/main-page/discover/Discover2.svg",
    },
    {
      title: "Urban Developments - التطورات الحضرية",
      type: "وسيط عقاري - فلل",
      price: "12,750,000",
      image: "/main-page/discover/P3.png",
      logo: "/main-page/discover/Discover3.svg",
    },
    {
      title: "Urban Developments - التطورات الحضرية",
      type: "طور عقاري - شقق",
      price: "5,000,000",
      image: "/main-page/discover/P4.png",
      logo: "/main-page/discover/Discover4.svg",
    },
    {
      title: " Rock Capital - روك كابيتال",
      type: "طور عقاري - شقق",
      price: "14,339,814",
      image: "/main-page/discover/P1.png",
      logo: "/main-page/discover/Discover1.svg",
    },
    {
      title: " Rock Capital - روك كابيتال",
      type: "وسيط عقاري - تاون هاوس",
      price: "14,339,814",
      image: "/main-page/discover/P2.png",
      logo: "/main-page/discover/Discover2.svg",
    },
    {
      title: "Urban Developments - التطورات الحضرية",
      type: "وسيط عقاري - فلل",
      price: "12,750,000",
      image: "/main-page/discover/P3.png",
      logo: "/main-page/discover/Discover3.svg",
    },
    {
      title: "Urban Developments - التطورات الحضرية",
      type: "طور عقاري - شقق",
      price: "5,000,000",
      image: "/main-page/discover/P4.png",
      logo: "/main-page/discover/Discover4.svg",
    },
  ];
  return (
    <>
      <section className="px-20">
        <SectionTitle
          title="استكشف المشاريع لاكثر مشاهدة"
          description="اكتشف كلّ ما هو جديد حول المشاريع لتحظى بأفضل فرص الاستثمار."
          more
        />
      </section>
      <div className="flex overflow-x-scroll snap-x snap-mandatory gap-5">
        {mockData.map((card, index) => (
          <DiscoverCard key={index} {...card} />
        ))}
      </div>
    </>
  );
}
