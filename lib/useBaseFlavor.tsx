export function useBaseFlavor() {
  const dark = `
--bg: #000;
--front: #fff;
--primary: #303139;
--active: #222223;
--plan: #1c1c1d;
--grey: #181818;
--weak: #939398;
--area: #E8E8EA;
--line: #28282a;
`;

  const light = `
--bg: #fff;
--front: #fff;
--primary: #4EA75C;
--active: #358341;
--plan: #fff;
--grey: #EFEFF4;
--weak: #939398;
--area: #E8E8EA;
--line: #e9e9e9;
`;

  const cssVal = `
:root {
  --sans: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
  "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
  "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
  "Noto Color Emoji";
--serif: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
--mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
  "Liberation Mono", "Courier New", monospace;
--ease: cubic-bezier(0.23, 1, 0.32, 1);
--ease-in: cubic-bezier(0.4, 0, 1, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
}
:root {
  ${light}
}
@media (prefers-color-scheme:dark) {
  :root {
    ${dark}
  }
}
.light {
  ${light}
}
.dark {
  ${dark}
}

body {
  margin: 0px;
  padding: 0px;
  background: var(--bg);
}

button, input, a {
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  -webkit-appearance: none;
  border: none;
  outline: none;
}

@media (pointer: fine) {
  button, a {
    cursor: pointer;
  }
}
  `;
  const sty = document.createElement("style");
  sty.textContent = cssVal;
  document.head.append(sty);

  const flavor = `
t: transition:$1;
from: transform:$1;
sans: font-family:--sans;
serif: font-family:--serif;
mono: font-family:--mono;
d: display:$1;
pe: pointer-events:$1;
pos: position:$1;
area: grid-area:$1;
areas: display:grid grid-template-areas:$1;
col: display:grid grid-auto-flow:column;
row: display:grid grid-auto-flow:row;
rows: display:grid grid-template-rows:$1;
cols: display:grid grid-template-columns:$1;
bg: background:$1;
bgm: background-image:$1;
gradient: background-image:linear-gradient($1,$2,$3);
text-gradient: -webkit-background-clip:text gradient:$1,$2,$3 color:rgba(0,0,0,0);
h: height:$1;
min-h: min-height:$1;
max-h: max-height:$1;
w: width:$1;
min-w: min-width:$1;
max-w: max-width:$1;
m: margin:$1;
mt: margin-top:$1;
mr: margin-right:$1;
ml: margin-left:$1;
mb: margin-bottom:$1;
mx: margin-bottom:0|$1;
my: margin-bottom:$1|0;
p: padding:$1;
pt: padding-top:$1;
pr: padding-right:$1;
pl: padding-left:$1;
pb: padding-bottom:$1;
px: padding-bottom:0|$1;
py: padding-bottom:$1|0;
fs: font-size:$1;
fw: font-weight:$1;
br: border-right:$1;
bl: border-left:$1;
bt: border-top:$1;
bb: border-bottom:$1;
b: border:$1;
z: z-index:$1;
o: overflow:$1 -webkit-overflow-scrolling:touch;
ox: overflow-x:$1 -webkit-overflow-scrolling:touch;
oy: overflow-y:$1 -webkit-overflow-scrolling:touch;
radius: border-radius:$1;
`;

  const flavorEle = document.createElement("div");
  flavorEle.style.display = "none";
  flavorEle.setAttribute("flavor", "");
  flavorEle.textContent = flavor;
  document.body.append(flavorEle);
}
