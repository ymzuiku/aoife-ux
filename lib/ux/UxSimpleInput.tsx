const sty =
  "b:1px|solid|rgba(0,0,0,0.1) outline:none h:46px bg:--bg radius:--r pl:10px :focus:bg:--gray t:all|0.2s|--ease box-sizing:border-box";

export function UxSimpleInput({ className, ...rest }: IProps) {
  return <input class={[sty, className]} {...rest}></input>;
}
