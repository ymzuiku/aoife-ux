import css from "template-css";

interface UxButton extends IProps {
  ghost?: boolean;
}

export function UxButton({ ghost, className, children, ...rest }: UxButton) {
  return (
    <button
      type="button"
      class={[ghost ? "ux-button-ghost" : "ux-button", className as string]}
      {...rest}
    >
      {children}
    </button>
  );
}

css`
  .ux-button-ghost {
    padding: 12px 16px;
    border-radius: 4px;
    background: var(--white);
    transition: 0.2s all ease-out;
    color: var(--primary-600);
  }
  @media (pointer: fine) {
    .ux-button-ghost:hover {
      background: var(--gray-200);
    }
  }
  .ux-button-ghost:active {
    background: var(--gray-300);
  }
  .ux-button {
    padding: 12px 16px;
    border-radius: 4px;
    background: var(--primary-500);
    transition: 0.2s all ease-out;
    color: var(--white);
  }
  @media (pointer: fine) {
    .ux-button:hover {
      background: var(--primary-600);
    }
  }

  .ux-button:active {
    background: var(--primary-700);
    box-shadow: 0px 0px 0px 4px var(--primary-100);
  }
  .ux-button:focus {
    outline: none;
    box-shadow: 0px 0px 0px 4px var(--primary-100);
  }
`;
