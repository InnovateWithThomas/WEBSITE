/** @jsxImportSource preact */
import { useState, useEffect } from "preact/hooks";
import { useLang } from "../i18n/useLang.js";

export default function Navbar({ lang, translatedPostUrl }) {
  const [currentLang, setCurrentLang] = useState(lang);
  const t = useLang(currentLang);

  useEffect(() => {
    const updateLang = () => {
      const path = window.location.pathname;
      if (path.startsWith("/fr")) {
        setCurrentLang("fr");
      } else {
        setCurrentLang("en");
      }
    };

    updateLang(); // pour initialiser
    window.addEventListener("astro:after-swap", updateLang);

    return () => {
      window.removeEventListener("astro:after-swap", updateLang);
    };
  }, []);

  const switchLanguageUrl = () => {
    const currentPath = window.location.pathname;
    if (currentLang === "fr") {
      return currentPath.replace(/^\/fr/, "") || "/";
    } else {
      return "/fr" + (currentPath === "/" ? "" : currentPath);
    }
  };

  return (
    <nav class="navbar">
      <button id="burger" aria-label="Toggle navigation">
        ☰
      </button>
      <a href={currentLang === "fr" ? "/fr/" : "/"}>{t.home}</a>
      <a href={currentLang === "fr" ? "/fr/projects" : "/projects"}>
        {t.projects}
      </a>
      <a href={currentLang === "fr" ? "/fr/blog" : "/blog"}>{t.blog}</a>
      <a href={currentLang === "fr" ? "/fr/about" : "/about"}>{t.about}</a>
      <span style={{ marginLeft: "1rem" }}>
        <a href={translatedPostUrl ?? switchLanguageUrl()}>
          {currentLang === "fr" ? "EN" : "FR"}
        </a>
      </span>
    </nav>
  );
}
