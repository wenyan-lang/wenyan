const exec = require("child_process").execSync;
const fs = require("fs-extra");
const path = require("path");
const consola = require("consola");
const updateStdlibCheatsheet = require("./stdlib_cheatsheet");

const repo = path.resolve(__dirname, "repo");

function ensureRepo(url, dir) {
  if (fs.existsSync(path.join(dir, ".git"))) {
    exec(`git -C "${dir}" pull -f`, { stdio: "inherit" });
    exec(`git -C "${dir}" checkout .`, { stdio: "inherit" });
  } else {
    exec(`git clone ${url} "${dir}"`, { stdio: "inherit" });
  }
}

function pushChanges(dir, msg) {
  exec(`git -C "${dir}" add .`, { stdio: "inherit" });
  exec(`git -C "${dir}" commit -m "${msg}"`, { stdio: "inherit" });
  exec(`git -C "${dir}" push`, { stdio: "inherit" });
}

ensureRepo("https://github.com/wenyan-lang/wenyan.wiki.git", repo);

updateStdlibCheatsheet(
  path.resolve(__dirname, "..", "..", "lib"),
  path.resolve(repo, "Standard-Library-Cheatsheet.md")
);

if (process.argv.includes("--push")) {
  pushChanges(repo, "Update Wiki");
  consola.success("Changes updated to Wiki");
}
