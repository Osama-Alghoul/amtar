import { Activity } from "react";
import { ArrowUpLeft } from "lucide-react";
import { Button } from "../ui/button";
import { type SectionTitleProps } from "@/types/section-title";
import Link from "next/link";

export default function SectionTitle({
  title,
  description,
  more = false,
  centred = false,
  href,
}: SectionTitleProps) {
  return (
    <div
      className={`flex items-center shrink-0 md:shrink flex-wrap ${
        more ? "justify-between" : "justify-center"
      }`}
    >
      <div className={`flex flex-col gap-3 ${centred ? "items-center" : ""}`}>
        <h2 className="lg:text-4xl md:text-3xl text-2xl font-bold text-primary">
          {title}
        </h2>
        <p className="text-muted-foreground">{description}</p>
      </div>
      <Activity mode={more ? "visible" : "hidden"}>
        <Link href={href || "/#"} className="pt-3 md:pt-0">
          <Button className="bg-primary-muted text-primary text-xs md:text-base hover:text-white rounded-full">
            استكشف المزيد <ArrowUpLeft />
          </Button>
        </Link>{" "}
      </Activity>
    </div>
  );
}
