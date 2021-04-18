const sty =
  "outline:none h:46px bg:--area radius:--r pl:10px :focus:bg:--area-deep t:all|0.2s|--ease box-sizing:border-box time:0.2s|all|--ease";

export function UxInputWeak({ className, ...rest }: IProps) {
  return <input class={[sty, className]} {...rest}></input>;
}
