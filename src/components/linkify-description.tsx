import Link from "next/link";
import React from "react";

const LinkifyDescription = ({
  description,
  links,
}: {
  description: string;
  links?: { url: string; text: string }[];
}) => {
  const paragraphs = description.split("\n");

  return (
    <>
      {paragraphs.map((paragraph, pIndex) => {
        const parts = paragraph.split(/{(\d+)}/g);
        return (
          <p key={pIndex} className="text-sm mb-2">
            {parts.map((part, index) => {
              const linkIndex = parseInt(part, 10);
              if (!isNaN(linkIndex) && links?.[linkIndex]) {
                return (
                  <Link
                    key={index}
                    href={links[linkIndex].url}
                    passHref
                    className="text-blue-500 hover:underline"
                    target="_blank"
                  >
                    {links[linkIndex].text}
                  </Link>
                );
              }
              return <React.Fragment key={index}>{part}</React.Fragment>;
            })}
          </p>
        );
      })}
    </>
  );
};

export default LinkifyDescription;
