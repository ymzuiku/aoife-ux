const sty =
  "b:1px|solid|--line-deep outline:none h:46px bg:--bg radius:--r pl:10px :focus:bg:--gray :focus-within:s:0|0|0|3px|--active t:all|0.2s|--ease box-sizing:border-box time:0.2s|all|--ease";

export function UxOutInput({ className, ...rest }: IProps) {
  return <input class={[sty, className]} {...rest}></input>;
}
