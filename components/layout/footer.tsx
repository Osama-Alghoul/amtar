import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-primary text-white lg:px-20 md:px-10 px-5 lg:py-10 md:py-5 py-1 flex flex-col lg:gap-12 md:gap-8 gap-5">
      <div className="flex flex-col md:flex-row gap-10 justify-between flex-wrap">
        <div className="max-w-[400px]">
          <Image
            src={"/logo.png"}
            width={100}
            height={100}
            alt="شعار"
            className="size-24"
          />
          <strong className="text-secoundary-muted font-normal">
            منصة امتار هي الوجهة الأولى للباحثين عن العقارات في المملكة العربية
            السعودية. توفر خدمات مثل تسهيل البيع والشراء والاستثمار العقاري،
            وذلك عبر فريق من المتخصصين لضمان تجربة غنية بجودة وأمان.
          </strong>
        </div>
        <div className="flex-col gap-3 flex">
          <div className="font-medium">مناطق المملكة</div>
          <ul className="text-secoundary-muted [&_li:hover]:text-white [&_li:hover]:cursor-pointer flex flex-col gap-3">
            <li>منطقة الرياض</li>
            <li>منطقة مكة المكرمة</li>
            <li>منطقة المدينة المنورة</li>
            <li>المنطقة الشرقية</li>
            <li>منطقة عسير</li>
            <li>منطقة نجران</li>
            <li>منطقة الباحة</li>
            <li>منطقة الجوف</li>
          </ul>
        </div>
        <ul className="text-secoundary-muted [&_li:hover]:text-white [&_li:hover]:cursor-pointer flex-col gap-3 flex">
          <li>منطقة تبوك</li>
          <li>منطقة حائل</li>
          <li>منطقة الحدود الشمالية</li>
          <li>منطقة جازان</li>
          <li>منطقة القصيم</li>
        </ul>
        <div className="flex flex-col gap-3">
          <div className="font-medium">روابط مهمة</div>
          <ul className="text-secoundary-muted [&_li:hover]:text-white [&_li:hover]:cursor-pointer flex flex-col gap-3">
            <li>من نحن</li>
            <li>سياسة الخصوصية</li>
            <li>الشروط والاحكام</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <ul className="flex gap-6 items-center">
          <a href="">
            <Image src={"/footer/x.svg"} alt="تويتر" height={24} width={24} />
          </a>
          <a href="">
            <Image
              src={"/footer/tiktok.svg"}
              alt="تيك توك"
              height={24}
              width={24}
            />
          </a>
          <a href="">
            <Image
              src={"/footer/youtube.svg"}
              alt="يوتيوب"
              height={24}
              width={24}
            />
          </a>
          <a href="">
            <Image
              src={"/footer/insta.svg"}
              alt="انستقرام"
              height={24}
              width={24}
            />
          </a>
          <a href="">
            <Image
              src={"/footer/snap.svg"}
              alt="سناب شات"
              height={24}
              width={24}
            />
          </a>
          <a href="">
            <Image src={"/footer/wa.svg"} alt="واتساب" height={24} width={24} />
          </a>
        </ul>
        <div className="flex gap-6">
          <a href="https://mt.gov.sa/" target="_blank">
            <Image
              src={"/footer/tourism.png"}
              alt="وزارة السياحة"
              height={100}
              width={100}
              className="w-36"
            />
          </a>
          <a href="https://rega.gov.sa/" target="_blank">
            <Image
              src={"/footer/fal.png"}
              alt="رخصة فال العقارية"
              height={100}
              width={100}
              className="w-36"
            />
          </a>
        </div>
      </div>
      <hr />
      <div className="text-center">
        جميع الحقوق محفوظة لمنصة أمتار العقارية © 2026
      </div>
    </footer>
  );
}
