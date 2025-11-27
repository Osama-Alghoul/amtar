import SectionTitle from "../common/sectionTitle";
import MainPageSearch from "./mainPageSearch";

export default function Search() {
  return (
    <section
      className="bg-center bg-cover px-20"
      style={{ backgroundImage: "url('/main-page/search.png')" }}
    >
      <div className="py-24">
        <SectionTitle
          title="البحث عن الوحدات والمشاريع"
          description="ابحث بسهولة عن الوحدات والمشاريع المثالية لك، مع ترشيحات دقيقة ومعلومات موثوقة."
          centred
        />
        <MainPageSearch />
      </div>
    </section>
  );
}
