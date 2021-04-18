const sty =
  "outline:none h:46px bg:--area r:--r p:0px|14px :focus:bg:--area-deep t:all|0.2s|--ease box-sizing:border-box time:0.2s|all|--ease";

export function UxInputWeak({ className, ...rest }: IProps) {
  return <input class={[sty, className]} {...rest}></input>;
}
