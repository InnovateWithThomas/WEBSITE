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
    <div>
      <div id="burger" class="burger">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav id="nav-links" class="hidden">
        <ul class="nav-list">
          <li>
            <a
              class="linkEffect linkEffect--insideOut"
              href={currentLang === "fr" ? "/fr/" : "/"}
            >
              {t.home}
            </a>
          </li>
          <li>
            <a
              class="linkEffect linkEffect--insideOut"
              href={currentLang === "fr" ? "/fr/projects" : "/projects"}
            >
              {t.projects}
            </a>
          </li>
          <li>
            <a
              class="linkEffect linkEffect--insideOut"
              href={currentLang === "fr" ? "/fr/blog" : "/blog"}
            >
              {t.blog}
            </a>
          </li>
          <li>
            <a
              class="linkEffect linkEffect--insideOut"
              href={currentLang === "fr" ? "/fr/about" : "/about"}
            >
              {t.about}
            </a>
          </li>
          <li>
            <a
              class="linkEffect linkEffect--insideOut"
              href={translatedPostUrl ?? switchLanguageUrl()}
            >
              {currentLang === "fr" ? "EN" : "FR"}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
