import { useEffect, useState } from "react";
import "./App.scss";

const ACCESS_PASSWORD = import.meta.env.VITE_ACCESS_PASSWORD || "";
const ACCESS_STORAGE_KEY = "kine-application-unlocked";
import profileImage from "./assets/images/Bilde_Kine.jpg";
import owlImage from "./assets/images/DSC05096.jpg";
import mountainImage from "./assets/images/DSC00791.JPEG";
import reindeerIllustration from "./assets/images/image.png";
import lakeImage from "./assets/images/IMG_3383.JPEG";
import vinterOgReinImage from "./assets/images/57154587_470490330355836_1350036447381422080_n.jpg";

function readAccessState() {
  try {
    return window.localStorage.getItem(ACCESS_STORAGE_KEY) === "true";
  } catch {
    return false;
  }
}

function AccessGate({ onUnlock }) {
  const [password, setPassword] = useState("");
  const [hasError, setHasError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    if (password === ACCESS_PASSWORD) {
      onUnlock();
      return;
    }
    setHasError(true);
  }

  return (
    <main className="gate min-h-screen bg-[#172522] text-[#f4f1e8]">
      <div className="gate__image" aria-hidden="true" />
      <div className="gate__content flex min-h-screen flex-col px-6 py-8 sm:px-10 lg:px-16">
        <header className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.25em]">
          <span>Kine Odden Nystuen</span>
        </header>

        <div className="my-auto max-w-xl py-20">
          <h1 className="gate__title max-w-2xl text-6xl font-medium leading-[0.92] tracking-[-0.05em] sm:text-8xl text-pretty">
            Hei, så kjekt å <br /> se deg her!
          </h1>
          <p className="mt-8 max-w-md text-base leading-7 text-[#cbd6cd]">
            Jeg har laget noe jeg gjerne vil vise deg. Har du fått passordet,
            vet du hva du skal gjøre.
          </p>

          <form className="mt-12 max-w-md" onSubmit={handleSubmit}>
            <label
              className="mb-3 block text-xs font-semibold uppercase tracking-[0.2em] text-[#b1c3b5]"
              htmlFor="password"
            >
              Passord
            </label>
            <div className="flex border-b border-[#8fa69a] pb-3 focus-within:border-[#f3f0e9]">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                  setHasError(false);
                }}
                placeholder="Skriv inn passord"
                aria-invalid={hasError}
                className="min-w-0 flex-1 bg-transparent text-lg outline-none placeholder:text-[#82978c]"
                autoComplete="current-password"
              />
              <button
                className="ml-4 text-[#b1c3b5] transition-colors hover:text-white"
                type="button"
                onClick={() => setShowPassword((isVisible) => !isVisible)}
                aria-label={showPassword ? "Skjul passord" : "Vis passord"}
                title={showPassword ? "Skjul passord" : "Vis passord"}
              >
                {showPassword ? (
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  >
                    <path d="M3 3l18 18M10.6 10.6a2 2 0 0 0 2.8 2.8M9.9 5.2A10.7 10.7 0 0 1 12 5c5.2 0 8.6 4.7 9.5 7-.3.8-1 1.9-2 2.9M6.2 6.2C4.1 7.6 2.8 9.7 2.5 12c.5 1.3 1.8 3.4 4.7 5.2A10.3 10.3 0 0 0 12 19c1.3 0 2.5-.3 3.6-.7" />
                  </svg>
                ) : (
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  >
                    <path d="M2.5 12S6 5 12 5s9.5 7 9.5 7S18 19 12 19 2.5 12 2.5 12Z" />
                    <circle cx="12" cy="12" r="2.5" />
                  </svg>
                )}
              </button>
              <button
                className="ml-4 text-sm font-semibold uppercase tracking-[0.15em] text-[#d9e8d3] transition-colors hover:text-white"
                type="submit"
              >
                Åpne <span aria-hidden="true">→</span>
              </button>
            </div>
            <p className="mt-4 min-h-5 text-sm text-[#f3b5a5]" role="alert">
              {hasError ? "Feil passord. Prøv igjen." : ""}
            </p>
          </form>
        </div>

        <footer className="flex flex-col gap-2 text-xs uppercase tracking-[0.18em] text-[#b1c3b5]">
          <span>Kine Odden Nystuen / 2026</span>
        </footer>
      </div>
    </main>
  );
}

function ApplicationPage({ onLogout }) {
  const improvements = [
    {
      title: "En tydeligere forside",
      description:
        "Det er mye spennende innhold på villrein.no, men som ny bruker savner jeg en litt tydeligere introduksjon til hva nettsiden har å tilby. Forsiden inneholder mye informasjon og menyen mange valg, så her ser jeg potensial for å skape en tydeligere start og bedre oversikt.",
    },
    {
      title: "Mer visuelt hierarki",
      description:
        "Med mye og variert fagstoff kan designet bidra mer til å skille og prioritere innholdet. Her ville jeg blant annet utforsket bruk av farger, luft og typografi, samtidig som dagens naturpreg beholdes.",
    },
    {
      title: "Flere veier inn",
      description:
        "Folk kan besøke villrein.no av ganske forskjellige grunner. Noen er kanskje ute etter informasjon om jakt eller turmuligheter, mens andre ønsker fagstoff eller bare vil lære mer om villrein. Her ser jeg potensial for å gjøre inngangene til innholdet mer tilpasset det den enkelte kommer til siden for.",
    },
  ];

  const contactLinks = [
    {
      label: "CV",
      detail: "Last ned CV",
      href: "src/assets/files/CV_Kine_Odden_Nystuen_26.pdf",
    },
    {
      label: "Portfolio",
      detail: "Se porteføljen min",
      href: "https://kineon.no",
    },
    {
      label: "LinkedIn",
      detail: "LinkedIn",
      href: "https://www.linkedin.com/in/kine-odden-nystuen-208744223",
    },
  ];

  useEffect(() => {
    const revealItems = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          currentObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.16 },
    );

    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="application bg-[#f2f0e9] text-[#14211f]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-7 sm:px-10 lg:px-16">
        <a className="text-sm font-bold uppercase tracking-[0.2em]" href="#top">
          1 / Søknad
        </a>
        <div className="hidden gap-8 text-xs font-semibold uppercase tracking-[0.16em] text-[#52645b] sm:flex">
          <a href="#om_meg">Om meg </a>
          <a href="#faglig_bakgrunn">Faglig bakgrunn</a>
          <a href="#mine_tanker">Mine tanker</a>
          <a href="#kontakt">Kontakt</a>
        </div>
        <button
          className="text-xs font-semibold uppercase tracking-[0.16em] text-[#52645b]"
          onClick={onLogout}
          type="button"
        >
          Logg ut
        </button>
      </nav>

      <div
        id="top"
        className="mx-auto max-w-7xl px-6 pb-24 pt-14 sm:px-10 lg:px-16 lg:pb-36 lg:pt-24"
      >
        {/* Application intro */}
        <div
          className="grid items-end gap-14 lg:grid-cols-[1fr_0.8fr]"
          data-reveal="fade-up"
        >
          <div>
            <p className="mb-8 text-xs font-bold uppercase tracking-[0.28em] text-[#6b825f]">
              EN DIGITAL SØKNAD / Norsk Villreinsenter
            </p>
            <h1 className="application__title max-w-4xl text-6xl font-medium leading-[0.9] tracking-[-0.06em] sm:text-8xl lg:text-[9.5rem]">
              Webutvikler
            </h1>
          </div>
          <div></div>
        </div>

        {/* Søknad section */}
        <div className="mt-20 grid gap-4 sm:grid-cols-[1.5fr_1fr] lg:mt-28">
          <img
            data-reveal="image"
            className="h-[28rem] w-full object-cover sm:h-[38rem]"
            src={profileImage}
            alt=""
          />
          <div
            className="flex min-h-[20rem] flex-col justify-between bg-[#d2dfb9] p-7 sm:min-h-0 sm:p-10"
            data-reveal="fade-up"
            data-delay="1"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#52645b]">
              01 / Søknad
            </span>
            <p className="max-w-sm text-3xl leading-tight tracking-[-0.03em] sm:text-4xl">
              Natur, dyreliv og kreativ webutvikling, en kombinasjon som passer
              meg godt.
              {/* Ute for å utforske, inne for å utvikle.  */}
            </p>
          </div>
        </div>

        {/* Om meg section */}
        <section
          id="om_meg"
          className="grid gap-10 pt-24 pb-6 sm:pt-32 sm:pb-10 lg:grid-cols-[0.65fr_1fr] lg:pt-44 lg:pb-20"
          data-reveal="fade-up"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#6b825f]">
            02 / Om meg
          </p>
          <div>
            <h2 className="max-w-3xl text-4xl leading-tight tracking-[-0.04em] sm:text-6xl">
              Fra landskap til webutvikling.
            </h2>
            <p className="mt-10 max-w-xl text-lg leading-8 text-[#52645b]">
              Hei! Jeg heter Kine og er front-end utvikler med bakgrunn innen
              landskapsplanlegging og landskapsarkitektur. Jeg kommer fra
              Folldal, hvor naturen og fjellet har vært en stor del av
              oppveksten min. Jeg har alltid likt å være kreativ og finne
              løsninger, noe som har påvirket både karrierevalgene mine og veien
              min inn i webutvikling.
            </p>
            <p className="mt-4 max-w-xl text-lg leading-8 text-[#52645b]">
              Det er nettopp denne kombinasjonen av faglig bredde og interesse
              for natur som gjør muligheten til å videreutvikle villrein.no og
              Villreinskolen så spennende. Jeg ønsker å bruke det jeg kan innen
              webutvikling til å formidle et tema jeg selv har stor interesse
              for, på en måte som gjør kunnskapen tilgjengelig og engasjerende
              for flere.
            </p>
          </div>
        </section>

        {/* Photo interlude section */}
        <section
          className="photo-interlude"
          aria-label="Landskap og inspirasjon"
        >
          <div className="photo-interlude__grid">
            {[
              {
                src: owlImage,
                alt: "Haukugle i bjørkeskog",
              },

              {
                src: mountainImage,
                alt: "Kine og hunden Rav på tur i fjellet",
              },

              {
                src: lakeImage,
                alt: "Utsikt over fjelllandskap og tjern",
              },
              {
                src: vinterOgReinImage,
                alt: "Vinter og rein",
              },
            ].map(({ src, alt }, index) => (
              <figure
                className={`photo-card photo-card--${index + 1}`}
                data-delay={index + 1}
                data-reveal="pop"
                key={src}
              >
                <img src={src} alt={alt} />
              </figure>
            ))}
          </div>
        </section>

        {/* Faglig bakgrunn section */}
        <section
          id="faglig_bakgrunn"
          className="background-story"
          data-reveal="fade-up"
        >
          <div className="background-story__copy">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#d2dfb9]">
              Faglig bakgrunn / 03
            </p>
            <h2 className="mt-8 max-w-3xl text-4xl leading-tight tracking-[-0.04em] text-[#f4f1e8] sm:text-6xl">
              To fagfelt, én retning.
            </h2>
            <p className="mt-8 max-w-xl text-lg leading-8 text-[#cbd6cd]">
              Jeg har en bachelor i landskapsplanlegging med landskapsarkitektur
              og en høyere fagskolegrad i front-end utvikling. For denne
              stillingen er det klart at utdanningen min innen utvikling er
              viktigste elementet, men bacheloren har gitt meg en faglig
              bakgrunn som jeg tror kan komme godt med i møte med temaene dere i
              Norsk villreinsenter jobber med.
            </p>
            <p className="mt-4 max-w-xl text-lg leading-8 text-[#cbd6cd]">
              Gjennom front-end utdanningen har jeg lært meg å kode og utvikle
              digitale løsninger blant annet med HTML, CSS, JavaScript, React og
              Tailwind. Ved siden har jeg også lært meg å bruke Figma for design
              og prototyping, og via studie og også privat har jeg jobbet med
              nettsideutvikling i WordPress.
            </p>

            <div className="background-story__details">
              <div>
                {/* <span>01</span> */}
                <strong>Front-end utvikling</strong>
                <p>Noroff / fagskolegrad</p>
              </div>
              <div>
                {/* <span>02</span> */}
                <strong>Landskapsplanlegging med landskapsarkitektur</strong>
                <p>HVL / bachelorgrad</p>
              </div>
            </div>
          </div>
          <div className="background-story__figure">
            <img
              src={reindeerIllustration}
              alt="Villrein illustrasjon"
              aria-hidden="true"
            />
          </div>
        </section>

        {/* Application bridge section */}
        <section
          className="application-bridge"
          data-reveal="fade-up"
          aria-labelledby="application-bridge-title"
        >
          <div className="application-bridge__lead">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#6b825f]">
              04 / Det jeg tar med meg
            </p>
            <h2
              id="application-bridge-title"
              className="mt-8 max-w-md text-4xl leading-tight tracking-[-0.04em] sm:text-6xl"
            >
              Fra idé til ferdig løsning.
            </h2>
          </div>
          <div className="application-bridge__text text-lg leading-8 text-[#52645b]">
            <p>
              Noe av det jeg liker best med webutvikling er at det sjelden
              finnes bare én måte å løse en oppgave på. Jeg liker å starte med
              en idé eller et behov, utforske ulike løsninger og kombinere
              design og kode til noe som både fungerer godt og ser bra ut.
            </p>
            <p>
              Underveis er jeg opptatt av hvordan løsningen faktisk fungerer for
              brukeren. Responsivt design og universell utforming er derfor
              naturlige deler av prosessen, enten jeg jobber med struktur,
              design eller selve utviklingen.
            </p>
          </div>
        </section>

        {/* Observasjoner section */}
        <section
          id="mine_tanker"
          className="border-t border-[#c5cbc2] py-10"
          data-reveal="fade-up"
        >
          <div className="mb-14 flex items-end justify-between gap-6">
            <h2 className="text-4xl tracking-[-0.04em] sm:text-6xl">
              Muligheter for forbedring
            </h2>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#6b825f]">
              05 / Mine tanker
            </span>
          </div>
          <div className="grid border-t border-[#c5cbc2] sm:grid-cols-3">
            {improvements.map(({ title, description }, index) => (
              <article
                className="improvement-card border-b border-[#c5cbc2] py-8 sm:border-b-0 sm:border-r sm:px-8 sm:first:pl-0 sm:last:border-r-0"
                data-reveal="fade-up"
                data-delay={index + 1}
                key={title}
              >
                <span className="improvement-card__index text-sm text-[#6b825f]">
                  0{index + 1}
                </span>
                <h3 className="mt-4 text-2xl tracking-[-0.03em] sm:mt-16">
                  {title}
                </h3>
                <p className="mt-5 max-w-xs leading-7 text-[#52645b]">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Contact section */}
        <section
          id="kontakt"
          className="mt-24 bg-[#172522] px-7 py-14 text-[#f4f1e8] sm:mt-36 sm:px-14 sm:py-20"
          data-reveal="fade-up"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#d2dfb9]">
            06 / La oss ta en prat
          </p>
          <div className="mt-20 flex flex-col justify-between gap-12 sm:flex-row sm:items-end">
            <h2 className="max-w-2xl text-5xl leading-[0.95] tracking-[-0.05em] sm:text-7xl">
              Jeg forteller gjerne mer og ser frem til å høre fra dere!
            </h2>
            <a
              className="whitespace-nowrap border-b border-[#d2dfb9] pb-2 text-sm font-semibold uppercase tracking-[0.16em] text-[#d2dfb9]"
              href="mailto:kine_on@hotmail.com"
            >
              Send meg en e-post <span aria-hidden="true">→</span>
            </a>
          </div>
          <div className="mt-16 grid border-t border-[#52645b] sm:grid-cols-3">
            {contactLinks.map(({ label, detail, href }, index) => (
              <a
                className="group flex items-start justify-between border-b border-[#52645b] py-5 sm:border-b-0 sm:border-r sm:px-6 sm:first:pl-0 sm:last:border-r-0"
                href={href}
                key={label}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                target={href.startsWith("http") ? "_blank" : undefined}
              >
                <span>
                  <span className="block text-xs uppercase tracking-[0.18em] text-[#d2dfb9]">
                    0{index + 1} / {label}
                  </span>
                  <span className="mt-2 block text-sm text-[#b1c3b5]">
                    {detail}
                  </span>
                </span>
                <span className="text-xl text-[#d2dfb9] transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

function App() {
  const [isUnlocked, setIsUnlocked] = useState(readAccessState);

  function handleUnlock() {
    try {
      window.localStorage.setItem(ACCESS_STORAGE_KEY, "true");
    } catch {
      // The application can still be used if storage is unavailable.
    }
    setIsUnlocked(true);
  }

  function handleLogout() {
    try {
      window.localStorage.removeItem(ACCESS_STORAGE_KEY);
    } catch {
      // Continue logging out even if storage is unavailable.
    }
    setIsUnlocked(false);
  }

  return isUnlocked ? (
    <ApplicationPage onLogout={handleLogout} />
  ) : (
    <AccessGate onUnlock={handleUnlock} />
  );
}

export default App;
