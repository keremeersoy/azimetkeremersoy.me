import TypingAnimation from "@/components/magicui/typing-animation";
import { OrbitCircle } from "@/components/orbit-circle";
import React from "react";

const ExperiencePage = () => {
  return (
    <div>
      <TypingAnimation
        className="text-2xl font-bold text-black dark:text-white"
        text="Experience"
      />
      <div>
        <OrbitCircle />
      </div>
    </div>
  );
};

export default ExperiencePage;
