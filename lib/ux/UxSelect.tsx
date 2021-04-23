const icon = `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>`;

const sty =
  "p:0|--a1 h:--h bb-px:--disable-weak :hover:bg:--active-weak g-cols:1fr|auto :active:bg:--active";

export function UxSelect({ children, className, ...rest }: IProps) {
  return (
    <div class={[sty, className]} {...rest}>
      <select class="bg:--black-0 ol:none" {...rest}>
        {children}
      </select>
      <i
        class="s:100% fs:1.2em g-col c:--disable-deep pc:center"
        innerHTML={icon}
      ></i>
    </div>
  );
}
