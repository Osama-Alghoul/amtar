import { Activity } from "react";
import { ArrowUpLeft } from "lucide-react";
import { Button } from "../ui/button";
import { type SectionTitleProps } from "@/types/section-title";
import Link from "next/link";

export default function SectionTitle({
  title,
  description,
  more,
  centred = false,
  href,
}: SectionTitleProps) {
  return (
    <div
      className={`flex items-center ${
        more ? "justify-between" : "justify-center"
      }`}
    >
      <div className={`flex flex-col gap-3 ${centred ? "items-center" : ""}`}>
        <h2 className="text-4xl font-bold text-primary">{title}</h2>
        <p className="text-muted-foreground">{description}</p>
      </div>
      <Activity mode={more ? "visible" : "hidden"}>
        <Link href={href || "/#"}>
          <Button className="bg-primary-muted text-primary hover:text-white rounded-full">
            استكشف المزيد <ArrowUpLeft />
          </Button>
        </Link>{" "}
      </Activity>
    </div>
  );
}
