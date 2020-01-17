import { execute } from "./parser";

(() => {
  const isDev = false;

  async function run(script) {
    const scoped = !!script.attributes.scoped;
    const outputHanzi = !(
      script.attributes.outputHanzi &&
      script.attributes.outputHanzi.value === "false"
    );
    const allowHttp = !!script.attributes.allowHttp;
    let code = script.innerText;
    let importPaths = [window.location.origin];
    if (script.src) {
      const response = await fetch(script.src);
      code = (await response.text()).toString();
      importPaths.push(
        script.src
          .split("/")
          .slice(0, -1)
          .join("/")
      );
    }
    execute(code, {
      scoped,
      outputHanzi,
      logCallback: isDev ? console.log : () => {},
      resetVarCnt: false,
      importPaths,
      allowHttp
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
