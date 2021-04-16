import css from "template-css";

export function UxSelect({
  children,
  oninput,
  className,
  style,
  ...rest
}: IProps) {
  return (
    <select class={["ux-select", className]} {...rest}>
      {children}
    </select>
  );
}

css`
  :root {
    --select-arrow-img: url("data:image/png;base64,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");
  }
  .ux-select {
    outline: 0;
    padding: 4px 1.8em 4px 10px;
    position: relative;
    transition: 0.2s all ease-out;
    border-radius: 4px;
    border: 1px solid var(--gray);
    display: grid;
    width: 100%;
    background: var(--select-arrow-img) no-repeat scroll transparent;
    background-position: calc(100% - 0.6em) calc(50% + 0.05em);
    background-size: 0.6em 0.4em;
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
  }
  @media (pointer: fine) {
    .ux-select:hover {
      border: 1px solid var(--primary);
    }
  }
  .ux-select:focus-within {
    border: 1px solid var(--primary);
    box-shadow: 0px 0px 0px 2px var(--primary);
  }
`;
