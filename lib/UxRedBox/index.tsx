import css from "template-css";

export function UxRedBox(error: Error) {
  return <pre class="ux-redbox">{error.toString()}</pre>;
}

css`
  .ux-redbox {
    width: 100%;
    padding: var(--a6) 0px var(--a6) var(--a4);
    margin: 0px;
    font-weight: 500;
    background: var(--red1);
    color: var(--red6);
  }
`;
