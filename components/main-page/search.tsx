import SectionTitle from "../common/sectionTitle";
import MainPageSearch from "./mainPageSearch";

export default function Search() {
  return (
    <section
      className="bg-center bg-cover"
      style={{ backgroundImage: "url('/main-page/search.tsx')" }}
    >
      <SectionTitle
        title="البحث عن الوحدات والمشاريع"
        description="ابحث بسهولة عن الوحدات والمشاريع المثالية لك، مع ترشيحات دقيقة ومعلومات موثوقة."
        centred
      />
      <MainPageSearch />
    </section>
  );
}
