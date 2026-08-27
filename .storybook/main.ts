import path from 'node:path'
import { fileURLToPath } from 'node:url'
import type { StorybookConfig } from '@storybook/react-vite';
import tailwindcss from '@tailwindcss/vite';

const dirname = typeof __dirname !== 'undefined'
  ? __dirname
  : path.dirname(fileURLToPath(import.meta.url))

const config: StorybookConfig = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-vitest",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    "@storybook/addon-onboarding"
  ],
  framework: "@storybook/react-vite",
  viteFinal(config) {
    const existingAlias = config.resolve?.alias ?? []
    const aliasArray = Array.isArray(existingAlias)
      ? existingAlias
      : Object.entries(existingAlias).map(([find, replacement]) => ({ find, replacement }))

    config.resolve = {
      ...config.resolve,
      alias: [
        ...aliasArray,
        { find: '@', replacement: path.resolve(dirname, '../src') },
        { find: '@content', replacement: path.resolve(dirname, '../content') },
        // No Next runtime under react-vite — next/image needs a plain <img> stand-in.
        { find: /^next\/image$/, replacement: path.resolve(dirname, './next-image-stub.tsx') },
      ],
    }
    // next/link reads this at module scope; there is no `process` in the browser build.
    config.define = {
      ...(config.define ?? {}),
      'process.env.__NEXT_ROUTER_BASEPATH': '""',
    }
    config.plugins = [
      ...(config.plugins ?? []),
      tailwindcss(),
    ]
    return config
  },
};
export default config;
