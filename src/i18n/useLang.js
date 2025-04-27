import en from "./en.js";
import fr from "./fr.js";

export function useLang(lang) {
  return lang === "fr" ? fr : en;
}
