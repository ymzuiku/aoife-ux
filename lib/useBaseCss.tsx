import { isNeedSafeTop, isNeedSafeBottom } from "./device";
export function useBaseCss() {
  const normal = `
*,
::after,
::before {
  box-sizing: border-box;
}
:root {
  -moz-tab-size: 4;
  -o-tab-size: 4;
  tab-size: 4;
}
html {
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
}
body {
  margin: 0;
  padding: 0;
  font-size: 16px;
  font-family: system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial,
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
}
hr {
  height: 0;
  color: inherit;
}
abbr[title] {
  -webkit-text-decoration: underline dotted;
  text-decoration: underline dotted;
}
b,
strong {
  font-weight: bolder;
}
code,
kbd,
pre,
samp {
  font-family: ui-monospace, SFMono-Regular, Consolas, "Liberation Mono", Menlo,
    monospace;
  font-size: 1em;
}
small {
  font-size: 80%;
}
sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}
sub {
  bottom: -0.25em;
}
sup {
  top: -0.5em;
}
table {
  text-indent: 0;
  border-color: inherit;
}
button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
}
button,
select {
  text-transform: none;
}
[type="button"],
[type="reset"],
[type="submit"],
button {
  -webkit-appearance: button;
}
::-moz-focus-inner {
  border-style: none;
  padding: 0;
}
:-moz-focusring {
  outline: 1px dotted ButtonText;
}
:-moz-ui-invalid {
  box-shadow: none;
}
legend {
  padding: 0;
}
progress {
  vertical-align: baseline;
}
::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}
[type="search"] {
  -webkit-appearance: textfield;
  outline-offset: -2px;
}
::-webkit-search-decoration {
  -webkit-appearance: none;
}
::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit;
}
summary {
  display: list-item;
}
blockquote,
dd,
dl,
figure,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
p,
pre {
  margin: 0;
}
button {
  background-color: transparent;
  background-image: none;
}
button:focus {
  outline: 1px dotted;
  outline: 5px auto -webkit-focus-ring-color;
}
fieldset {
  margin: 0;
  padding: 0;
}
ol,
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
html {
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  line-height: 1.5;
}
body {
  font-family: inherit;
  line-height: inherit;
}
*,
::after,
::before {
  box-sizing: border-box;
  border-width: 0;
  border-style: solid;
  border-color: var(--gray-200);
}
hr {
  border-top-width: 1px;
}
img {
  border-style: solid;
}
textarea {
  resize: vertical;
}
input::-moz-placeholder,
textarea::-moz-placeholder {
  color: var(--gray-400);
}
input:-ms-input-placeholder,
textarea:-ms-input-placeholder {
  color: var(--gray-400);
}
input::placeholder,
textarea::placeholder {
  color: var(--gray-400);
}
[role="button"],
button {
  cursor: pointer;
}
table {
  border-collapse: collapse;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}
a {
  color: inherit;
  text-decoration: inherit;
}
button,
input,
optgroup,
select,
textarea {
  padding: 0;
  line-height: inherit;
  color: inherit;
}
code,
kbd,
pre,
samp {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
    "Liberation Mono", "Courier New", monospace;
}
audio,
canvas,
embed,
iframe,
img,
object,
svg,
video {
  display: block;
  vertical-align: middle;
}
img,
video {
  max-width: 100%;
  height: auto;
}
button:focus:not(:focus-visible),
input:focus:not(:focus-visible),
textarea:focus:not(:focus-visible),
video:focus:not(:focus-visible) {
  outline: 0;
}
`;

  const dark = `
--primary: #303139;
--front: #fff;
--plan: #1c1c1d;
--bg: #181818;
--weak: #939398;
--area: #E8E8EA;
--line: #28282a;
--active: #222223;
`;

  const light = `
--primary: #467AFF;
--front: #000;
--plan: #fff;
--bg: #EFEFF4;
--weak: #939398;
--area: #E8E8EA;
--line: #e9e9e9;
--active: #e5e5e5;
`;

  const baseFlavor = `
${normal}
:root {
  --safe-top: ${isNeedSafeTop ? 20 : 0}px;
  --safe-bottom: ${isNeedSafeBottom ? 24 : 6}px;
}
* {
  color: var(--front);
  box-sizing: border-box;
  -webkit-tab-highlight-color: transparent;
  user-select:none;
  -webkit-touch-callout:none;
  -webkit-appearance:none;
}
:root {
  ${light}
  --px: 1px;
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
body {
  --divide: var(--px) solid var(--line);
  padding:0px;
  margin:0px;
  min-height: 100vh;
  height: 100%;
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
.scroll-x {
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling:touch;
}
.scroll-y {
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling:touch;
}
`;

  const style = document.createElement("style");
  style.textContent = baseFlavor;
  document.head.append(style);

  const flavor = `
t: transition:$1;
from: transform:$1;
sans: font-family:--sans;
serif: font-family:--serif;
mono: font-family:--mono;
d: display:$1;
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
ox: overflow-x:$1 -webkit-overflow-scrolling:touch;
oy: overflow-y:$1 -webkit-overflow-scrolling:touch;
radius: border-radius:$1;
`;

  const flavorEle = document.createElement("div");
  flavorEle.style.display = "none";
  flavorEle.setAttribute("flavor", "");
  flavorEle.textContent = flavor;
  document.body.append(flavorEle);

  // // 处理 ios 安全区域
  // const top = document.createElement("div");
  // top.style.height = "env(safe-area-inset-top)";
  // top.style.width = "1px";
  // document.body.append(top);

  // const bottom = document.createElement("div");
  // bottom.style.height = "env(safe-area-inset-bottom)";
  // bottom.style.width = "1px";
  // document.body.append(bottom);

  // setTimeout(() => {
  //   const safeTop = top.clientHeight;
  //   top.remove();
  //   const safeBottom = bottom.clientHeight;
  //   alert(bottom.clientHeight);
  //   bottom.remove();

  //   const safeSty = document.createElement("style");
  //   safeSty.setAttribute("ios-safe-style", "");
  //   safeSty.textContent = `

  //     `;

  //   document.head.append(safeSty);
}
