export interface AppTabItem {
  label: string;
  element: () => HTMLElement;
  selectedElement?: () => HTMLElement;
  page?: any;
}

export interface AppTabItemInstans {
  label: string;
  element: HTMLElement;
  selectedElement: HTMLElement;
  page?: any;
}

export interface UxAppTabProps extends IProps {
  data: AppTabItem[];
  onChange?: (num: number) => void;
}

export function UxAppTab({
  data,
  onChange,
  className,
  ...rest
}: UxAppTabProps) {
  const state = {
    selectedNum: 0,
  };
  const items = data.map((v: any) => {
    const out = {
      label: v.label,
      element: v.element(),
      selectedElement: v.selectedElement ? v.selectedElement() : v.element(),
    };
    return out;
  }) as AppTabItemInstans[];

  const out = (
    <div
      class={[
        "height:54px pb:env(safe-area-inset-bottom) bg:--plan w:100% bt:--divide col",
        className,
      ]}
      {...rest}
    >
      {items.map((item, i) => {
        [
          ["fill", "var(--app-tab)"],
          ["width", "24px"],
          ["height", "24px"],
        ].forEach((v) => {
          item.element.setAttribute(v[0], v[1]);
          item.selectedElement.setAttribute(v[0], v[1]);
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
              onChange && onChange(i);
              aoife.next(out);
            }}
          >
            <div class="color:--app-tab place-self:center">
              {() =>
                i === state.selectedNum ? item.selectedElement : item.element
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
