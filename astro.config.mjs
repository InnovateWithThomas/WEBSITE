import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

export default defineConfig({
  output: "server",
  integrations: [preact()],
  adapter: cloudflare(),
});
