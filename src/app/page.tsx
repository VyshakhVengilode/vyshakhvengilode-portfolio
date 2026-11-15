import type { Metadata } from "next";
import { Column, Heading, Text } from "@/once-ui/components";
import { Mailchimp } from "@/components";
import { Posts } from "@/components/blog/Posts";
import { Projects } from "@/components/work/Projects";
import { newsletter } from "@/app/resources/content";
import TemporalExperience from "@/components/TemporalExperience";
import styles from "./home.module.scss";

export const metadata: Metadata = {
  title: "Vyshakh Vengilode | Creative Intelligence Across Time",
  description: "The creative universe of Vyshakh Vengilode — design, writing, technology, science and digital experiences.",
  metadataBase: new URL("https://magic-portfolio-for-next-js-psi-sable.vercel.app"),
  openGraph: {
    title: "Vyshakh Vengilode | Creative Intelligence Across Time",
    description: "Design. Words. Code. Curiosity. One evolving creative practice.",
    images: ["/images/og/home.jpg"],
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <TemporalExperience />
      <div className={styles.archive}>
        <section className={styles.archiveSection}>
          <p className={styles.eyebrow}>THE WORK LOG / FEATURED TRANSMISSION</p>
          <Heading as="h2" variant="display-strong-s">Selected work, in focus.</Heading>
          <Text onBackground="neutral-weak" variant="body-default-m">A closer look at a featured project from the existing portfolio archive.</Text>
          <Column fillWidth paddingTop="l"><Projects range={[1, 1]} /></Column>
        </section>
        <section className={styles.archiveSection}>
          <p className={styles.eyebrow}>FIELD NOTES / RECENT WRITING</p>
          <Heading as="h2" variant="display-strong-s">Latest from the blog.</Heading>
          <Posts range={[1, 2]} columns="2" />
        </section>
        <section className={styles.archiveSection}>
          <p className={styles.eyebrow}>THE OPEN ARCHIVE / MORE PROJECTS</p>
          <Heading as="h2" variant="display-strong-s">More things made.</Heading>
          <Projects range={[2]} />
        </section>
        {newsletter.display && <section className={styles.newsletter}><Mailchimp newsletter={newsletter} /></section>}
      </div>
    </>
  );
}
