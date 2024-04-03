# react-package-paster

A simple, yet powerful component for displaying installation commands and usage examples for npm packages. Ideal for package authors who want to provide a clear and efficient way for others to install and learn how to use their packages.

![Installation Command Preview](https://github.com/Stianlars1/react-package-paster/blob/6a5955ce2dd954c06004851829502681268a07c6/images/packageManager.png)
_Installation command interface of react-package-paster_

![Usage Example Preview](https://github.com/Stianlars1/react-package-paster/blob/6a5955ce2dd954c06004851829502681268a07c6/images/codeSnippet.png)
_Usage example preview interface of react-package-paster_

## Features

- **Installation Command Copy**: Quickly display and copy package installation commands for npm, yarn, pnpm, and bun.
- **Usage Example Preview**: Easily showcase a code snippet with the intended usage of your npm package.
- **Lightweight**: A small bundle size ensures that this component doesn't add unnecessary weight to your web pages.
- **Customizable**: Tailor the appearance and behavior to fit your own styling and functional requirements.

## Installation

Using npm:

```bash
npm install @stianlarsen/react-package-paster
```

Or using yarn:

```bash
yarn add @stianlarsen/react-package-paster
```

## Usage

### For Installation Command

Import the `CommandPaster` and use it with the `packageName` prop:

```jsx
import { CommandPaster } from "@stianlarsen/react-package-paster";

function App() {
  return <CommandPaster packageName="your-package-name" />;
}
```

### For Usage Example

Import the `CommandPaster` and provide the `codeLanguage` and `codeSnippet` props:

```jsx
import { CommandPaster } from "@stianlarsen/react-package-paster";

function App() {
  const snippet = `import { CommandPaster } from "@stianlarsen/react-package-paster"

  function App() {
  return (
    <CommandPaster
      codeLanguage="javascript"
      codeSnippet="import {}"
    />
  );
}`;
  return <CommandPaster codeLanguage="javascript" codeSnippet={snippet} />;
}
```

## Next.js Integration

For Next.js users, if you're utilizing Next.js's ability to render on the server, and you encounter client-side rendering issues with `@stianlarsen/react-package-paster`, you can resolve these issues by ensuring the component is rendered client-side only. You can achieve this by wrapping `CommandPaster` in a Next.js component with the `use client` directive:

```jsx
// components/CommandPasterNext.js

"use client";

import { CodeSnippetManager as CommandPasterClient } from "@stianlarsen/react-package-paster";

export const CommandPaster = () => {
  return <CommandPasterClient packageName="your-package-name" />;
};
```

You can then import and use this component in your Next.js pages like so:

```jsx
// pages/index.js

import { CommandPaster } from "/path/to/components/CommandPasterNext";

export default function Home() {
  return (
    <div>
      <CommandPaster />
    </div>
  );
}
```

This ensures that CommandPaster is only rendered on the client side, following Next.js best practices for client-only components.

Remember to replace `"/path/to/components/CommandPasterNext"` with the actual path to where `CommandPaster` is located within the Next.js project.

## Customization

To customize the theme and colors of the `@stianlarsen/react-package-paster` component, you can add the following variables to your root CSS file:

```css
:root {
  --radius: 0.5rem;
  --code-background: 240 6% 97%;
  --code-foreground: 240 6% 25%;
  --tab-foreground: 240 6% 25%;
  --tab-foreground-muted: 240 6% 25% / 0.83;
  --tab-foreground-active-border: 226 55% 45%;
  --package-manager-color: 261 51% 51%;
  --package-command-color: 212 94% 20%;
  --divider-color: 240 2% 89%;
}

@media screen and (prefers-color-scheme: dark) {
  :root {
    --code-background: 240 4% 9%;
    --code-foreground: 240 52% 96%;
    --tab-foreground: 240 52% 96%;
    --tab-foreground-muted: 240 33% 94% / 0.7;
    --tab-foreground-active-border: 234 100% 83%;
    --package-manager-color: 261 76% 76%;
    --package-command-color: 212 100% 81%;
    --divider-color: 240 4% 19%;
  }
}
```

## Contributing

Contributions to `@stianlarsen/react-package-paster` are welcome!

## License

`@stianlarsen/react-package-paster` is [MIT licensed](./LICENSE).

## Contact

- GitHub: [@stianlars1](https://github.com/stianlars1)
- Website: [https://stianlarsen.com](https://stianlarsen.com)
- Email: [stian.larsen@mac.com](mailto:stian.larsen@mac.com)
