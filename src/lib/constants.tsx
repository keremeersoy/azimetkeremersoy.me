import {
  Folders,
  Github,
  Library,
  Linkedin,
  Mail,
  Network,
  Shell,
} from "lucide-react";
import { ReactElement } from "react";

type Link = {
  href: string;
  label: string;
  icon?: ReactElement;
};

type Profile = {
  title: string;
  url: string;
  icon?: ReactElement;
};

export const PROFILES: Record<string, Profile> = {
  github: {
    title: "GitHub",
    url: "https://github.com/keremeersoy",
    icon: <Github size={16} />,
  },
  linkedin: {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/azimetkeremersoy",
    icon: <Linkedin size={16} />,
  },
  medium: {
    title: "Medium",
    url: "https://medium.com/@azimetkeremersoy",
  },
  mail: {
    title: "Mail",
    url: "mailto:azimetkeremersoy@gmail.com",
    icon: <Mail size={16} />,
  },
};

export const LINKS: Link[] = [
  {
    href: "/",
    label: "Home",
    icon: <Shell size={16} />,
  },
  { href: "/experience", label: "Experience", icon: <Network size={16} /> },
  { href: "/projects", label: "Projects", icon: <Folders size={16} /> },
  { href: "/education", label: "Education", icon: <Library size={16} /> },
];
