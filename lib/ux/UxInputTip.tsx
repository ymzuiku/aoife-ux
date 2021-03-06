import css from "template-css";

interface UxInputTipProps extends IProps {
  right?: any;
}

export function UxInputTip({
  oninput,
  className,
  placeholder,
  right,
  style,
  ...rest
}: UxInputTipProps) {
  const state = {
    haveText: false as any,
  };

  const _oninput = (e: any) => {
    state.haveText = !!e.target.value;
    aoife.next(out);
    if (oninput) {
      oninput(e);
    }
  };
  const input = <input class="ux-input__input" oninput={_oninput} {...rest} />;

  const out = (
    <div class={["ux-input", className as string].join(' ')} style={style}>
      <label
        class={() => ["ux-input__label", state.haveText && "js-have-text"].join(' ')}
      >
        {placeholder || "Please input"}
      </label>
      {input}
      {right && right}
    </div>
  );

  return out;
}

css`
  .ux-input {
    font-family: var(--sans);
    position: relative;
    transition: 0.2s all ease-out;
    border-radius: var(--r);
    border: 1px solid var(--disable-weak);
    display: grid;
    grid-template-columns: 1fr auto;
  }
  @media (pinter: fine) {
    .ux-input:hover {
      border: 1px solid var(--primary);
    }
  }
  .ux-input > .ux-input__label {
    color: var(--label);
    transform-origin: left;
    transition: 0.17s all ease-out;
    position: absolute;
    left: var(--a1);
    top: calc(var(--a1) * 1.75);
    pointer-events: none;
  }

  .ux-input:focus-within {
    border: 1px solid var(--primary);
    box-shadow: 0px 0px 0px 3px var(--active);
  }
  .ux-input:focus-within > .ux-input__label,
  .ux-input > .js-have-text {
    transform: translate(0, calc(var(--a1) * -1.5)) scale(0.8);
  }
  .ux-input > .ux-input__input {
    padding: calc(var(--a1) * 2.5) var(--a1) var(--a1) var(--a1);
    background: rgba(0, 0, 0, 0);
    width: 100%;
    outline: none;
    border: none;
  }
`;
