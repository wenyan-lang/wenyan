const fs = require("fs-extra");
const path = require("path");

const LibDir = path.resolve(__dirname, "../lib");
const StdlibDocFilePath = path.resolve(
  __dirname,
  "../documentation/Standard-Lib.md"
);
const DocRegex = /疏曰「「(.+?)。同犀之(.+?)也。」」/g;
const GithubRoot = "..";

const HEAD = `<!-- GENERATED FILE, DO NOT MODIFY-->

[Back to README](../README.md)

# Standard Library Cheatsheet
`;

const BODY = `
## Usage

\`\`\`
吾嘗觀「「算經」」之書。方悟「正弦」「餘弦」「圓周率」之義。
\`\`\`
`;

const TAIL = `

## Help update this cheatsheet

This cheatsheet is generated direct from stdlibs. There are still a lot of functions are not listed above. If you would like to hep update this cheatsheet, here is the steps.

Add comments in the stdlib files (one line above the function/value), the format should look like this:
\`\`\`
疏曰「「下溢。同犀之Math.floor也。」」
\`\`\`

After you fill the comments, you need to run
\`\`\`bash
npm run docs:update
\`\`\`
to update the document.

Then you can submit a pull request. Thank you!
`;

function getLineIndexes(text) {
  let previous = 0;
  var lines = [];
  text.split("\n").forEach(line => {
    lines.push(previous);
    previous += line.length + 1;
  });
  return lines;
}

function getLineNumberOfIndex(lines, index) {
  const length = lines.length;
  for (let i = 0; i < length; i++) {
    if (lines[i] >= index) return i;
  }
  return length;
}

function readFile(filepath, relativePath) {
  const text = fs.readFileSync(filepath, "utf-8");
  const lines = getLineIndexes(text);
  const results = [];
  const { name } = path.parse(filepath);
  let match;

  while ((match = DocRegex.exec(text))) {
    const [, wenyan, js] = match;
    results.push({
      wenyan,
      js,
      index: match.index,
      line: getLineNumberOfIndex(lines, match.index)
    });
  }

  // console.log(name, results)

  const GithubPath = `${GithubRoot}/lib/${relativePath}`;

  let markdown = `## [${name}](${GithubPath})\n\n`;

  markdown += `| Wenyan | Javascript Equivalent |\n|---|---|\n`;

  for (const { wenyan, js, line } of results) {
    markdown += `| [\`${wenyan}\`](${GithubPath}#L${line + 1}) | \`${js}\` |\n`;
  }

  return markdown + "\n";
}

function update() {
  let markdown = HEAD + "\n";
  markdown += `Last updated: ${new Date().toGMTString()}\n\n`;

  markdown += BODY + "\n";

  const files = [
    ...fs.readdirSync(LibDir),
    ...fs.readdirSync(path.join(LibDir, "js")).map(i => "js/" + i)
  ];

  for (const file of files) {
    if (file.endsWith(".wy")) {
      markdown += readFile(path.join(LibDir, file), file);
    }
  }

  markdown += "\n" + TAIL;

  fs.writeFileSync(StdlibDocFilePath, markdown, "utf-8");

  console.log("Standard Library Cheatsheet Updated.");
}

if (require.main === module) update();
