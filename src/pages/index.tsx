import Head from "next/head";
import { Subtitle } from "../components/Subtitle";

export default function Home() {
  return (
    <>
      <Head>
        <title>Jefferson Felix</title>
      </Head>
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
    </>
  );
}
