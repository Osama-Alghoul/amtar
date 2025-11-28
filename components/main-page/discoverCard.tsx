import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DiscoverCardProps } from "@/types/discover-card";
import { ArrowUpLeft } from "lucide-react";

export function DiscoverCard({
  title,
  type,
  price,
  image,
  logo,
}: DiscoverCardProps) {
  return (
    <Card className="relative w-[330px] md:w-[400px] h-[500px] overflow-hidden rounded-3xl border-0 p-0 shadow-xl max-w-sm snap-start shrink-0">
      <Image
        src={image}
        alt={title}
        height={1000}
        width={1000}
        className="object-cover w-full h-full"
      />
      <div className="absolute inset-0 bg-linear-to-b from-black/20 via-black/50 to-black/80" />

      {/* Top Info */}
      <div className="absolute top-4 left-4 right-4 flex gap-2 items-center bg-[#F8FAFC1A] backdrop-blur-xs p-3 rounded-xl">
        <div className="h-10 w-10 rounded-xl bg-white/90 flex items-center justify-center p-1">
          <Image src={logo} width={28} height={28} alt="logo" />
        </div>
        <div className="text-white space-y-1">
          <h2>{title}</h2>
          <p className="text-sm font-light text-secoundary-muted">{type}</p>
        </div>
      </div>

      {/* Bottom Info */}
      <div className="absolute bottom-20 right-4 text-white">
        <p className="text-sm opacity-80">أسعار تبدأ من</p>
        <p className="text-xl font-bold flex items-center gap-1">
          {price}
          <span className="text-2xl"><Image src="/icons/ryal.svg" width={20} height={20} alt="logo" /></span>
        </p>
      </div>

      {/* Button */}
      <div className="absolute bottom-4 left-4 right-4">
        <Button className="w-full rounded-full py-5 text-base font-medium bg-white/95 text-black hover:bg-white">
          مشاهدة التفاصيل
          <ArrowUpLeft />
        </Button>
      </div>
    </Card>
  );
}
