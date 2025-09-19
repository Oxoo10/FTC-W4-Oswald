// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  experimental: {
    fonts: [
      {
        provider: "local",
        name: "Tartuffo",
        cssVariable: "--font-tartuffo",
        fallbacks: ["sans-serif"],
        variants: [
          {
            style: "normal",
            src: ["./src/assets/fonts/Tartuffo-Regular.otf"]
          }
        ]
      },
      {
        provider: "local",
        name: "Gustavo",
        cssVariable: "--font-gustavo",
        fallbacks: ["sans-serif"],
        variants: [
          {
            weight: 100,
            style: "normal",
            src: ["./src/assets/fonts/Gustavo_trial-Thin.otf"]
          },
          {
            weight: 400,
            style: "normal",
            src: ["./src/assets/fonts/Gustavo_trial-Light.otf"]
          },
          {
            weight: 400,
            style: "italic",
            src: ["./src/assets/fonts/Gustavo_trial-Regular.otf"]
          },
          {
            weight: 700,
            style: "normal",
            src: ["./src/assets/fonts/Gustavo_trial-Medium.otf"]
          },
          {
            weight: 700,
            style: "italic",
            src: ["./src/assets/fonts/Gustavo_trial-Bold.otf"]
          }
        ]
      }
    ]
  }
});