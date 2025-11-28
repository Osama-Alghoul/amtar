import SectionTitle from "@/components/common/sectionTitle";
import Header from "@/components/layout/header";

export default function Projects() {
  return (
    <div>
      <div style={{ backgroundImage: "url('/main-page/hero.png')" }} className="bg-cover md:rounded-3xl rounded-none md:m-5 m-0">
        <Header />
      </div>
      <br />
      <SectionTitle title="صفحة المشاريع" description="" />
      <br />
    </div>
  );
}
