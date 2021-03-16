// import css from "template-css";

export function UxInput({
  children,
  oninput,
  className,
  style,
  ...rest
}: IProps) {
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
    <div class={["ux-input", className as string]} style={style}>
      <label
        class={() => ["ux-input__label", state.haveText && "js-have-text"]}
      >
        {children![0]}
      </label>
      {input}
      {children![1] && children![1]}
    </div>
  );

  return out;
}

// css`
//   .ux-input {
//     position: relative;
//     transition: 0.2s all ease-out;
//     border-radius: 4px;
//     border: 1px solid var(--gray-500);
//     display: grid;
//     grid-template-columns: 1fr auto;
//   }
//   @media (pinter: fine) {
//     .ux-input:hover {
//       border: 1px solid var(--primary-500);
//     }
//   }
//   .ux-input:focus-within {
//     border: 1px solid var(--primary-500);
//     box-shadow: 0px 0px 0px 4px var(--primary-100);
//   }
//   .ux-input > .ux-input__label {
//     color: var(--gray-500);
//     transform-origin: left;
//     transition: 0.17s all ease-out;
//     position: block;
//     position: absolute;
//     left: 15px;
//     top: 16px;
//     pointer-events: none;
//   }
//   .ux-input > input {
//     background: rgba(0, 0, 0, 0);
//   }
//   .ux-input:focus-within > .ux-input__label,
//   .ux-input > .js-have-text {
//     transform: translate(0, -13px) scale(0.78);
//   }
//   .ux-input > .ux-input__input {
//     padding: 26px 15px 9px 15px;
//     background: rgba(0, 0, 0, 0);
//     width: 100%;
//     outline: none;
//     border: none;
//   }
// `;
