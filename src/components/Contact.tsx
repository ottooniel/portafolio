import { contact, social } from "@/content/site";
import ContactForm from "./ContactForm";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import TextLink from "./TextLink";

export default function Contact() {
  return (
    <Section id="contacto" className="md:pb-24">
      <div className="flex flex-col gap-12 md:gap-16 lg:flex-row lg:gap-24">
        <div className="min-w-0 lg:flex-[1_1_440px]">
          <SectionHeader
            id="contacto-title"
            className="mb-[18px] max-w-[520px] md:mb-6"
            titleClassName="max-md:text-[34px] max-md:leading-[1.08] md:leading-[1.05]"
            {...contact.header}
          />
          <p className="text-base leading-[1.6] md:text-lg md:leading-[1.65]">{contact.text}</p>
          <p className="mt-7 md:mt-10">
            <a
              href={`mailto:${social.email}`}
              className="inline-block border-b border-text/35 pb-[5px] font-display text-[21px] font-medium text-text transition-colors duration-200 hover:border-accent motion-reduce:transition-none md:pb-1.5 md:text-[26px]"
            >
              {social.email}
            </a>
          </p>
          <ul className="mt-6 flex gap-6 md:mt-8 md:gap-7">
            <li>
              <TextLink href={social.github} external>
                GitHub
              </TextLink>
            </li>
            <li>
              <TextLink href={social.linkedin} external>
                LinkedIn
              </TextLink>
            </li>
          </ul>
        </div>
        <div className="min-w-0 lg:flex-[1_1_480px] lg:pt-2">
          <ContactForm copy={contact.form} mailto={social.email} />
        </div>
      </div>
    </Section>
  );
}
