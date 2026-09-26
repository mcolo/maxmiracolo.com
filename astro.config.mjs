// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import basicSsl from '@vitejs/plugin-basic-ssl';
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  adapter: netlify(),
  fonts: [{
      name: "Rubik Glitch",
      cssVariable: "--rubik",
      provider: fontProviders.google(),
  }],
  server: {
    host: true, // This allows the server to listen on your local network IP
  },
  vite: {
    plugins: [
      basicSsl() // Generates a local self-signed certificate automatically
    ]
  }
});
