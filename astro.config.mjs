import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";

import node from "@astrojs/node";

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
  adapter: node({
    mode: "standalone",
  }),
});