import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import preact from "@astrojs/preact";

export default defineConfig({
  output: "server",
  integrations: [preact()],
  site: 'https://innovatewiththomas.github.io',
	base: '/github-pages',
  vite: {
    ssr: {
      external: ["node:buffer"],
    },
  },
});
