import type { Preview } from '@storybook/react-vite'
import '../src/app/globals.css'

const preview: Preview = {
  decorators: [
    (Story) => {
      document.documentElement.classList.remove('dark')
      return Story()
    },
  ],
  parameters: {
    backgrounds: {
      default: 'paper',
      values: [
        { name: 'paper', value: '#fafaf7' },
        { name: 'lv-navy', value: '#0a1424' },
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
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  },
};

export default preview;