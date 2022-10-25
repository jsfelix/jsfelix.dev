import Image from "next/image";

export function Footer() {
  return (
    <footer className="absolute bottom-0 w-full min-h-10 p-4 bg-slate-500 dark:bg-slate-700">
      <div className="max-w-6xl m-auto flex gap-4">
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
    </footer>
  );
}
