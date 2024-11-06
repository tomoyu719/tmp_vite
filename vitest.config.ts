import {defineConfig} from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
    },
    include: ["tests/unit/**/*.{test,spec}.tsx"],
  },
});
