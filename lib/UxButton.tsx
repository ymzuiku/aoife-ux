import css from "template-css";

export function UxButton({
  children,
  oninput,
  className,
  style,
  ...rest
}: IProps) {
  return (
    <button class={["ux-button", className]} {...rest}>
      {children}
    </button>
  );
}

css`
  .ux-button {
    outline: 0;
    padding: 4px 1.8em 4px 10px;
    position: relative;
    transition: 0.2s all ease-out;
    border-radius: 4px;
    display: grid;
    width: 100%;
    place-content: center;
    background: var(--primary);
    color: var(--front);
    background-position: calc(100% - 0.6em) calc(50% + 0.05em);
    background-size: 0.6em 0.4em;
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
  }
  @media (pointer: fine) {
    .ux-button:hover {
      opacity: 0.9;
    }
  }
  .ux-button:active {
    background: var(--active);
  }
  /* .ux-button:focus-within {
    box-shadow: 0px 0px 0px 2px var(--active);
  } */
`;
