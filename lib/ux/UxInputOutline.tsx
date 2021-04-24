const sty = `
  h:--h w:100% bg:--bg r:--r p:0|--a1 :focus-within:bs:0|0|0|3px|--active 
  :hover:b-px:--primary-weak
  :focus-within:b-px:--primary 
  b-px:--disable-weak
  tt:0.2s|all|--ease `;

export function UxInputOutline({ className, ...rest }: IProps) {
  return <input class={[sty, className]} {...rest}></input>;
}
