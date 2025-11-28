import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Search, ChevronDown } from "lucide-react";

export function HeaderDropdownMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="p-0">
        <ChevronDown className="size-7 text-white" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="start">
        <DropdownMenuLabel>القائمة</DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuItem>الرئيسية</DropdownMenuItem>
          <DropdownMenuItem>
            بحث
            <DropdownMenuShortcut>
              <Search />
            </DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>العقارات</DropdownMenuItem>
          <DropdownMenuItem>المشاريع</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuItem>وسطاء عقاريين</DropdownMenuItem>
        <DropdownMenuItem>اطلب عقارك</DropdownMenuItem>
        <DropdownMenuItem>من نحن</DropdownMenuItem>
        <DropdownMenuItem>تواصل معنا</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
