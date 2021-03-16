import css from "template-css";

interface UxItemProps extends IProps {
  column?: boolean;
}

export function UxItem({ row, className, ...rest }: UxItemProps) {
  return (
    <div class={[row && "ux-item-row", "ux-item", className]} {...rest}></div>
  );
}

css`
  .ux-item-row {
    grid-template-columns: none;
    grid-auto-flow: row;
  }
  .ux-item {
    grid-gap: 6px;
    grid-template-columns: none;
    grid-auto-flow: row;
  }
  @media (min-width: 640px) {
    .ux-item {
      display: grid;
      grid-template-columns: 140px 1fr;
    }
  }
  .ux-item > *:first-child {
    font-size: 16px;
    padding-top: 4px;
  }
  .ux-item > *:last-child {
    display: grid;
    grid-auto-flow: row;
    grid-gap: 6px;
  }
`;
