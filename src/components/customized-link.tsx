import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const CustomizedLink = ({
  className,
  href,
  children,
  ...props
}: {
  className?: string;
  href: string;
  children: React.ReactNode;
  [key: string]: any;
}) => {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn("text-blue-500 hover:underline", className)}
      {...props}
    >
      {children}
    </Link>
  );
};

export default CustomizedLink;
