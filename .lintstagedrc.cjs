module.exports = {
  "*.{js,jsx,ts,tsx}": (filenames) => [
    `next lint --fix . ${filenames.join(' --file ')}`,
  ],
  "*.{ts,tsx,css}": (filenames) => [
    `prettier --write . ${filenames.join(' --file ')}`,
  ],
}