import React from 'react'
import { render } from 'react-dom'
import { createInertiaApp } from '@inertiajs/inertia-react'
import { ChakraProvider } from '@chakra-ui/react'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'

const appName =
  window.document.getElementsByTagName("title")[0]?.innerText || "Laravel";

createInertiaApp({
  title: (title) => `${title} - ${appName}`,
  resolve: (name) =>
    resolvePageComponent(
      `./Pages/${name}.tsx`,
      import.meta.glob('./Pages/**/*.tsx')
    ),
  setup({el, App, props}) {
    return render(
      <ChakraProvider>
        <App {...props} />
      </ChakraProvider>,
      el
    );
  },
});
