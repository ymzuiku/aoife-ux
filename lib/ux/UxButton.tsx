const sty =
  "h:--h tt:0.3s|all|--ease r:--r bg:--primary color:--light  p:0|--a2 :active:bg:--primary-deep :focus-within:bs:0|0|0|3px|--active-weak";

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
