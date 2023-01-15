const path = require('path');

const buildEslintCommand = (filenames) => [
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`,
  `yarn prettier --write ${filenames.join(' ')}`,
];

module.exports = {
  '*.{js,jsx,ts,tsx}': [buildEslintCommand],
  '**/*.(md|json)': (filenames) =>
    `yarn prettier --write ${filenames.join(' ')}`,
};
