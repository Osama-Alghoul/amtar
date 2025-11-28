import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DiscoverCard } from "./discoverCard";
import { mockData, mockData2, mockData3, mockData4 } from "@/mockData/Discover";

export function DiscoverSlides() {
  return (
    <div className="flex w-full flex-col gap-6 py-9 lg:pr-20 md:pr-10 pr-5">
      <Tabs defaultValue="Riyadh" dir="rtl">
        <TabsList className="bg-white rounded-none">
          <TabsTrigger
            value="Riyadh"
            className="rounded-none px-4 py-2 text-gray-600
      data-[state=active]:text-black
      data-[state=active]:border-b-2
      data-[state=active]:border-b-black
      border-b-2 border-transparent text-xs md:text-sm"
          >
            الرياض
          </TabsTrigger>
          <TabsTrigger
            value="Macca"
            className="rounded-none px-4 py-2 text-gray-600
      data-[state=active]:text-black
      data-[state=active]:border-b-2
      data-[state=active]:border-b-black
      border-b-2 border-transparent text-xs md:text-sm"
          >
            مكة المكرمة
          </TabsTrigger>
          <TabsTrigger
            value="Dammam"
            className="rounded-none px-4 py-2 text-gray-600
      data-[state=active]:text-black
      data-[state=active]:border-b-2
      data-[state=active]:border-b-black
      border-b-2 border-transparent text-xs md:text-sm"
          >
            الدمام
          </TabsTrigger>
          <TabsTrigger
            value="Jeddah"
            className="rounded-none px-4 py-2 text-gray-600
      data-[state=active]:text-black
      data-[state=active]:border-b-2
      data-[state=active]:border-b-black
      border-b-2 border-transparent text-xs md:text-sm"
          >
            جدة
          </TabsTrigger>
          <TabsTrigger
            value="Jizan"
            className="rounded-none px-4 py-2 text-gray-600
      data-[state=active]:text-black
      data-[state=active]:border-b-2
      data-[state=active]:border-b-black
      border-b-2 border-transparent text-xs md:text-sm"
          >
            جيزان
          </TabsTrigger>
        </TabsList>
        <TabsContent value="Riyadh">
          <div className="flex overflow-x-scroll snap-x snap-mandatory gap-5">
            {mockData.map((card, index) => (
              <DiscoverCard key={index} {...card} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="Macca">
          <div className="flex overflow-x-scroll snap-x snap-mandatory gap-5">
            {mockData2.map((card, index) => (
              <DiscoverCard key={index} {...card} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="Dammam">
          <div className="flex overflow-x-scroll snap-x snap-mandatory gap-5">
            {mockData3.map((card, index) => (
              <DiscoverCard key={index} {...card} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="Jeddah">
          <div className="flex overflow-x-scroll snap-x snap-mandatory gap-5">
            {mockData4.map((card, index) => (
              <DiscoverCard key={index} {...card} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="Jizan">
          <div className="flex overflow-x-scroll snap-x snap-mandatory gap-5">
            {mockData.map((card, index) => (
              <DiscoverCard key={index} {...card} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
