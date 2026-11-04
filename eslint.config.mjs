import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

/** Every import from outside a slice must go through the slice's public API (index.ts). */
const PUBLIC_API = {
  group: ["@/entities/*/*", "@/features/*/*", "@/widgets/*/*", "@/views/*/*"],
  message: "Import a slice through its public API (its index.ts), e.g. '@/entities/profile'.",
};

/** Feature-Sliced Design: a layer may import only from the layers below it. */
const fsdLayer = (files, forbidden, message) => ({
  files,
  rules: {
    "no-restricted-imports": ["error", { patterns: [PUBLIC_API, { group: forbidden, message }] }],
  },
});

const config = [
  { ignores: [".next/**", "out/**", "node_modules/**", "next-env.d.ts"] },
  ...nextCoreWebVitals,
  ...nextTypescript,
  {
    rules: {
      "react/no-unescaped-entities": "off",
      "no-restricted-imports": ["error", { patterns: [PUBLIC_API] }],
    },
  },
  fsdLayer(["src/shared/**"], ["@/entities*", "@/features*", "@/widgets*", "@/views*"], "FSD: shared/ must not import from any higher layer."),
  fsdLayer(["src/entities/**"], ["@/entities/*", "@/features*", "@/widgets*", "@/views*"], "FSD: entities may import only from shared/ (and their own slice, relatively)."),
  fsdLayer(["src/features/**"], ["@/features/*", "@/widgets*", "@/views*"], "FSD: features may import only from entities/ and shared/."),
  fsdLayer(["src/widgets/**"], ["@/widgets/*", "@/views*"], "FSD: widgets may import only from features/, entities/ and shared/."),
  fsdLayer(["src/views/**"], ["@/views/*"], "FSD: a view must not import another view."),
];

export default config;
