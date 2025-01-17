"use client";

import { cn } from "@/lib/utils";
import { ArrowUpRightIcon, AtSignIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavigationLink = ({
  href,
  label,
  icon,
  shortcutNumber,
  onClick,
}: {
  href: string;
  label: string;
  icon?: React.ReactElement;
  shortcutNumber?: number;
  onClick?: () => void;
}) => {
  const pathname = usePathname();
  const iconCmp = icon ?? <AtSignIcon size={16} />;

  const isInternal = href.startsWith("/");
  if (!isInternal) {
    return (
      <a
        key={href}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-between gap-2 rounded-lg p-2 hover:bg-gray-200"
        onClick={onClick}
      >
        <span className="inline-flex items-center gap-2 font-medium">
          {iconCmp} {label}
        </span>
        <ArrowUpRightIcon size={16} />
      </a>
    );
  }

  let isActive = false;
  if (pathname?.length > 0) {
    const splittedPathname = pathname.split("/");
    const currentPathname = splittedPathname[1] ?? "";
    isActive = currentPathname === href.split("/")[1];
  }

  return (
    <Link
      key={href}
      href={href}
      className={cn(
        "group flex items-center justify-between rounded-lg p-2",
        isActive ? "bg-black text-white" : "hover:bg-gray-200"
      )}
      onClick={onClick}
    >
      <span className="flex items-center gap-2">
        {iconCmp}
        <span className={cn("font-medium", isActive && "text-white")}>
          {label}
        </span>
      </span>
      {shortcutNumber && (
        <span
          className={cn(
            "hidden h-5 w-5 place-content-center rounded border border-gray-200 bg-gray-100 text-xs font-medium text-gray-500 transition-colors duration-200 group-hover:border-gray-300 lg:grid",
            isActive &&
              "border-gray-600 bg-gray-700 text-gray-200 group-hover:border-gray-600"
          )}
          title={`Shortcut key: ${shortcutNumber}`}
        >
          {shortcutNumber}
        </span>
      )}
    </Link>
  );
};

export default NavigationLink;
