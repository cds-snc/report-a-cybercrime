import { configure, addDecorator, addParameters } from '@storybook/react'
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks'

addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage,
    options: {
      storySort: (a, b) =>
        a[1].kind === b[1].kind
          ? 0
          : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
    },
  },
})
