import Header from "../layout/header";
import HeroCard from "./heroCard";

export default function Hero() {
  const mockData = [
    {
      title: "تاون هاوس الأندلس – جدة",
      description: "تجربة سكنية مميزة مع حديقة خاصة وتصميمات داخلية حديثة.",
      beach: 4,
      pool: 4,
      area: 400,
      src: "/properties/P2.png",
    },
    {
      title: "شقق البستان الفاخرة – العليا الرياض",
      description:
        "شقق عصرية مع مرافق حديثة، قريبة من الخدمات والمرافق العامة.",
      beach: 4,
      pool: 4,
      area: 400,
      src: "/properties/P3.png",
    },
    {
      title: "شقق وارفة ريزيدنس – المغرزات الرياض",
      description:
        " شقق سكنية بتصاميم أنيقة وأسعار تنافسية مع إطلالات رائعة وخدمات متكاملة.",
      beach: 4,
      pool: 4,
      area: 400,
      src: "/properties/P1.png",
    },
  ];
  return (
    <section
      className="bg-cover overflow-hidden bg-center md:rounded-3xl rounded-none md:m-5 m-0"
      style={{ backgroundImage: "url('/main-page/hero.png')" }}
    >
      <Header />
      <div className="text-white pt-[190px] flex flex-col justify-center items-center gap-4 pb-28">
        <h1 className="font-semibold lg:text-7xl md:text-5xl text-3xl text-center">
          منصة أمــتار <br /> للشراء و الايجار و البيع
        </h1>
        <p className="lg:text-xl md:text-lg text-base text-center">
          ابحث وقارن بين أكثر من 15000+ عقار من بين 800+ كمبوند أو اعرض عقارك
          للبيع
        </p>
      </div>
      <div className="flex gap-5 lg:px-20 md:px-10 px-5 pb-20 shrink-0 overflow-x-scroll " style={{ scrollbarWidth: "none" }}>
        {mockData.map((item) => (
          <HeroCard
            key={item.title}
            title={item.title}
            description={item.description}
            beach={item.beach}
            pool={item.pool}
            area={item.area}
            src={item.src}
            className="shrink-0"
          />
        ))}
      </div>
    </section>
  );
}
