export interface AppTabItem {
  label: string;
  element: HTMLElement;
  selectedElement?: HTMLElement;
}

export interface UxAppTabProps extends IProps {
  data: AppTabItem[];
  onchange?: (num: number) => void;
}

export function UxAppTab({
  data,
  onchange,
  className,
  ...rest
}: UxAppTabProps) {
  const state = {
    selectedNum: 0,
  };
  const out = (
    <div
      class={[
        "height:54px pb:env(safe-area-inset-bottom) bg:--plan w:100% bt:--divide col",
        className,
      ]}
      {...rest}
    >
      {data.map((item, i) => {
        [
          ["fill", "var(--app-tab)"],
          ["width", "24px"],
          ["height", "24px"],
        ].forEach((v) => {
          item.element.setAttribute(v[0], v[1]);
          if (item.selectedElement) {
            item.selectedElement.setAttribute(v[0], v[1]);
          }
        });

        return (
          <div
            class={() => {
              const isSelect = i === state.selectedNum;
              return [
                "row place-content:center",
                isSelect ? "--app-tab:--primary" : "--app-tab:--weak",
              ];
            }}
            onclick={() => {
              state.selectedNum = i;
              onchange && onchange(i);
              aoife.next(out);
            }}
          >
            <div class="color:--app-tab place-self:center">
              {() =>
                i === state.selectedNum
                  ? item.selectedElement || item.element
                  : item.element
              }
            </div>
            <p class="fs:12px color:--app-tab">{item.label}</p>
          </div>
        );
      })}
    </div>
  );
  return out;
}
