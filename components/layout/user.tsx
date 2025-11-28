import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Heart, Bell, MessageCircle } from "lucide-react";

export default function User() {
  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-1">
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
  );
}
