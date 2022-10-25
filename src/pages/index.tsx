import Image from "next/image";
import { Subtitle } from "../components/Subtitle";
import { Title } from "../components/Title";

export default function Home() {
  return (
    <div className="gap-2">
      <Title>Jefferson Felix</Title>
      <Subtitle>Hello, World!</Subtitle>
      <ul className="p-4 flex flex-col gap-2">
        <li> - Javascript/Typescript engineer</li>
        <li> - Father of a boy 👶 and pets 🐶 😺 </li>
        <li> - Aviation enthusiast </li>
        <li> - Fan of TV shows 📺 and movies 🎬 (and popcorn! 🍿)</li>
      </ul>
      <hr />
      <Subtitle>Dev skills</Subtitle>
      <ul className="p-4 flex flex-col gap-2">
        <li> - Languages: HTML/CSS/Javascript/ECMAScript/TypeScript</li>
        <li> - Backend: Node.js (Express.js and NestJS)</li>
        <li> - Frontend: React and Next.js</li>
        <li> - Mobile: React Native</li>
        <li> - ORM: Sequelize, TypeORM, Prisma, Mongoose, Dynamoose</li>
        <li> - CMS: Strapi, Contentful, Prismic, Ghost</li>
        <li> - DB: PostgreSQL, MySQL, Oracle, MongoDB, DynamoDB, Redis</li>
        <li> - Cloud: AWS</li>
        <li> - CI/CI: Docker, CircleCI, kubernetes, Jenkins, Terraform</li>
      </ul>
      <div className="mt-4 p-4 flex gap-4 bg-slate-500 dark:bg-slate-700">
        <a href="https://github.com/jsfelix">
          <Image
            src="/assets/images/github.png"
            width={32}
            height={32}
            alt="Github logo"
          ></Image>
        </a>
        <a href="https://linkedin.com/in/jsfelix">
          <Image
            src="/assets/images/linkedin.png"
            width={32}
            height={32}
            alt="linkedin logo"
          ></Image>
        </a>
        <a href="https://www.instagram.com/jeffersonsfelix">
          <Image
            src="/assets/images/instagram.png"
            width={32}
            height={32}
            alt="instagram logo"
          ></Image>
        </a>
        <a href="https://twitter.com/felixjefferson">
          <Image
            src="/assets/images/twitter.png"
            width={32}
            height={32}
            alt="Twitter logo"
          ></Image>
        </a>
      </div>
    </div>
  );
}
