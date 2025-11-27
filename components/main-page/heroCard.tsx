import { Bath, Maximize2 } from "lucide-react";
import Image from "next/image";
import {type HeroCardProps} from "@/types/hero-card";

export default function HeroCard({
  title,
  description,
  beach,
  pool,
  area,
  src,
}: HeroCardProps) {
  return (
    <div className="flex rounded-2xl p-3 gap-2 bg-[#F8FAFC1F] backdrop-blur-md">
      <div className="size-28 shrink-0">
        <Image src={src} className="size-28" alt={title} width={300} height={300} />
      </div>
      <div className="flex flex-col gap-2">
        <div className="font-medium text-white">{title}</div>
        <div className="text-sm text-secoundary-muted">{description}</div>
        <div className="text-secoundary-muted text-sm flex gap-6">
          <div className="flex items-center gap-2">
            {area} <Maximize2 />
          </div>
          <div className="flex items-center gap-2">
            {pool} <Bath />
          </div>
          <div className="flex items-center gap-2">
            {beach}
            <Image
              src={"/icons/terrace.svg"}
              alt="icon"
              width={20}
              height={20}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
