import { User } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "./avatar";

interface IInfoProps {
  title: string;
  subtitle: string;
  imageUrl: string;
}

export const Info: React.FC<IInfoProps> = ({ subtitle, title, imageUrl }) => {
  return (
    <div className="flex w-full items-center gap-x-1 rounded-lg bg-blue-300 p-2">
      <Avatar>
        <AvatarImage src={imageUrl ?? "/images/avatar.png"} />
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
