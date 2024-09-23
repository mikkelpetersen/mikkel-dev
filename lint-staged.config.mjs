/** @type {import("lint-staged").Config} */
const config = {
  // Check TypeScript Files
  '**/*.(ts|tsx)': () => 'pnpm exec tsc --noEmit',

  // Lint & Prettify TS and JS Files
  '**/*.(ts|tsx|js)': filenames => [
    `pnpm exec eslint ${filenames.join(' ')}`,
    `pnpm exec prettier --write ${filenames.join(' ')}`
  ],

  // Prettify Markdown and JSON Files
  '**/*.(md|json)': filenames =>
    `pnpm exec prettier --write ${filenames.join(' ')}`
};

export default config;
