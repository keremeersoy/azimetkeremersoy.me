import { Search } from "lucide-react";
import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full space-y-8">
      <Search size={64} />
      <h1 className="text-9xl font-bold">404</h1>
      <p className="text-center">
        The page you&rsquo;re looking for doesn&apos;t exist. If you think this
        is a mistake, please contact me.
      </p>
    </div>
  );
};

export default NotFound;
