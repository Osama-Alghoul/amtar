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
      className="bg-cover overflow-hidden bg-center rounded-3xl m-5"
      style={{ backgroundImage: "url('/main-page/hero.png')" }}
    >
      <Header />
      <div className="text-white pt-[285px] flex flex-col justify-center items-center gap-4 pb-28">
        <h1 className="font-semibold text-7xl text-center">
          منصة أمــتار <br /> للشراء و الايجار و البيع
        </h1>
        <p className="text-xl">
          ابحث وقارن بين أكثر من 15000+ عقار من بين 800+ كمبوند أو اعرض عقارك
          للبيع
        </p>
      </div>
      <div className="flex justify-center gap-5 px-20 pb-20">
        {mockData.map((item) => (
          <HeroCard
            key={item.title}
            title={item.title}
            description={item.description}
            beach={item.beach}
            pool={item.pool}
            area={item.area}
            src={item.src}
          />
        ))}
      </div>
    </section>
  );
}
