import { Menu, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarPortal,
  MenubarSeparator,
  MenubarTrigger,
} from "../ui/menubar";

interface IHeaderProps {}

export const Header: React.FC<IHeaderProps> = ({}) => {
  return (
    <header
      className="fixed top-0 z-50 flex h-20 w-full items-center justify-between
      bg-blue-200/60 px-2 text-blue-900 backdrop-blur-xl sm:px-6"
    >
      <Image
        src="/images/logo.svg"
        alt="logo adviceHealth"
        width={249}
        height={55}
      />
      <div className="hidden items-center justify-center gap-x-6 md:flex">
        <nav className="flex gap-x-4 text-lg font-medium">
          <Link
            href="/"
            className="transition-colors duration-300 hover:text-blue-500"
            passHref
          >
            Dashboard
          </Link>
          <Link
            href="/scheduling"
            className="transition-colors duration-300 hover:text-blue-500"
            passHref
          >
            Agendamentos
          </Link>
          <Link
            href="/appointment"
            className="transition-colors duration-300 hover:text-blue-500"
            passHref
          >
            Consultas
          </Link>
        </nav>
        <div className="flex flex-col items-center justify-center">
          <Avatar>
            <AvatarImage
              src={
                "data:image/jpeg;base64,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" ??
                "/images/avatar.png"
              }
            />
            <AvatarFallback>
              <User />
            </AvatarFallback>
          </Avatar>
          <span>Mauricio</span>
        </div>
      </div>
      <Menubar className="md:hidden">
        <MenubarMenu>
          <MenubarTrigger>
            <Menu />
          </MenubarTrigger>
          <MenubarPortal>
            <MenubarContent className="text-blue-900">
              <Link href="/" passHref>
                <MenubarItem className="cursor-pointer justify-center">
                  Dashboard
                </MenubarItem>
              </Link>
              <Link href="/scheduling" passHref>
                <MenubarItem className="cursor-pointer justify-center">
                  Agendamentos
                </MenubarItem>
              </Link>
              <Link href="/appointment" passHref>
                <MenubarItem className="cursor-pointer justify-center">
                  Consultas
                </MenubarItem>
              </Link>
              <MenubarSeparator />
              <MenubarItem className="cursor-pointer justify-center">
                <div className="flex flex-col items-center justify-center">
                  <Avatar>
                    <AvatarImage
                      src={
                        "data:image/jpeg;base64,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" ??
                        "/images/avatar.png"
                      }
                    />
                    <AvatarFallback>
                      <User />
                    </AvatarFallback>
                  </Avatar>
                  <span>Mauricio</span>
                </div>
              </MenubarItem>
            </MenubarContent>
          </MenubarPortal>
        </MenubarMenu>
      </Menubar>
    </header>
  );
};
