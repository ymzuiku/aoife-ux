export interface UxCellProps extends IProps {
  topCell?: boolean;
  selected?: boolean;
}

const icon = `<svg
viewBox="0 0 1024 1024"
xmlns="http://www.w3.org/2000/svg"
width="20px"
height="20px"
fill="currentColor"
>
<path d="M689.621 512l-328.832-328.832-60.331 60.331 268.501 268.501-268.501 268.501 60.331 60.331z"></path>
</svg>`;

const sty = `
g-cols:1fr|auto
gap:--a1
padding:--a2
bg:--bg-weak
m:--a1
border-radius:--a1
ts:0.2s|all|--ease
pointer
:hover:bg:--active-weak
:active:bg:--active
  `;

export function UxCellWeak({
  selected,
  className,
  children,
  ...rest
}: UxCellProps) {
  return (
    <div
      class={[selected && "bl:1px|solid|--primary", sty, className].join(" ")}
      {...rest}
    >
      <div>{children}</div>
      <div class="align-self:center opacity:0.3" innerHTML={icon}></div>
    </div>
  );
}
