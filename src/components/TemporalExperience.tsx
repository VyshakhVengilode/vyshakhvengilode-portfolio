"use client";

import { useEffect, useState } from "react";
import styles from "./TemporalExperience.module.scss";

const chapters = [
  { id: "origin", label: "01 / ORIGIN" },
  { id: "work", label: "02 / WORK" },
  { id: "writing", label: "03 / WRITING" },
  { id: "contact", label: "04 / CONTACT" },
];

export default function TemporalExperience() {
  const [active, setActive] = useState(0);
  const [time, setTime] = useState("--:--:--");
  const [progress, setProgress] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const tick = () => {
      const d = new Date();
      setTime(new Intl.DateTimeFormat("en-IN", { timeZone: "Asia/Kolkata", hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false }).format(d));
      setProgress((d.getSeconds() / 60) * 100);
    };
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    const updateProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0);
    };
    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  useEffect(() => {
    const targets = chapters.map(({ id }) => document.getElementById(id)).filter((node): node is HTMLElement => Boolean(node));
    if (!targets.length || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = chapters.findIndex(({ id }) => id === entry.target.id);
          if (index >= 0) setActive(index);
        }
      });
    }, { rootMargin: "-28% 0px -45% 0px", threshold: 0 });
    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  const jump = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className={styles.experience}>
      <div className={styles.scrollProgress} aria-hidden="true"><i style={{ width: `${scrollProgress}%` }} /></div>
      <div className={styles.ambientVideo} aria-hidden="true"><video src="/media/vyshakh-profile-loop.mp4" autoPlay muted loop playsInline /></div>
      <div className={styles.noise} aria-hidden="true" />
      <div className={styles.grid} aria-hidden="true" />
      <header className={styles.topbar}>
        <a className={styles.wordmark} href="#top"><span>VV</span><i>VYSHAKH VENGILODE</i></a>
        <div className={styles.topMeta}><span className={styles.liveDot} /> TEMPORAL INTERFACE <b>·</b> EARTH / INDIA</div>
        <nav className={styles.topNav} aria-label="Main navigation"><a href="/work">WORK</a><a href="/about">ABOUT</a><a href="/publications">WRITING</a><a href="/gallery">GALLERY</a><a href="/blog">BLOG</a><a className={styles.menuLink} href="/fav">FAVOURITES <span>↗</span></a></nav>
        <button className={styles.menuToggle} type="button" aria-expanded={menuOpen} aria-controls="temporal-mobile-menu" onClick={() => setMenuOpen((open) => !open)}>{menuOpen ? "CLOSE −" : "MENU +"}</button>
        <nav id="temporal-mobile-menu" className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ""}`} aria-label="Mobile navigation" aria-hidden={!menuOpen}>
          <a href="/about" onClick={() => setMenuOpen(false)}>ABOUT / PROFILE ↗</a><a href="/work" onClick={() => setMenuOpen(false)}>WORK / PROJECTS ↗</a><a href="/publications" onClick={() => setMenuOpen(false)}>PUBLICATIONS ↗</a><a href="/blog" onClick={() => setMenuOpen(false)}>BLOG / NOTES ↗</a><a href="/gallery" onClick={() => setMenuOpen(false)}>GALLERY ↗</a><a href="/fav" onClick={() => setMenuOpen(false)}>FAVOURITES ↗</a>
        </nav>
      </header>

      <section className={styles.hero} id="top">
        <div className={styles.sideCode}><span>CREATIVE INTELLIGENCE</span><span>10° 52′ N / 75° 22′ E</span></div>
        <div className={styles.heroMain}>
          <div className={styles.eyebrow}>
            <span className={styles.signal} /> A PERSONAL UNIVERSE / EST. IN CURIOSITY
          </div>
          <h1>
            NOT JUST A<br /><em>PORTFOLIO.</em>
          </h1>
          <div className={styles.heroBottom}>
            <p>One human. Many dimensions.<br /><strong>Explore the timeline.</strong></p>
            <button className={styles.enterButton} onClick={() => jump("work")}><span>INITIATE JOURNEY</span><b>↘</b></button>
          </div>
        </div>
        <div className={styles.heroCoordinates}><span>COORDINATES LOCKED</span><span>VV — 001</span></div>
        <div className={styles.scrollCue}><span /> SCROLL TO TRAVEL</div>
      </section>

      <section className={styles.controlDeck} aria-label="Timeline navigation">
        <div className={styles.deckHead}><span>CHOOSE YOUR TIMELINE</span><span>SEQUENCE 0{active + 1} / 04</span></div>
        <div className={styles.deckBody}>
          <div className={styles.profileBlock}>
            <div className={styles.profileFrame}><video src="/media/vyshakh-profile-loop.mp4" autoPlay muted loop playsInline preload="auto" /></div>
            <div><div className={styles.profileName}>VYSHAKH VENGILODE</div><div className={styles.profileRole}>CREATIVE / WRITER / DEVELOPER</div><div className={styles.profileStatus}><span /> AVAILABLE FOR SELECT COLLABORATIONS</div></div>
          </div>
          <div className={styles.clockBlock}><span>LOCAL TIME · IST</span><strong>{time}</strong><div className={styles.clockTrack}><i style={{ width: `${progress}%` }} /></div><small> KANNUR, KERALA · INDIA</small></div>
          <nav className={styles.timelineNav}>
            {chapters.map((chapter, i) => <button key={chapter.id} className={active === i ? styles.activeChapter : ""} onClick={() => { setActive(i); jump(chapter.id); }}><span>{chapter.label}</span><b>{active === i ? "●" : "○"}</b></button>)}
          </nav>
        </div>
      </section>

      <section className={styles.chapter} id="origin">
        <div className={styles.chapterIndex}>01 <span>/ 04</span></div>
        <div className={styles.chapterContent}><p className={styles.kicker}>THE ORIGIN / THE HUMAN</p><h2>Curiosity is<br /><em>the constant.</em></h2><p className={styles.chapterCopy}>I’m Vyshakh Vengilode — a Kannur-based creative professional working across visual communication, writing and digital experiences. I move between disciplines because ideas rarely stay in one place.</p><div className={styles.pills}><span>DESIGN</span><span>STORYTELLING</span><span>TECHNOLOGY</span><span>SCIENCE</span></div><a className={styles.textLink} href="/about">DISCOVER THE FULL STORY <b>↗</b></a></div>
        <div className={styles.orbit} aria-hidden="true"><div className={styles.orbitCore}>VV</div><i /><i /><i /><span>THINK / MAKE / QUESTION / REPEAT</span></div>
      </section>

      <section className={`${styles.chapter} ${styles.workChapter}`} id="work">
        <div className={styles.chapterIndex}>02 <span>/ 04</span></div>
        <div className={styles.chapterContent}><p className={styles.kicker}>SELECTED TRANSMISSIONS / VISUAL WORK</p><h2>Ideas made<br /><em>visible.</em></h2><p className={styles.chapterCopy}>From brand identities and campaigns to digital interfaces and experimental visuals — explore selected work from the archive.</p><a className={styles.bigLink} href="/work"><span>OPEN PROJECT ARCHIVE</span><b>↗</b></a></div>
        <div className={styles.projectPreview}><div className={styles.previewImage}><img src="/images/projects/project-01/cover-01.jpg" alt="Selected editorial design project" /></div><div className={styles.previewCaption}><span>ARCHIVE / PROJECT 001</span><b>VISUAL WORLDS</b></div></div>
      </section>

      <section className={`${styles.chapter} ${styles.writingChapter}`} id="writing">
        <div className={styles.chapterIndex}>03 <span>/ 04</span></div>
        <div className={styles.chapterContent}><p className={styles.kicker}>THE IDEAS ARCHIVE / WORDS & RESEARCH</p><h2>Beyond the<br /><em>visible.</em></h2><p className={styles.chapterCopy}>Writing and research spanning science, psychology, politics, philosophy and culture. Ideas are another way to explore the universe.</p><div className={styles.archiveLinks}><a href="/publications">PUBLICATIONS <b>↗</b></a><a href="/blog">BLOG & NOTES <b>↗</b></a><a href="/about">STORIES & POEMS <b>↗</b></a></div></div>
        <div className={styles.typeArtifact}><span>FIELD NOTES</span><strong>IDEAS<br />HAVE<br /><em>AFTERLIVES.</em></strong><small>RECORDING NO. 003 / ONGOING</small></div>
      </section>

      <section className={styles.finalPortal} id="contact"><div className={styles.portalRing}><span>THE NEXT CHAPTER</span><b>↗</b></div><p className={styles.kicker}>EVERY TIMELINE LEADS SOMEWHERE</p><h2>Let’s create<br /><em>what’s next.</em></h2><p>Have an idea, a question, or a project that deserves to exist?</p><div className={styles.finalActions}><a href="mailto:vyshakhvengilode@gmail.com">START A CONVERSATION ↗</a><a href="https://cal.com/vyshakhvengilode" target="_blank" rel="noreferrer">SCHEDULE A CALL ↗</a><a href="https://artistrydesigndiaries.blogspot.com/" target="_blank" rel="noreferrer">EXPLORE ARTWORKS ↗</a><a href="https://hopp.bio/vyshakhvengilode" target="_blank" rel="noreferrer">LINK IN BIO ↗</a></div></section>

      <footer className={styles.footer}><a className={styles.wordmark} href="#top"><span>VV</span><i>VYSHAKH VENGILODE</i></a><div className={styles.socialLinks}><a href="https://www.linkedin.com/in/vyshakhvengilode/" target="_blank" rel="noreferrer">LINKEDIN ↗</a><a href="https://x.com/vyshakhvengilod" target="_blank" rel="noreferrer">X ↗</a><a href="https://www.hopp.bio/vyshakhvengilode" target="_blank" rel="noreferrer">BIO ↗</a><a href="mailto:vyshakhvengilode@gmail.com">EMAIL ↗</a></div><span>DESIGNED ACROSS TIME & DIMENSIONS</span><span>© {new Date().getFullYear()} / ALL SIGNALS RESERVED</span></footer>
    </main>
  );
}
