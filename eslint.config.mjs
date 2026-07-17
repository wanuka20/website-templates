import nextVitals from "eslint-config-next/core-web-vitals";

const eslintConfig = [
  ...nextVitals,
  {
    ignores: [
      ".next/**",
      "coverage/**",
      "reports/playwright/**",
      "reports/production-readiness/lighthouse/raw/**",
      "next-env.d.ts",
    ],
  },
];

export default eslintConfig;
