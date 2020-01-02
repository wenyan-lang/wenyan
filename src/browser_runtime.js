/* wenyan-catsrc-ignore */

(() => {
  const { execute } = require("./parser");

  const isDev = false;

  async function run(script) {
    const scoped = !!script.attributes.scoped;
    const outputHanzi = !(
      script.attributes.outputHanzi &&
      script.attributes.outputHanzi.value === "false"
    );
    let code = script.innerText;
    if (script.src) {
      const response = await fetch(script.src);
      code = (await response.text()).toString();
    }
    execute(code, {
      scoped,
      outputHanzi,
      logCallback: isDev ? console.log : () => {},
      resetVarCnt: false
    });
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
