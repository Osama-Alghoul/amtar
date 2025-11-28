import Image from "next/image";
import Link from "next/link";
import { HeaderDropdownMenu } from "../ui/HeaderMenu";
import User from "./user";

export default function Header() {

  return (
    <header
      className={`top-5 left-0 right-0 z-50 py-6 px-2 md:px-6 transition-all duration-500 opacity-100 translate-y-0`}
    >
      <div
        className={`flex justify-between items-center bg-[#F8FAFC1F]  backdrop-blur-md p-4 rounded-xl`}
      >
        <Link href={"/"} className="size-10">
          <Image
            src={"/logo.png"}
            width={100}
            height={100}
            alt="logo"
            className="rounded-lg"
          />
        </Link>

        <ul className="text-white justify-center items-center gap-6 hidden lg:flex">
          <li>الرئيسية</li>
          <li>بحث</li>
          <li>العقارات</li>
          <li>المشاريع</li>
          <li>وسطاء عقاريين</li>
          <li>اطلب عقارك</li>
          <li>من نحن</li>
          <li>تواصل معنا</li>
        </ul>

        <div className="flex items-center gap-1">
          {/* <Link href={"/auth/login"}>
            <Button className="rounded-full bg-white text-primary hover:text-white">
              تسجيل / دخول
            </Button>
          </Link> */}
          <User />
          <HeaderDropdownMenu />
        </div>
      </div>
    </header>
  );
}
