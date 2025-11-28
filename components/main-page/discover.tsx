import SectionTitle from "../common/sectionTitle";
import { DiscoverSlides } from "./discoverSlids";

export default function Discover() {
  return (
    <>
      <section className="lg:px-20 md:px-10 px-5 pt-10">
        <SectionTitle
          title="استكشف المشاريع لاكثر مشاهدة"
          description="اكتشف كلّ ما هو جديد حول المشاريع لتحظى بأفضل فرص الاستثمار."
          more
          href={'/projects'}
        />
      </section>
      <DiscoverSlides />
    </>
  );
}
