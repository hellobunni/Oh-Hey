import type { Preview } from '@storybook/react-vite'
import '../src/app/globals.css'

const preview: Preview = {
  decorators: [
    (Story) => {
      const root = document.documentElement
      root.dataset.theme = root.dataset.theme || 'light'
      root.style.colorScheme = root.dataset.theme === 'dark' ? 'dark' : 'light'
      return Story()
    },
  ],
  parameters: {
    backgrounds: {
      default: 'paper',
      values: [
        { name: 'paper', value: '#fbfaf6' },
        { name: 'ink', value: '#1d1c29' },
        { name: 'deep', value: '#100f1a' },
        { name: 'white', value: '#ffffff' },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: 'todo',
    },
  },
}

export default preview
