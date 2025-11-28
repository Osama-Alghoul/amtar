import SectionTitle from "../common/sectionTitle";
import MainPageSearch from "./mainPageSearch";

export default function Search() {
  return (
    <section
      className="bg-center bg-cover lg:px-20 md:px-10 px-5"
      style={{ backgroundImage: "url('/main-page/search.png')" }}
    >
      <div className="py-24">
        <SectionTitle
          title="البحث عن الوحدات والمشاريع"
          description="ابحث بسهولة عن الوحدات والمشاريع المثالية لك، مع ترشيحات دقيقة ومعلومات موثوقة."
          centred
        />
        <br />
        <MainPageSearch />
      </div>
    </section>
  );
}
