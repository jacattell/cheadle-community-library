// Rewrite any non-ASCII characters in the compiled CSS as CSS escapes,
// so the file is plain ASCII and survives copy/paste uploads intact.
// Also put each rule on its own line.
import { readFileSync, writeFileSync } from 'node:fs'

const file = 'site/assets/styles.css'
const css = readFileSync(file, 'utf8')
const ascii = css.replace(/[^\x00-\x7f]/g, (ch) => {
  // Sass turns the "\0" IE hack into U+FFFD; put the original escape back.
  if (ch === '�') return '\\0'
  return '\\' + ch.codePointAt(0).toString(16).padStart(6, '0')
})
// One rule per line: easier to read, review and diff. Browsers ignore the newlines.
writeFileSync(file, ascii.replace(/}/g, '}\n'))
