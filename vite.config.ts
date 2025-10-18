import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './app'),
      '@components': path.resolve(__dirname, './app/components'),
      '@ui': path.resolve(__dirname, './app/components/ui'),
      '@const': path.resolve(__dirname, './app/const'),
      '@routes': path.resolve(__dirname, './.react-router/types/app/routes/'),
    },
  },
});
