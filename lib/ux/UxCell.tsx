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
p:--a1
bg:--bg
bb-px:--disable-weak
tt:0.2s|all|--ease
pointer
:hover:bg:--active-weak
:active:bg:--active
  `;

export function UxCell({
  selected,
  topCell,
  className,
  children,
  ...rest
}: UxCellProps) {
  return (
    <div
      class={[
        topCell && "bt-px:--gray-deep",
        selected && "bl:1px|solid|--primary",
        sty,
        className,
      ].join(' ')}
      {...rest}
    >
      <div>{children}</div>
      <div class="align-self:center opacity:0.3" innerHTML={icon}></div>
    </div>
  );
}
