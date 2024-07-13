import Link from "next/link";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { LINKS, PROFILES } from "@/lib/constants";
import NavigationLink from "./navigation-link";
import { ToggleTheme } from "./toggle-theme";

const MenuContent = ({
  className,
  navigationLinkOnClick,
}: {
  className?: string;
  navigationLinkOnClick?: () => void;
}) => {
  return (
    <div className={className}>
      <div className="flex w-full flex-col gap-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 p-2 -mx-1.5 -my-1 rounded bg-transparent px-1.5 py-1 transition-colors duration-300 hover:bg-gray-200"
          onClick={navigationLinkOnClick}
        >
          <Avatar className="w-10 h-10">
            <AvatarImage src="/cv_photo.png" alt="Azimet Kerem Ersoy" />
            <AvatarFallback>KE</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="font-semibold tracking-tight">
              Azimet Kerem Ersoy
            </span>
            <span className="text-gray-600">Web Developer</span>
          </div>
        </Link>

        <div className="flex flex-col gap-1">
          {LINKS.map((link, linkIndex) => (
            <NavigationLink
              key={link.href}
              href={link.href}
              label={link.label}
              icon={link.icon}
              shortcutNumber={linkIndex + 1}
              onClick={navigationLinkOnClick}
            />
          ))}
        </div>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col gap-2 text-sm">
        <span className="px-2 text-xs font-medium leading-relaxed text-gray-600">
          Links
        </span>
        <div className="flex flex-col gap-1">
          {Object.values(PROFILES).map((profile) => (
            <NavigationLink
              key={profile.url}
              href={profile.url}
              label={profile.title}
              icon={profile.icon}
              onClick={navigationLinkOnClick}
            />
          ))}
        </div>
      </div>
      {/* <div className="h-full flex items-end">
      <ToggleTheme />
    </div> */}
    </div>
  );
};

export default MenuContent;
