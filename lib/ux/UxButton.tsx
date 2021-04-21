const sty =
  "h:--h time:0.3s|all|--ease r:--r bg:--primary color:--light  p:--a1|--a2 :active:bg:--primary-deep :focus-within:s:0|0|0|3px|--active";

export function UxButton({
  children,
  oninput,
  className,
  style,
  ...rest
}: IProps) {
  return (
    <button class={[sty, className]} {...rest}>
      {children}
    </button>
  );
}
