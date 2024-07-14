import TypingAnimation from "@/components/magicui/typing-animation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="flex items-center gap-8">
        <Avatar className="w-40 h-40 border-2">
          <AvatarImage src="/cv_photo.png" alt="Azimet Kerem Ersoy" />
          <AvatarFallback>KE</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <span className="font-semibold tracking-tight text-4xl">
            Azimet Kerem Ersoy
          </span>
          <span className="text-gray-600 text-xl">Web Developer</span>
        </div>
      </div>

      <hr className="my-8" />

      <div className="flex flex-col gap-4">
        {/* <h2 className="text-2xl font-semibold">About Me</h2> */}
        <TypingAnimation
          className="text-2xl font-bold text-black dark:text-white"
          text="About Me"
        />

        <p>
          Hello! I am Azimet Kerem Ersoy, a 21-year-old web developer and a
          fourth-year student at Kırıkkale University Computer Engineering. I
          have been living in Ankara, which I love very much, for the last 21
          years. I live in Kırıkkale during my university years, but I often
          return to Ankara, balancing my academic studies with the vibrant life
          of the capital.
        </p>
        <p>
          I find immense joy in exploring new places and gaining fresh
          experiences. My curiosity drives me to spend countless hours in front
          of my computer, delving into research and uncovering new technologies
          and methodologies. This passion for continuous learning has been a
          cornerstone of my personal and professional growth.
        </p>
        <p>
          Starting my professional journey early during my college years has
          been incredibly rewarding. Working while studying taught me invaluable
          lessons in time management, project management, team communication and
          industry knowledge. These experiences have shaped me into a
          well-rounded person ready to tackle complex challenges with innovative
          solutions.
        </p>
        <p>
          As a full-stack web developer, I am eager to leverage the latest
          technologies in my projects. My journey began with an internship at
          Pepteam in Ankara, where I quickly advanced to become the sole web
          developer. One of my significant achievements at Pepteam was
          integrating our mobile application with the{" "}
          <Link
            href="https://www.pepteam.io"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            web
          </Link>
          , where I tackled and resolved complex challenges using technologies
          such as{" "}
          <Link
            href="https://nextjs.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Next.js
          </Link>
          ,{" "}
          <Link
            href="https://firebase.google.com/products/auth"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Firebase Authentication
          </Link>
          ,{" "}
          <Link
            href="https://firebase.google.com/products/firestore"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Firestore
          </Link>
          ,{" "}
          <Link
            href="https://firebase.google.com/products/storage"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Firebase Storage
          </Link>
          ,{" "}
          <Link
            href="https://mui.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Material UI
          </Link>
          ,{" "}
          <Link
            href="https://www.paddle.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Paddle
          </Link>{" "}
          and{" "}
          <Link
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Redux Toolkit
          </Link>
          .
        </p>
        <p>
          I have also worked on a full-stack project with SetCrews, where I
          brought project owner Sacit Altun Bey&rsquo;s vision to life. This
          project, targeting end users, is currently live and actively used. The
          technologies I employed in this project include{" "}
          <Link
            href="https://nextjs.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Next.js
          </Link>
          ,{" "}
          <Link
            href="https://trpc.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            tRPC
          </Link>
          ,{" "}
          <Link
            href="https://www.typescriptlang.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            TypeScript
          </Link>
          ,{" "}
          <Link
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Tailwind CSS
          </Link>
          ,{" "}
          <Link
            href="https://www.mysql.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            MySQL
          </Link>
          ,{" "}
          <Link
            href="https://www.prisma.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Prisma ORM
          </Link>
          ,{" "}
          <Link
            href="https://www.iyzico.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            iyzico
          </Link>{" "}
          and{" "}
          <Link
            href="https://next-auth.js.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            NextAuth
          </Link>
          .
        </p>
        <p>
          In addition to my professional endeavors, I am committed to volunteer
          work and continuous learning. As the Web Team Leader at GDSC KKU, a{" "}
          <Link
            href="https://www.linkedin.com/company/gdsc-kku/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Google Developer Student Club at Kırıkkale University
          </Link>
          , I lead a team of developers, fostering a collaborative and
          innovative environment. I also participated in{" "}
          <Link
            href="https://yetkingencler.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            YetGen
          </Link>
          , a 12-week program led by Prof. Dr. Erhan Erkut, which provided me
          with a solid foundation in algorithm development, teamwork, and social
          innovation.
        </p>
        <p>
          Outside of my technical pursuits, I cherish the time spent exploring
          new places and gaining diverse experiences. This blend of technical
          expertise and a zest for life allows me to approach problems with a
          fresh perspective and a well-rounded approach.
        </p>
        <p>
          I am excited about the future and the opportunities that lie ahead. I
          am eager to continue learning, growing, and contributing to projects
          that make a difference in the world. I am always open to new
          experiences and collaborations, so feel free to reach out to me if you
          have a project in mind or just want to chat!
        </p>
      </div>
    </main>
  );
}
