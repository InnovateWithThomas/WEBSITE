import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";

export default defineConfig({
  output: "server",
  integrations: [preact()],
  site: 'https://innovatewiththomas.github.io',
	base: '/',
  vite: {
    ssr: {
      external: ["node:buffer"],
    },
  },
});
