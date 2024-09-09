import { env } from "process";
import AboutSection from "~/components/AboutSection";
import Header from "~/components/Header";

const isUnderConstruction = env.NEXT_PUBLIC_UNDER_CONSTRUCTION;

export default function HomePage() {
  if (isUnderConstruction) {
    return (
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-20">
        <p>Hello! How nice to see you. 👋</p>
        <br />
        <p>You&apos;ve found David Kang&apos;s website (yay) 🎊</p>
        <br />
        <p>Unfortunately, the site is currently under construction. 🚧</p>
        <br />
        <p>
          For now you can find my{" "}
          <span className="font-bold text-blue-600">LinkedIn</span>{" "}
          <a
            className="font-medium text-slate-200 hover:text-fuchsia-300 focus-visible:text-fuchsia-300"
            href="https://www.linkedin.com/in/davidhjkang/"
            target="_blank"
          >
            here
          </a>{" "}
          , my <span className="font-bold text-green-500">Github</span>{" "}
          <a
            className="font-medium text-slate-200 hover:text-fuchsia-300 focus-visible:text-fuchsia-300"
            href="https://github.com/kangwritescode/"
            target="_blank"
          >
            here
          </a>{" "}
          , and my Resume{" "}
          <a
            className="font-medium text-slate-200 hover:text-fuchsia-300 focus-visible:text-fuchsia-300"
            href="https://drive.google.com/file/d/1PS9r7Z-8KHibtagydbd6Ay269jnTxEd_/view?usp=sharing"
            target="_blank"
          >
            here
          </a>
          .
        </p>
        <br />
        <p>
          If you&apos;d like to get in touch, feel free to email me at{" "}
          <a
            className="font-medium text-fuchsia-300 hover:text-fuchsia-200"
            href="mailto:davidhjkang@gmail.com"
          >
            davidhjkang@gmail.com
          </a>
          .
        </p>
        <br />
        <p>Thank you for stopping by and please check back soon! 🚀</p>
        <br />
        <p>
          <strong>Best, David</strong>
        </p>
      </div>
    );
  }
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4 ">
        <Header />
        <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
          <AboutSection />
        </main>
      </div>
    </div>
  );
}
