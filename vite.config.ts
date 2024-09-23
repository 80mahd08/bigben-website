import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import pluginPurgeCss from "@mojojoejo/vite-plugin-purgecss";

export default defineConfig({
	plugins: [react(), pluginPurgeCss()],
});
