import nextVitals from "eslint-config-next/core-web-vitals";

const eslintConfig = [
  ...nextVitals,
  {
    // next.config.js sets images.unoptimized, so next/image adds no benefit over <img>
    rules: {
      "@next/next/no-img-element": "off"
    }
  },
  {
    ignores: [
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
      "node_modules/**"
    ]
  }
];

export default eslintConfig;
