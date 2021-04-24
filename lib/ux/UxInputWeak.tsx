const sty =
  "outline:none h:--h w:100% bg:--gray r:--r p:0px|14px :focus:bg:--gray-deep t:all|0.2s|--ease tt:0.2s|all|--ease";

export function UxInputWeak({ className, ...rest }: IProps) {
  return <input class={[sty, className]} {...rest}></input>;
}
