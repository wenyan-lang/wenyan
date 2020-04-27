const execSync = require("child_process").execSync;
const packageJSON = require("../package.json");
const path = require("path");
const fs = require("fs-extra");

const root = path.resolve(__dirname, "..");
const distRoot = path.resolve(__dirname, "../dist");
const npmOrganization = "@wenyan";

const packages = ["cli", "core", "render", "runtime"];

const fileToCopy = ["README.md", "CHANGELOG.md", "LICENSE"];

const fieldsInPackageJSONToRemove = [
  "devDependencies",
  "lint-staged",
  "husky",
  "scripts",
  "private"
];

async function Build() {
  console.log(`Building...`);
  execSync("npm run build");
}

async function CopyFiles() {
  for (const package of packages) {
    console.log(`Copying files for ${package}...`);
    for (const file of fileToCopy) {
      await fs.copyFile(
        path.join(root, file),
        path.join(distRoot, package, file)
      );
    }
  }
}

async function MakePackageJSON() {
  for (const package of packages) {
    console.log(`Generating package.json for ${package}...`);
    const json = JSON.parse(JSON.stringify(packageJSON));
    json.name = `${npmOrganization}/${package}`;
    json.main = "./index.min.js";
    json.unpkg = "./index.min.js";

    for (const field of fieldsInPackageJSONToRemove) delete json[field];

    if (package === "cli") {
      json.bin = {
        wenyan: "./index.min.js"
      };
    }

    const jsonString = JSON.stringify(json, null, 2) + "\n";

    await fs.writeFile(
      path.join(distRoot, package, "package.json"),
      jsonString,
      "utf-8"
    );
  }
}

async function Publish() {
  for (const package of packages) {
    console.log(`Publishing ${npmOrganization}/${package}...`);
    execSync("npm publish --access public", {
      cwd: path.join(distRoot, package)
    });
  }
}

(async () => {
  await Build();
  await CopyFiles();
  await MakePackageJSON();
  await Publish();
})();
