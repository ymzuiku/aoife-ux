interface UxInputCodes extends IProps {
  atInput?: (text: string) => any;
  disabled?: boolean;
  len?: number;
  onlyNumber?: boolean;
}

const simInputSty =
  "mr:--a1 outline:none h:--h w:--h bg:--gray :focus:bg:--gray-deep r:--r t:all|0.2s|--ease box-sizing:border-box text-align:center :disabled:bg:--warn-weak :disabled:pe:none";

export const UxInputCodes = ({
  len = 6,
  disabled = false,
  onlyNumber = true,
  className,
  atInput,
  ...rest
}: UxInputCodes) => {
  const handleLoadCode = () => {
    let code = "";
    simInputs.forEach((item) => {
      code += (item as HTMLInputElement).value;
    });
    return code;
  };

  const simInputs = Array(len)
    .fill(0)
    .map((_, i) => {
      const input = (
        <input
          data-sim={i}
          disabled={() => disabled}
          onfocus={() => {
            simInputs.forEach((input, _i) => {
              if (_i >= i) {
                input.value = "";
              }
            });
          }}
          onkeydown={(e) => {
            (e as any).target.value = "";
            if (e.key === "Backspace" || e.key === "Delete") {
              const el = out.querySelector(
                `[data-sim="${i - 1}"]`
              ) as HTMLInputElement;
              if (el) {
                el.value = "";
                el.focus();
              }
            }
          }}
          oninput={(e) => {
            if (onlyNumber) {
              if (!/\d/.test(e.target.value)) {
                e.target.value = "";
                return;
              }
            }

            const el = document.querySelector(
              `[data-sim="${i + 1}"]`
            ) as HTMLInputElement;
            if (el) {
              el.value = "";
              el.focus();
            }

            let text = handleLoadCode();
            if (atInput) {
              setTimeout(() => atInput(text));
            }
          }}
          maxLength={1}
          class={simInputSty}
        ></input>
      );
      if (i === 0) {
        aoife(input, {onAppend: ()=>{
          input.focus();
        }})
      }
      return input;
    });

  const out = (
    <div class={["f-row", className].join(' ')} {...rest}>
      {simInputs}
    </div>
  );
  return out;
};
