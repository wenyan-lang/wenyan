/* wenyan-catsrc-ignore */

(() => {
  const { compile } = require("./parser");

  const isDev = false;

  async function run(script) {
    const scoped = !!script.attributes.scoped;
    if (script.src) {
      const response = await fetch(script.src);
      const code = await response.text();
      await exec(code.toString(), scoped);
    } else {
      await exec(script.innerText, scoped);
    }
  }

  async function exec(code, scoped = false) {
    let compiled = compile("js", code, {
      logCallback: isDev ? console.log : () => {},
      resetVarCnt: false
    });

    // wrap for scoped scripts that won't expose any variables to global
    if (scoped) compiled = `(()=>{${compiled}})()`;

    // executing
    window.eval(compiled);
  }

  document.addEventListener("DOMContentLoaded", async () => {
    const scripts = Array.from(document.getElementsByTagName("script")).filter(
      s => s.type === "application/wenyan"
    );

    for (const script of scripts) {
      try {
        await run(script);
      } catch (e) {
        console.error(e);
      }
    }
  });
})();
