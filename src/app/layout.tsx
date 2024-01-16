import "~/styles/globals.css";

import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin-ext"],
  variable: "--font-sans",
});

export const metadata = {
  title: "David Kang",
  description: "SWE at Aetna Health",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${poppins.variable} bg-zinc-900 leading-relaxed text-zinc-300 antialiased selection:bg-fuchsia-300 selection:text-fuchsia-900`}
      >
        {children}
      </body>
    </html>
  );
}
