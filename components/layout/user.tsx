import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Heart, Bell, MessageCircle, PlusCircle } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

export default function User() {
  return (
    <div className="flex md:gap-2 gap-1 items-center">
      <div className="md:flex gap-1 hidden">
        <div className="p-2 bg-primary text-white rounded-full">
          <Heart className="size-5" />
        </div>
        <div className="p-2 bg-primary text-white rounded-full">
          <Bell className="size-5" />
        </div>
        <div className="p-2 bg-primary text-white rounded-full">
          <MessageCircle className="size-5" />
        </div>
      </div>
      <PlusCircle className="text-white size-9" />
      <DropdownMenu dir="rtl">
        <DropdownMenuTrigger asChild>
          <div className="flex items-center gap-2">
            <Avatar className="size-10">
              <AvatarImage src={"/header/avatar.jpg"} alt="You" />
              <AvatarFallback>You</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="md:text-lg text-sm leading-none tracking-tight text-white">
                قاسم الديواني
              </h2>
              <p className="text-[10px] text-white">مسوق عقارات</p>
            </div>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-40">
          <DropdownMenuLabel>حسابي</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Heart className="mr-2 h-4 w-4" />
            المفضلة
          </DropdownMenuItem>
          <DropdownMenuItem>
            <MessageCircle className="mr-2 h-4 w-4" />
            الرسائل
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Bell className="mr-2 h-4 w-4" />
            الاشعارات
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
