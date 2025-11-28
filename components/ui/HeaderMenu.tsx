import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, Search } from "lucide-react";

export function HeaderDropdownMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="block lg:hidden">
        <Button variant="outline">
          <Menu />
        </Button>
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
        <DropdownMenuItem>تواصل معنت</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>تسجيل الدخول</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
