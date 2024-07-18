import CustomizedLink from "@/components/customized-link";
import TypingAnimation from "@/components/magicui/typing-animation";
import ProjectCard from "@/components/project-card";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Icons, projects_data } from "@/lib/data";
import Link from "next/link";
import React from "react";

const ProjectsPage = () => {
  return (
    <div>
      <TypingAnimation
        className="text-2xl font-bold text-black dark:text-white mb-4"
        text="Projects"
      />
      <div className="flex flex-col gap-4 mb-16">
        {projects_data.map((project, index) => (
          <ProjectCard key={`project_${index}`} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
