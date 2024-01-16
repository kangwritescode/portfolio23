import React from "react";

interface Props {
  id: string;
  ariaLabel?: string;
  header: string;
  children: React.ReactNode;
}

function Section({ id, ariaLabel, header, children }: Props) {
  return (
    <section
      id={id}
      className="mb-16 scroll-mt-16 text-zinc-400 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label={ariaLabel}
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-zinc-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-200 lg:sr-only">
          {header}
        </h2>
      </div>
      {children}
    </section>
  );
}

export default Section;
