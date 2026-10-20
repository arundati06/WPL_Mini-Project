/**
 * Split a .sql file into single statements, the way the mysql command-line client does:
 * honours DELIMITER changes (for stored procedures), quoted strings and comments.
 */
function splitSql(text) {
  const out = [];
  let delim = ';', buf = '', i = 0;
  const n = text.length;
  let atLineStart = true;
  while (i < n) {
    // DELIMITER directive (must start a line)
    if (atLineStart) {
      const m = /^[ \t]*DELIMITER[ \t]+(\S+)[ \t]*(\r?\n|$)/i.exec(text.slice(i, i + 64));
      if (m) { delim = m[1]; i += m[0].length; continue; }
    }
    const c = text[i];
    atLineStart = false;
    if (c === "'" || c === '"' || c === '`') {                  // quoted literal
      let j = i + 1;
      while (j < n) {
        if (text[j] === '\\') { j += 2; continue; }
        if (text[j] === c) { if (text[j + 1] === c) { j += 2; continue; } break; }
        j++;
      }
      buf += text.slice(i, j + 1); i = j + 1; continue;
    }
    if (c === '-' && text[i + 1] === '-' && /\s/.test(text[i + 2] || ' ')) {   // -- comment
      const j = text.indexOf('\n', i); i = j === -1 ? n : j + 1; buf += '\n'; atLineStart = true; continue;
    }
    if (c === '/' && text[i + 1] === '*') {                    // /* comment */
      const j = text.indexOf('*/', i + 2); i = j === -1 ? n : j + 2; continue;
    }
    if (text.startsWith(delim, i)) {
      if (buf.trim()) out.push(buf.trim());
      buf = ''; i += delim.length; continue;
    }
    if (c === '\n') atLineStart = true;
    buf += c; i++;
  }
  if (buf.trim()) out.push(buf.trim());
  return out;
}

module.exports = { splitSql };
