import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import react from '@astrojs/react';

import cloudflare from '@astrojs/cloudflare';

import tunnel from 'astro-tunnel';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), tunnel()],
  output: 'server',
  adapter: cloudflare()
});