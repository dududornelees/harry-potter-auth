// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
var vite_config_default = defineConfig({
  plugins: [react(), tsconfigPaths()],
  root: "./",
  publicDir: "./public"
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxNYXVyaWNpbyBXYWduZXJcXFxcRG9jdW1lbnRzXFxcXFdlYiBEZXZlbG9wbWVudFxcXFxSZWFjdFxcXFxoYXJyeS1wb3R0ZXItYXV0aFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcTWF1cmljaW8gV2FnbmVyXFxcXERvY3VtZW50c1xcXFxXZWIgRGV2ZWxvcG1lbnRcXFxcUmVhY3RcXFxcaGFycnktcG90dGVyLWF1dGhcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL01hdXJpY2lvJTIwV2FnbmVyL0RvY3VtZW50cy9XZWIlMjBEZXZlbG9wbWVudC9SZWFjdC9oYXJyeS1wb3R0ZXItYXV0aC92aXRlLmNvbmZpZy50c1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gXCJ2aXRlXCI7XG5pbXBvcnQgcmVhY3QgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXJlYWN0XCI7XG5pbXBvcnQgdHNjb25maWdQYXRocyBmcm9tIFwidml0ZS10c2NvbmZpZy1wYXRoc1wiO1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgICBwbHVnaW5zOiBbcmVhY3QoKSwgdHNjb25maWdQYXRocygpXSxcbiAgICByb290OiBcIi4vXCIsXG4gICAgcHVibGljRGlyOiBcIi4vcHVibGljXCJcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFrYSxTQUFTLG9CQUFvQjtBQUMvYixPQUFPLFdBQVc7QUFDbEIsT0FBTyxtQkFBbUI7QUFHMUIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDeEIsU0FBUyxDQUFDLE1BQU0sR0FBRyxjQUFjLENBQUM7QUFBQSxFQUNsQyxNQUFNO0FBQUEsRUFDTixXQUFXO0FBQ2YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K