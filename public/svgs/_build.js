const fs = require("fs-extra");
const { resolve } = require("path");

const loadSvgs = (startPath) => {
  const svgs = {};
  const next = (thePath) => {
    fs.readdirSync(thePath).forEach((file) => {
      const nextPath = resolve(thePath, file);
      if (fs.statSync(nextPath).isDirectory()) {
        next(nextPath);
      } else if (/\.svg/.test(file)) {
        const url = nextPath.replace(__dirname, "");
        const svg = fs.readFileSync(nextPath);

        svgs[url] = svg.toString();
      }
    });
  };
  next(startPath);
  return svgs;
};

const buildHTML = (theRoot, htmlName) => {
  const svgList = loadSvgs(theRoot);

  let imgs = ``;

  Object.keys(svgList).forEach((url, i) => {
    const list = url.split("/");
    const name = list[list.length - 1];

    imgs += `
<div id="svg${i}" class="svg-box" data-url="${url}" onclick="window.clipboard('svg${i}')">
  ${svgList[url]}
  <p>${name}</p>
</div>
  `;
  });

  let html = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      :root {
        --svg-color: #335;
      }
      body {
        display: grid;
        justify-content: center;
        font-family: sans-serif;
      }
      .svg-grid {
        color: var(--svg-color);
        display: grid;
        grid-template-columns: repeat(6, auto);
        grid-template-rows: auto;
      }
      .svg-box {
        color: var(--svg-color);
        cursor: pointer;
        margin: 10px;
        width: 128px;
        height: 128px;
        font-size: 48px;
        display: grid;
        place-centent: center;
        border-radius: 10px;
      }
      .svg-box > * {
        place-self: center;
      }
      .svg-box > svg {
        margin: 0 auto;
      }
      .svg-box:hover {
        background: rgba(0,0,0,0.1);
      }
      .svg-box:active {
        background: rgba(0,0,255,0.15);
      }
      .svg-box > p {
        color: #999;
        font-size: 11px;
        text-align: center;
      }
      .tip {
        padding: 10px;
        position: fixed;
        top: 40px;
        right: 40px;
        background: #000;
        border-radius: 10px;
        color:#fff;
        box-shadow: 0px 4px 6px rgba(0,0,0,0.1);
      }
    </style>
    <script>
      function clipboard(id) {
        const _el = document.getElementById(id);
        const url = _el.getAttribute("data-url");
        const el = document.createElement("div");
        el.innerHTML = _el.innerHTML;
        el.lastElementChild.remove();

        const text = el.innerHTML.trim();
        const copy = function (e) {
          e.preventDefault();
          if (e.clipboardData) {
            e.clipboardData.setData("text/plain", text);
          } else if (window.clipboardData) {
            window.clipboardData.setData("Text", text);
          }
        };

        window.addEventListener("copy", copy);
        document.execCommand("copy");
        window.removeEventListener("copy", copy);

        const old = document.getElementById('tip');
        if (old) {
          old.remove();
        }
        const div = document.createElement("div");
        div.id = "tip";
        div.innerText = "Copied: " + url;
        div.className="tip"
        document.body.append(div);

        setTimeout(() => {
          div.remove();
        }, 1000);


      }
    </script>
  </head>
  <body>
    <h1>点击图标，拷贝SVG</h1>
    <div class="svg-grid">
      $$imgs
    </div>
  </body>
</html>
`;

  html = html.replace("$$imgs", imgs);

  fs.writeFileSync(resolve(__dirname, htmlName + ".html"), html);
};

buildHTML(resolve(__dirname, "./"), "all");
buildHTML(resolve(__dirname, "./iconly"), "iconly");
buildHTML(resolve(__dirname, "./feather"), "feather");
buildHTML(resolve(__dirname, "./bootstrap"), "bootstrap");
