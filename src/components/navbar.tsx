"use client";

import React, { useState } from "react";
import { Drawer, DrawerContent, DrawerTrigger } from "./ui/drawer";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import MenuContent from "./menu-content";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { DialogTitle } from "@radix-ui/react-dialog"; // DialogTitle'ı import ediyoruz

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => setIsOpen(!isOpen);
  const closeDrawer = () => setIsOpen(false);

  return (
    <div className="sticky inset-x-0 top-0 z-10 mx-auto flex h-12 w-full shrink-0 items-center overflow-hidden border-b bg-white text-sm font-medium lg:hidden">
      <div className="flex justify-between w-full max-w-5xl mx-auto px-4 items-center">
        <Link href="/" className="inline-flex items-center gap-2 p-2 text-xs">
          <Avatar className="w-8 h-8">
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

        <Drawer open={isOpen} onOpenChange={setIsOpen}>
          <DrawerTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              title="Toggle drawer"
              onClick={toggleDrawer}
            >
              <Menu size={16} />
            </Button>
          </DrawerTrigger>
          <DrawerContent className="h-4/5">
            <DialogTitle className="sr-only">Menu</DialogTitle>
            <div className="overflow-y-auto p-4">
              <MenuContent
                className="flex w-full flex-col text-sm"
                navigationLinkOnClick={closeDrawer}
              />
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
};

export default Navbar;
