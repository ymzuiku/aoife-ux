export interface UxCellProps extends IProps {
  topCell?: boolean;
}

const cellBox = "cols:1fr|auto padding:10px|10px bg:--plan bb:--divide button";

export function UxCell({ topCell, className, children, ...rest }: UxCellProps) {
  return (
    <div
      class={[topCell && "bt:--divide bt:20px", cellBox, className]}
      {...rest}
    >
      <div>{children}</div>
      <div class="align-self:center opacity:0.3">
        <svg
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
          width="20px"
          height="20px"
          fill="currentColor"
        >
          <path d="M689.621 512l-328.832-328.832-60.331 60.331 268.501 268.501-268.501 268.501 60.331 60.331z"></path>
        </svg>
      </div>
    </div>
  );
}
