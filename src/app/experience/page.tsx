import LinkifyDescription from "@/components/linkify-description";
import TypingAnimation from "@/components/magicui/typing-animation";
import { OrbitCircle } from "@/components/orbit-circle";
import { timelineData } from "@/lib/data";
import { PlusIcon } from "lucide-react";
import Image from "next/image";
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

        <div className="flex flex-col items-stretch gap-12">
          {timelineData.map((item, itemIndex) => (
            <div
              key={`data_${itemIndex}`}
              className="flex flex-col items-baseline gap-6 md:flex-row md:gap-12"
            >
              <div className="flex items-center">
                <h2 className="font-semibold text-2xl">{item.year}</h2>
                <hr className="my-0 ml-4 flex-1 border-dashed border-gray-200" />
              </div>
              <section>
                {item.logs.map((log, logIndex) => (
                  <div
                    key={`data_${itemIndex}_log_${logIndex}`}
                    className="relative flex pb-8 last:pb-0"
                  >
                    {logIndex !== item.logs.length - 1 && (
                      <div className="absolute inset-0 flex w-6 items-center justify-center">
                        <div className="pointer-events-none h-full w-px border-l border-gray-200"></div>
                      </div>
                    )}
                    <div className="z-0 flex size-6 shrink-0 items-center justify-center rounded-full bg-black align-middle text-white">
                      <PlusIcon size={16} />
                    </div>
                    <div className="grow pl-8">
                      <div className="word-break-word flex flex-col">
                        <span className="font-semibold tracking-tight">
                          {log.title}
                        </span>
                        {log?.description && (
                          <LinkifyDescription
                            description={log.description}
                            links={log.links}
                          />
                        )}
                        {log?.image?.url && (
                          <div className="mt-2.5 overflow-hidden rounded-xl bg-white">
                            <Image
                              src={log?.image?.url}
                              alt={log?.image?.title || log?.image?.description}
                              width={log?.image?.width}
                              height={log?.image?.height}
                              loading={logIndex < 1 ? "eager" : "lazy"}
                              className="animate-reveal"
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </section>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;
