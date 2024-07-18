import OrbitingCircles from "@/components/magicui/orbiting-circles";
import { Icons } from "@/lib/data";

export function OrbitCircle() {
  return (
    <div className="relative flex h-[450px] w-full flex-col items-center justify-center overflow-hidden">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-500 bg-clip-text text-center text-6xl font-semibold leading-none text-transparent dark:from-white dark:to-black">
        Techs
      </span>

      {/* first orbit */}
      <OrbitingCircles
        className="size-[30px] border-none bg-transparent"
        duration={20}
        delay={20}
        radius={60}
      >
        <Icons.react />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[30px] border-none bg-transparent"
        duration={20}
        delay={10}
        radius={60}
      >
        <Icons.gitHub />
      </OrbitingCircles>

      {/* seconds orbit */}
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={120}
        duration={20}
        delay={10}
        reverse
      >
        <Icons.tailwindcss />
      </OrbitingCircles>

      <OrbitingCircles
        className="size-[40px] border-none bg-transparent"
        radius={120}
        duration={20}
        delay={14}
        reverse
      >
        <Icons.redux />
      </OrbitingCircles>

      <OrbitingCircles
        className="size-[40px] border-none bg-transparent"
        radius={120}
        duration={20}
        delay={18}
        reverse
      >
        <Icons.typescript />
      </OrbitingCircles>

      <OrbitingCircles
        className="size-[40px] border-none bg-transparent"
        radius={120}
        duration={20}
        delay={22}
        reverse
      >
        <Icons.lucideIcons />
      </OrbitingCircles>

      <OrbitingCircles
        className="size-[40px] border-none bg-transparent"
        radius={120}
        duration={20}
        delay={26}
        reverse
      >
        <Icons.trpc />
      </OrbitingCircles>

      {/* third orbit */}
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={180}
        duration={80}
        delay={15}
      >
        <Icons.nextjs />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={180}
        duration={80}
        delay={25}
      >
        <Icons.mysql />
      </OrbitingCircles>

      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={180}
        duration={80}
        delay={45}
      >
        <Icons.prisma />
      </OrbitingCircles>

      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={180}
        duration={80}
        delay={55}
      >
        <Icons.firebase />
      </OrbitingCircles>

      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={180}
        duration={80}
        delay={75}
      >
        <Icons.postgresql />
      </OrbitingCircles>
    </div>
  );
}
