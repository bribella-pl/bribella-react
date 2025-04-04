import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig(() => {
  const plugins = [tailwindcss(), react()];

  if (process.env.TEST_ENV === "true") {
    plugins.push(
      viteStaticCopy({
        targets: [{ src: "content", dest: "" }],
      })
    );
  }

  return { plugins };
});
