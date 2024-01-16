import React from "react";

interface Props {
  ariaLabel?: string;
  text: React.ReactNode;
  href: string;
}

function AnchorText({ ariaLabel, href, text }: Props) {
  return (
    <a
      className="font-medium text-slate-200 hover:text-fuchsia-300 focus-visible:text-fuchsia-300"
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={ariaLabel}
    >
      {text}
    </a>
  );
}

export default AnchorText;
