"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Header() {
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) setShowHeader(true);
      else setShowHeader(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-5 left-0 right-0 z-50 py-6 px-10 transition-all duration-500 opacity-100 translate-y-0`}
    >
      <div
        className={`flex justify-between items-center ${
          showHeader
            ? "opacity-100 translate-y-0 bg-[#0F172A]/70 transition-all duration-500 backdrop-blur-xl shadow-lg"
            : "bg-[#F8FAFC1F]"
        } backdrop-blur-md p-4 rounded-xl`}
      >
        <div className="size-10">
          <Image
            src={"/logo.png"}
            width={100}
            height={100}
            alt="logo"
            className="rounded-lg"
          />
        </div>

        <ul className="flex text-white justify-center items-center gap-6">
          <li>الرئيسية</li>
          <li>بحث</li>
          <li>العقارات</li>
          <li>المشاريع</li>
          <li>وسطاء عقاريين</li>
          <li>اطلب عقارك</li>
          <li>من نحن</li>
          <li>تواصل معنا</li>
        </ul>

        <div>
          <Link href={"/auth/login"}>
            <Button className="rounded-full bg-white text-primary hover:text-white">
              تسجيل / دخول
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
