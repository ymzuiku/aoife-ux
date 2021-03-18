export function UxLayout({ children, className }: IProps) {
  return <div class={["h:100vh d:grid", className]}>{children}</div>;
}
