import { Filter, Search } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function MainPageSearch() {
  return (
    <div className="flex flex-col gap-6 justify-center items-center bg-[#FFFFFF80] p-4 rounded-2xl">
      <div className="flex justify-center w-full">
        <Button className="rounded-full flex-1">بحث عن وحدة</Button>
        <Button variant={"ghost"} className="flex-1 rounded-full shadow-sm bg-white">
          بحث عن مشروع
        </Button>
      </div>
      <div className="flex flex-col md:flex-row gap-4 w-full md:w-1/2">
        {/* <Input
          placeholder="رقم الوحدة"
          type="number"
          className="rounded-full"
        /> */}
        <Input placeholder="اسم الوحدة" className="rounded-full w-full" />
        {/* <Select>
          <SelectTrigger className="w-full rounded-full">
            <SelectValue placeholder="اختر المدينة" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>مدن</SelectLabel>
              <SelectItem value="apple">جدة</SelectItem>
              <SelectItem value="banana">الرياض</SelectItem>
              <SelectItem value="blueberry">مكة</SelectItem>
              <SelectItem value="grapes">المدينة المنورة</SelectItem>
              <SelectItem value="pineapple">الطائف</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-full rounded-full">
            <SelectValue placeholder="نوع الوحدة" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>انواع الوحدة</SelectLabel>
              <SelectItem value="apple">فيلا</SelectItem>
              <SelectItem value="banana">شقة</SelectItem>
              <SelectItem value="blueberry">بيت</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select> */}
        <div className="flex gap-4">
          <Button className="rounded-full bg-primary-muted text-primary hover:text-white">
            <Filter />
          </Button>
          <Button className="flex px-5 rounded-full md:flex-none flex-1 items-center w-[200px] bg-primary-muted text-primary hover:text-white">
            <Search />
              بحث
          </Button>
        </div>
      </div>
    </div>
  );
}
