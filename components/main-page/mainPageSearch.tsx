import { Button } from "../ui/button";

export default function MainPageSearch() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex justify-center w-full">
        <Button className="rounded-full flex-1">بحث عن وحدة</Button>
        <Button variant={"link"} className="flex-1">بحث عن مشروع</Button>
      </div>
      <div>
      </div>
    </div>
  );
}
