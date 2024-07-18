import React from "react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Icons, Project } from "@/lib/data";
import CustomizedLink from "./customized-link";

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <p>{project.title}</p>
          <div className="flex gap-6 text-sm font-normal">
            {project.liveUrl && (
              <CustomizedLink href={project.liveUrl}>live</CustomizedLink>
            )}
            <CustomizedLink href={project.githubUrl}>github</CustomizedLink>
          </div>
        </CardTitle>

        <div className="w-full flex flex-wrap gap-2 pt-2">
          {project.tech_stack.map((tech) => {
            const IconComponent = Icons[tech.icon as keyof typeof Icons];
            return (
              <Badge
                key={tech.id}
                variant="secondary"
                className="flex items-center gap-2"
              >
                {tech.icon &&
                  IconComponent &&
                  React.createElement(IconComponent, {
                    width: 12,
                    height: 12,
                  })}
                {tech.name}
              </Badge>
            );
          })}
        </div>
      </CardHeader>
      <CardContent className="text-sm">{project.description}</CardContent>
    </Card>
  );
};

export default ProjectCard;
