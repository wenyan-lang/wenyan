const fs = require("fs");
const path = require("path");
const { examplesAlias, examplesLinks } = require("./examples");

function update(srcDir, outputFile) {
  const files = fs.readdirSync(srcDir).filter(x => x.endsWith(".wy"));
  files.sort((a, b) => a.slice(0, -3).localeCompare(b.slice(0, -3)));

  const leftWidth = "--------------------------------------".length;
  const rightWidth = "-------------------------".length;

  let content = `<!-- GENERATED FILE, DO NOT MODIFY -->
<!-- "npm run build:docs" to regenerate -->

# Examples

| File                                   | Remark                    |
| -------------------------------------- | ------------------------- |
`;

  function ansiLength(str) {
    return str.length + str.replace(/[\x00-\xff]+/g, "").length;
  }

  let links = [];

  for (let fname of files) {
    let basename = fname.replace(/\.wy$/, "");
    let left = `[${fname}](${fname})`;
    if (left.length < leftWidth) {
      left = left.padEnd(leftWidth, " ");
    } else {
      left += " ";
    }
    let alias = examplesAlias[basename];
    let link = examplesLinks[basename];
    let linkTag = link && /^\[.+?\]:/.test(link) && link.match(/^\[.+?\]/)[0];
    let right = link ? `[${alias || basename}]${linkTag}` : alias || "";
    let rightLength = ansiLength(right);
    let d = leftWidth + rightWidth - left.length - rightLength;
    if (d >= 0) {
      right += " ".repeat(d);
    } else {
      right += " ";
    }
    if (link) {
      links.push(`${link}`);
    }
    content += `| ${left} | ${right} |` + "\n";
  }

  if (links.length) {
    content += "\n";
    content += links.join("\n");
    content += "\n";
  }

  // console.log(content);

  fs.writeFileSync(outputFile, content);

  console.log("Examples list updated");
}

module.exports = {
  update
};

if (require.main === module) {
  update(
    path.resolve(__dirname, "../examples/"),
    path.resolve(__dirname, "../examples/README.md")
  );
}
