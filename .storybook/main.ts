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
      ],
    }
    config.plugins = [
      ...(config.plugins ?? []),
      tailwindcss(),
    ]
    return config
  },
};
export default config;
