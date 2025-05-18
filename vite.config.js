import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { plugin as markdownPlugin, Mode } from "vite-plugin-markdown";
import path from "path";
export default defineConfig(() => {
    const plugins = [
        tailwindcss(),
        react(),
        markdownPlugin({
            mode: [Mode.MARKDOWN],
        }),
    ];
    return {
        base: "/bribella-react",
        plugins,
        resolve: {
            alias: {
                "@content": path.resolve(__dirname, "content"),
            },
        },
    };
});
