// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import basicSsl from '@vitejs/plugin-basic-ssl';

// https://astro.build/config
export default defineConfig({
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
