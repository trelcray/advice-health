import { User } from "lucide-react";

import { cn } from "@/lib/utils";

import { Avatar, AvatarFallback, AvatarImage } from "./avatar";

interface IInfoProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  selected?: string;
  id?: string;
}

export const Info: React.FC<IInfoProps> = ({
  subtitle,
  title,
  imageUrl,
  selected,
  id,
}) => {
  return (
    <div
      className={cn(
        "flex w-full cursor-pointer items-center gap-x-1 rounded-lg",
        "bg-blue-300 p-2 transition-colors duration-300 hover:bg-blue-400",
        {
          "bg-emerald-300 hover:bg-emerald-400":
            selected === id && id !== undefined,
        }
      )}
    >
      <Avatar>
        <AvatarImage
          src={imageUrl ?? "/images/avatar.png"}
          alt="avatar image"
        />
        <AvatarFallback>
          <User />
        </AvatarFallback>
      </Avatar>
      <div className="flex flex-col">
        <strong className="text-2xl">{title}</strong>
        <p className="font-semibold text-orange-500">{subtitle}</p>
      </div>
    </div>
  );
};
