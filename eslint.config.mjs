import { FlatCompat } from "@eslint/eslintrc";
import eslint from "@eslint/js";
import nextVitals from "eslint-config-next/core-web-vitals";
import golemioConfig from "@golemio/lint-config-frontend";

const compat = new FlatCompat({
    baseDirectory: import.meta.dirname,
    recommendedConfig: eslint.configs.recommended,
});
const { extends: legacyExtends = [], ...legacyConfig } = golemioConfig;

export default [
    {
        ignores: [".next/**", "node_modules/**"],
    },
    ...nextVitals,
    ...compat.extends(...legacyExtends.filter((config) => config !== "next/core-web-vitals")),
    ...compat.config(legacyConfig),
];
