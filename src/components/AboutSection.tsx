import React from "react";
import Section from "./Section";
import AnchorText from "./AnchorText";

function AboutSection() {
  return (
    <Section id="about" header="about">
      <p className="mb-4 leading-7">
        My professional SWE journey began at{" "}
        <AnchorText href="https://www.gofundme.com" text="GoFundMe" />, where I
        was a key contributor in the Create Team from '20 to '22. Since, I've
        ventured into contracting roles, collaborating with start-ups such as{" "}
        <AnchorText href="https://www.science.xyz" text="Science" /> and{" "}
        <AnchorText href="https://www.moonhub.ai/" text="Moonhub" />. I
        currently build web experiences at{" "}
        <AnchorText href="https://www.aetna.com" text="Aetna Health" />.
      </p>
      <p className="mb-4 leading-7">
        I'm a product-minded engineer, proficient in modern front-end
        technologies, with an expertise in FE performance optimization and data
        management, API integration, and accessibility.
      </p>
      <p className="mb-4 leading-7">
        Beyond the screen, I'm a fan of pickleball, skateboarding, and spending
        time with loved ones.
      </p>
      <p className="mb-4 leading-7">
        Ready to bring your ideas to life. Let's build something exceptional
        together.
      </p>
    </Section>
  );
}

export default AboutSection;
