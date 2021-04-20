export function useBaseFlavor() {
  const dark = `
--bg: #353C45;
--bg-deep: #484F5A;
--light: #fff;
--light-deep: #85909F;
--dark: #333A44;
--dark-deep: #242B38;
--text: #9BA5B0;
--text-deep: #E2E2E2;
--label: #8791A0;
--label-deep: #93A0B5;
--primary: #747CEC;
--primary-deep: #6269C9;
--secondary: #5FCC9B;
--secondary-deep: #50AC83;
--active: rgba(73,115,242,0.35);
--active-deep: rgba(73,115,242,0.5);;
--warn: #FDF1D0;
--warn-deep: #937224;
--error: #FFCFCF;
--error-deep: #CC3F3F;
--info: #484F5A;
--info-deep: #ABB6C2;
--disable: #535A64;
--disable-deep: #586475;
--gray: #353A40;
--gray-deep: #424953;
--area: #F6F8FA;
--area-deep: #EFF3F7;
`;

  const light = `
--bg: #fff;
--bg-deep: #FAFBFD;
--light: #fff;
--light-deep: #464E59;
--dark: #333A44;
--dark-deep: #242B38;
--title: #6F757D;
--title-deep: #595F63;
--text: #6F757D;
--text-deep: #595F63;
--label: #9EA8AE;
--label-deep: #8C969C;
--primary: #747CEC;
--primary-deep: #6269C9;
--secondary: #5FCC9B;
--secondary-deep: #50AC83;
--active: rgba(73,115,242,0.35);
--active-deep: rgba(73,115,242,0.5);;
--warn: #FDF1D0;
--warn-deep: #937224;
--error: #FFCFCF;
--error-deep: #CC3F3F;
--info: #F1F3F9;
--info-deep: #6E757C;
--disable: #DFE1E5;
--disable-deep: #677388;
--gray: #F8FAFC;
--gray-deep: #EFF2F6;
--area: #F6F8FA;
--area-deep: #EFF3F7;
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
--shadow: rgba(0,0,0,0.1);
--shadow-deep: rgba(0,0,0,0.2);
--line: rgba(0,0,0,0.09);
--line-deep: rgba(0,0,0,0.16);
--alpha: rgba(0,0,0,0);
--mask: rgba(0,0,0,0.35);
--mask-deep: rgba(0,0,0,0.6);
--px: 1px;
--r: 7px;
--h: 44px;
--w: 240px;
--a: 10px;
--a2: 20px;
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
body.reboot{
  margin: 0px;
  padding: 0px;
  background: var(--bg);
  font-family: var(--sans);
}
.reboot article,
.reboot aside,
.reboot details,
.reboot figcaption,
.reboot figure,
.reboot footer,
.reboot header,
.reboot main,
.reboot mark,
.reboot nav,
.reboot section,
.reboot summary,
.reboot time {
  margin: 0px;
  padding: 0px;
}
.reboot * {
  box-sizing: border-box;
}
.tap-none, .reboot button, .reboot input, .reboot a, .reboot select {
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  -webkit-appearance: none;
  border: none;
  outline: none;
}
@media (pointer: fine) {
  .reboot button,
  .reboot a {
    cursor: pointer;
  }
}
.border-box {
  box-sizing: border-box;
}
.content-box {
  box-sizing: content-box;
}
.g-col {
  display: grid;
  grid-auto-flow: column;
}
.g-row {
  display: grid;
  grid-auto-flow: row;
}
.g-col-dense {
  display: grid;
  grid-auto-flow: column dense;
}
.g-row-dense {
  display: grid;
  grid-auto-flow: row dense;
}
.f-row {
  display: flex;
  flex-direction: row;
}
.f-col {
  display: flex;
  flex-direction: column;
}
.f-row-reverse {
  display: flex;
  flex-direction: row-reverse;
}
.f-col-reverse {
  display: flex;
  flex-direction: column-reverse;
}
  `;
  const sty = document.createElement("style");
  sty.textContent = cssVal;
  document.head.append(sty);

  const flavor = `
time: transition:$1;
form: transform:$1;
fm: font-family:$1;
d: display:$1;
pe: pointer-events:$1;
pos: position:$1;

g-area: grid-area:$1;
g-areas: display:grid grid-template-areas:$1;

g-rows: display:grid grid-template-rows:$1;
g-cols: display:grid grid-template-columns:$1;

pc: place-content:$1;
pi: place-items:$1;
ps: place-self:$1;
jc: justify-content:$1;
ji: justify-items:$1;
js: justify-self:$1;
ac: align-content:$1;
ai: align-items:$1;
as: align-self:$1;

bg: background:$1;
bgm: background-image:$1;
gradient: background-image:linear-gradient($1,$2,$3);
text-gradient: -webkit-background-clip:text gradient:$1,$2,$3 color:--alpha;

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

br-px: border-right:--px|solid|$1;
bl-px: border-left:--px|solid|$1;
bt-px: border-top:--px|solid|$1;
bb-px: border-bottom:--px|solid|$1;
b-px: border:--px|solid|$1;

z: z-index:$1;
o: opacity:$1;
c: color:$1;
s: box-shadow:$1;
r: border-radius:$1;
ol: outline:$1;
of: overflow:$1 -webkit-overflow-scrolling:touch;
of-x: overflow-x:$1 -webkit-overflow-scrolling:touch;
of-y: overflow-y:$1 -webkit-overflow-scrolling:touch;
`;

  const flavorEle = document.createElement("mark");
  flavorEle.style.display = "none";
  flavorEle.setAttribute("flavor", "");
  flavorEle.textContent = flavor;
  document.body.append(flavorEle);
}
